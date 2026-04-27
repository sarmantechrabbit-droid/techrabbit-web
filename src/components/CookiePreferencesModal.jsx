import { motion, AnimatePresence } from "framer-motion";

export default function CookiePreferencesModal({ isOpen, onClose, consent, onSave }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="px-6 py-5 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">Cookie Preferences</h2>
            <p className="mt-1 text-sm text-gray-600">
              Manage how Tech Rabbit uses cookies on this website. Essential cookies are always active as they are required for core functionality.
            </p>
          </div>

          {/* Cookie Options */}
          <div className="px-6 py-5 space-y-5">
            {/* Essential Cookies */}
            <div className="flex items-start justify-between">
              <div className="flex-1 pr-4">
                <h3 className="font-semibold text-gray-900">Essential Cookies</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Required for page navigation, secure access, and form submissions. The website cannot function without these.
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-6 bg-green-500 rounded-full relative">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
                </div>
              </div>
            </div>

            {/* Performance Cookies */}
            <div className="flex items-start justify-between">
              <div className="flex-1 pr-4">
                <h3 className="font-semibold text-gray-900">Performance Cookies</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Collect anonymous information about how visitors use our website, such as pages visited and error messages, to help us improve performance.
                </p>
              </div>
              <button
                onClick={() => onSave({ ...consent, analytics: !consent.analytics })}
                className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${
                  consent.analytics ? "bg-green-500" : "bg-gray-300"
                }`}
                aria-label={consent.analytics ? "Disable analytics cookies" : "Enable analytics cookies"}
              >
                <motion.div
                  className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-md ${
                    consent.analytics ? "right-1" : "left-1"
                  }`}
                  layout
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </button>
            </div>

            {/* Marketing Cookies */}
            <div className="flex items-start justify-between">
              <div className="flex-1 pr-4">
                <h3 className="font-semibold text-gray-900">Marketing Cookies</h3>
                <p className="mt-1 text-sm text-gray-600">
                  Used to track visitors across websites and display relevant, engaging advertisements and measure campaign effectiveness.
                </p>
              </div>
              <button
                onClick={() => onSave({ ...consent, marketing: !consent.marketing })}
                className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${
                  consent.marketing ? "bg-green-500" : "bg-gray-300"
                }`}
                aria-label={consent.marketing ? "Disable marketing cookies" : "Enable marketing cookies"}
              >
                <motion.div
                  className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-md ${
                    consent.marketing ? "right-1" : "left-1"
                  }`}
                  layout
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                onSave(consent);
                onClose();
              }}
              className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
            >
              Save Preferences
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
