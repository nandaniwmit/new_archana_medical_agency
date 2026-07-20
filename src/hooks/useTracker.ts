import { useEffect, useRef } from 'react';
import { ActiveTab } from '../types';

export function useTracker(activeTab: ActiveTab) {
  const prevPageRef = useRef<string>('Home');

  useEffect(() => {
    const TRACKING_ENDPOINT = 'https://tools.cprajapati.com/tracker/track.php';
    const urlParams = new URLSearchParams(window.location.search);
    
    let cid = urlParams.get('cid') || localStorage.getItem('wmit_active_cid');
    if (urlParams.get('cid')) {
      localStorage.setItem('wmit_active_cid', urlParams.get('cid') || '');
    }
    
    if (!cid) return;

    let visitorId = localStorage.getItem('wmit_visitor_id') ||
      'wmit_' + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('wmit_visitor_id', visitorId);

    let sessionId = sessionStorage.getItem('wmit_session_id') ||
      'wmit_' + Math.random().toString(36).substring(2, 15);
    sessionStorage.setItem('wmit_session_id', sessionId);

    const getPageName = (tab: ActiveTab) => {
      if (tab && tab !== 'home') {
        return tab.replace('-', ' ').replace(/\b\w/g, c => c.toUpperCase());
      }
      const path = window.location.pathname;
      const segment = path.replace(/\/$/, "").split("/").pop();
      return segment ? segment.split('?')[0] : 'Home';
    };

    const currentPageName = getPageName(activeTab);

    const sendInitPayload = (page: string) => {
      const payload = {
        cid: cid,
        visitor_id: visitorId,
        session_id: sessionId,
        page_name: page,
        referrer: document.referrer || '',
        device: window.innerWidth < 768 ? 'Mobile' : 'Desktop',
        browser: navigator.userAgent,
        action: 'init'
      };
      fetch(TRACKING_ENDPOINT, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      }).catch(() => {});
    };

    const sendExitPayload = (page: string) => {
      const payload = {
        cid: cid,
        session_id: sessionId,
        page_name: page,
        action: 'page_change'
      };

      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
        navigator.sendBeacon(TRACKING_ENDPOINT, blob);
      } else {
        fetch(TRACKING_ENDPOINT, {
          method: 'POST',
          mode: 'cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          keepalive: true
        }).catch(() => {});
      }
    };

    // If page changed since last run, send exit payload for the old one
    if (prevPageRef.current !== currentPageName) {
      sendExitPayload(prevPageRef.current);
    }
    
    // Send init payload for current page
    sendInitPayload(currentPageName);
    prevPageRef.current = currentPageName;

    const handleLocationChange = () => {
      sendExitPayload(currentPageName);
      setTimeout(() => sendInitPayload(currentPageName), 100);
    };

    window.addEventListener('popstate', handleLocationChange);
    
    const handlePageHide = () => {
      sendExitPayload(currentPageName);
    };
    window.addEventListener('pagehide', handlePageHide);

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sendExitPayload(currentPageName);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('pagehide', handlePageHide);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [activeTab]);
}
