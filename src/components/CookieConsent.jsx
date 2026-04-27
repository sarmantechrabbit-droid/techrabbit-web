import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useCookieConsent } from "../hooks/useCookieConsent";
import CookiePreferencesModal from "./CookiePreferencesModal";

export default function CookieConsent() {
  const { hasConsent, isLoaded, acceptAll, rejectNonEssential, setConsent, consent } = useCookieConsent();
  const [showModal, setShowModal] = useState(false);

  if (!isLoaded || hasConsent) return null;

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-0 left-0 right-0 z-40 p-4 sm:p-6"
        >
          <div className="mx-auto max-w-6xl">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                {/* Message */}
                <div className="flex-1">
                  {/* <h3 className="text-lg font-bold text-gray-900 mb-2">
                    We use cookies to improve your experience
                  </h3> */}
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Tech Rabbit uses essential, performance, and marketing cookies to enhance your browsing experience. Essential cookies are always active. Read our{" "}
                    <Link to="/cookie-policy" className="text-[var(--color-brand-blue)] underline hover:no-underline font-medium">Cookie Policy</Link>{" "}
                    for more details.
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
                  <button
                    onClick={acceptAll}
                    className="px-5 py-2.5 text-sm font-semibold text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    aria-label="Accept all cookies"
                  >
                    Accept All
                  </button>
                  <button
                    onClick={rejectNonEssential}
                    className="px-5 py-2.5 text-sm font-semibold text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    aria-label="Reject non-essential cookies"
                  >
                    Reject Non-Essential
                  </button>
                  <button
                    onClick={() => setShowModal(true)}
                    className="px-5 py-2.5 text-sm font-semibold text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    aria-label="Manage cookie preferences"
                  >
                    Manage Preferences
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Preferences Modal */}
      <CookiePreferencesModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        consent={consent}
        onSave={setConsent}
      />
    </>
  );
}
