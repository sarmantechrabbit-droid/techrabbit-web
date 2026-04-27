import { useState, useEffect } from "react";

const STORAGE_KEY = "cookie_consent";

const defaultConsent = {
  essential: true,
  analytics: false,
  marketing: false,
};

export function useCookieConsent() {
  const [consent, setConsentState] = useState(defaultConsent);
  const [hasConsent, setHasConsent] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setConsentState(parsed);
        setHasConsent(true);
      } catch (error) {
        console.error("Error parsing cookie consent:", error);
      }
    }
    setIsLoaded(true);
  }, []);

  const setConsent = (newConsent) => {
    const updated = { ...consent, ...newConsent };
    setConsentState(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    setHasConsent(true);
  };

  const acceptAll = () => {
    setConsent({
      essential: true,
      analytics: true,
      marketing: true,
    });
  };

  const rejectNonEssential = () => {
    setConsent({
      essential: true,
      analytics: false,
      marketing: false,
    });
  };

  const resetConsent = () => {
    localStorage.removeItem(STORAGE_KEY);
    setConsentState(defaultConsent);
    setHasConsent(false);
  };

  return {
    consent,
    setConsent,
    hasConsent,
    isLoaded,
    acceptAll,
    rejectNonEssential,
    resetConsent,
  };
}
