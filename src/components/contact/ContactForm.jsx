import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, ChevronDown, Search } from "lucide-react";

const fields = [
  { name: "name", label: "Your name", type: "text", placeholder: "John Doe" },
  {
    name: "email",
    label: "Email address",
    type: "email",
    placeholder: "john@example.com",
  },
  {
    name: "company",
    label: "Company",
    type: "text",
    placeholder: "Your company name",
  },
  {
    name: "website",
    label: "Website",
    type: "text",
    placeholder: "https://yourwebsite.com",
  },
];

const countries = [
  { value: "USA", label: "United States" },
  { value: "UK", label: "United Kingdom" },
  { value: "CAN", label: "Canada" },
  { value: "AUS", label: "Australia" },
  { value: "IND", label: "India" },
  { value: "GER", label: "Germany" },
  { value: "FRA", label: "France" },
  { value: "UAE", label: "United Arab Emirates" },
  { value: "SGP", label: "Singapore" },
  { value: "OTH", label: "Other" },
];

const lookingForOptions = [
  { value: "idea", label: "I have an idea (Build)" },
  { value: "live", label: "My product is live (Grow)" },
];

const planOptions = {
  idea: [
    { value: "starter-mvp", label: "Starter MVP " },
    { value: "growth-mvp", label: "Growth MVP " },
  ],
  live: [
    { value: "starter", label: "Starter (40 hrs)" },
    { value: "growth", label: "Growth (80 hrs)" },
    { value: "scale", label: "Scale (160 hrs)" },
    { value: "enterprice", label: "Enterprise (More than 160 hrs)" },
  ],
};

export default function ContactForm({ onSubmit, isLoading }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    country: "",
    lookingFor: "",
    plan: "",
    message: "",
  });
  const [focused, setFocused] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [dynamicCountries, setDynamicCountries] = useState(countries);
  const [isCountriesLoading, setIsCountriesLoading] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");

  const filteredCountries = dynamicCountries.filter((c) =>
    c.label.toLowerCase().includes(countrySearch.toLowerCase()),
  );

  useEffect(() => {
    const fetchCountries = async () => {
      setIsCountriesLoading(true);
      try {
        const response = await fetch(
          "https://restcountries.com/v3.1/all?fields=name,cca2",
        );
        if (!response.ok) throw new Error("Failed to fetch countries");
        const data = await response.json();
        const formatted = data
          .map((c) => ({
            value: c.cca2,
            label: c.name.common,
          }))
          .sort((a, b) => a.label.localeCompare(b.label));
        setDynamicCountries(formatted);
      } catch (error) {
        console.error("Error fetching countries:", error);
      } finally {
        setIsCountriesLoading(false);
      }
    };

    fetchCountries();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "lookingFor") {
      setForm((f) => ({ ...f, [name]: value, plan: "" }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  const handleDropdownOpen = (type) => {
    setOpenDropdown(openDropdown === type ? null : type);
    if (type !== "country") {
      setCountrySearch("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  const currentPlans = form.lookingFor ? planOptions[form.lookingFor] : [];

  const handleClickOutside = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setOpenDropdown(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {fields.map((f, idx) => {
        return (
          <motion.div
            key={f.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
          >
            <label className="block text-sm font-semibold text-(--color-text-primary) mb-2.5">
              {f.label}
            </label>
            <motion.div
              animate={{
                boxShadow:
                  focused === f.name
                    ? "0 0 20px rgba(42, 171, 215, 0.2)"
                    : "0 2px 8px rgba(0, 0, 0, 0.04)",
              }}
              className="relative"
            >
              <input
                required
                type={f.type}
                disabled={isLoading}
                name={f.name}
                placeholder={f.placeholder}
                value={form[f.name]}
                onChange={handleChange}
                onFocus={() => setFocused(f.name)}
                onBlur={() => setFocused(null)}
                className={`w-full px-4 py-3.5 rounded-xl bg-white border-2 border-(--color-border-light) text-(--color-text-primary) placeholder-(--color-text-muted) focus:border-(--color-brand-blue) focus:outline-none transition-all duration-300 ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
              />
              {form[f.name] && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  <CheckCircle2 className="w-5 h-5 text-(--color-brand-green)" />
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        );
      })}

      {/* What are you looking for? */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="relative"
      >
        <label className="block text-sm font-semibold text-(--color-text-primary) mb-2.5">
          What are you looking for?
        </label>
        <motion.button
          type="button"
          disabled={isLoading}
          onClick={(e) => {
            e.stopPropagation();
            handleDropdownOpen("lookingFor");
          }}
          animate={{
            boxShadow:
              openDropdown === "lookingFor"
                ? "0 0 20px rgba(42, 171, 215, 0.2)"
                : "0 2px 8px rgba(0, 0, 0, 0.04)",
          }}
          className={`w-full px-4 py-3.5 rounded-xl bg-white border-2 border-(--color-border-light) text-(--color-text-primary) focus:border-(--color-brand-blue) focus:outline-none transition-all duration-300 text-left flex items-center justify-between hover:border-(--color-brand-blue)/50 ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          <span
            className={
              form.lookingFor
                ? "text-(--color-text-primary)"
                : "text-(--color-text-muted)"
            }
          >
            {form.lookingFor
              ? lookingForOptions.find((o) => o.value === form.lookingFor)
                  ?.label
              : "Select an option"}
          </span>
          <motion.div
            animate={{ rotate: openDropdown === "lookingFor" ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-5 h-5 text-(--color-brand-blue)" />
          </motion.div>
        </motion.button>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {openDropdown === "lookingFor" && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-(--color-border-light) rounded-xl shadow-xl z-50 overflow-hidden"
            >
              {lookingForOptions.map((opt, idx) => (
                <motion.button
                  key={opt.value}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleChange({
                      target: { name: "lookingFor", value: opt.value },
                    });
                    setOpenDropdown(null);
                  }}
                  whileHover={{ backgroundColor: "rgba(42, 171, 215, 0.08)" }}
                  className={`w-full px-4 py-3.5 text-left transition-all duration-200 flex items-center justify-between group ${
                    form.lookingFor === opt.value
                      ? "bg-(--color-bg-brand-tint) border-l-4 border-l-(--color-brand-blue)"
                      : "border-l-4 border-l-transparent"
                  } ${idx !== lookingForOptions.length - 1 ? "border-b border-b-(--color-border-light)" : ""}`}
                >
                  <span
                    className={`font-medium ${
                      form.lookingFor === opt.value
                        ? "text-(--color-brand-blue) font-black"
                        : "text-(--color-text-primary)"
                    }`}
                  >
                    {opt.label}
                  </span>
                  {form.lookingFor === opt.value && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                      <CheckCircle2 className="w-5 h-5 text-(--color-brand-blue)" />
                    </motion.div>
                  )}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Conditional Plan Selection */}
      <AnimatePresence>
        {form.lookingFor && (
          <motion.div
            initial={{ opacity: 0, y: 20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <label className="block text-sm font-semibold text-(--color-text-primary) mb-2.5">
              Select plan
            </label>
            <motion.button
              type="button"
              disabled={isLoading}
              onClick={(e) => {
                e.stopPropagation();
                handleDropdownOpen("plan");
              }}
              animate={{
                boxShadow:
                  openDropdown === "plan"
                    ? "0 0 20px rgba(42, 171, 215, 0.2)"
                    : "0 2px 8px rgba(0, 0, 0, 0.04)",
              }}
              className={`w-full px-4 py-3.5 rounded-xl bg-white border-2 border-(--color-border-light) text-(--color-text-primary) focus:border-(--color-brand-blue) focus:outline-none transition-all duration-300 text-left flex items-center justify-between hover:border-(--color-brand-blue)/50 ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              <span
                className={
                  form.plan
                    ? "text-(--color-text-primary)"
                    : "text-(--color-text-muted)"
                }
              >
                {form.plan
                  ? currentPlans.find((p) => p.value === form.plan)?.label
                  : "Select a plan"}
              </span>
              <motion.div
                animate={{ rotate: openDropdown === "plan" ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-5 h-5 text-(--color-brand-blue)" />
              </motion.div>
            </motion.button>

            {/* Dropdown Menu */}
            <AnimatePresence>
              {openDropdown === "plan" && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-(--color-border-light) rounded-xl shadow-xl z-50 overflow-hidden"
                >
                  {currentPlans.map((plan, idx) => (
                    <motion.button
                      key={plan.value}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleChange({
                          target: { name: "plan", value: plan.value },
                        });
                        setOpenDropdown(null);
                      }}
                      whileHover={{
                        backgroundColor: "rgba(42, 171, 215, 0.08)",
                      }}
                      className={`w-full px-4 py-3.5 text-left transition-all duration-200 flex items-center justify-between group ${
                        form.plan === plan.value
                          ? "bg-(--color-bg-brand-tint) border-l-4 border-l-(--color-brand-blue)"
                          : "border-l-4 border-l-transparent"
                      } ${idx !== currentPlans.length - 1 ? "border-b border-b-(--color-border-light)" : ""}`}
                    >
                      <span
                        className={`font-medium ${
                          form.plan === plan.value
                            ? "text-(--color-brand-blue) font-black"
                            : "text-(--color-text-primary)"
                        }`}
                      >
                        {plan.label}
                      </span>
                      {form.plan === plan.value && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                        >
                          <CheckCircle2 className="w-5 h-5 text-(--color-brand-blue)" />
                        </motion.div>
                      )}
                    </motion.button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Country Selection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="relative"
      >
        <label className="block text-sm font-semibold text-(--color-text-primary) mb-2.5">
          Country
        </label>
        <motion.button
          type="button"
          disabled={isLoading}
          onClick={(e) => {
            e.stopPropagation();
            handleDropdownOpen("country");
          }}
          animate={{
            boxShadow:
              openDropdown === "country"
                ? "0 0 20px rgba(42, 171, 215, 0.2)"
                : "0 2px 8px rgba(0, 0, 0, 0.04)",
          }}
          className={`w-full px-4 py-3.5 rounded-xl bg-white border-2 border-(--color-border-light) text-(--color-text-primary) focus:border-(--color-brand-blue) focus:outline-none transition-all duration-300 text-left flex items-center justify-between hover:border-(--color-brand-blue)/50 ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          <span
            className={
              form.country
                ? "text-(--color-text-primary)"
                : "text-(--color-text-muted)"
            }
          >
            {isCountriesLoading
              ? "Loading countries..."
              : form.country
                ? dynamicCountries.find((c) => c.value === form.country)?.label ||
                  form.country
                : "Select your country"}
          </span>
          <motion.div
            animate={{ rotate: openDropdown === "country" ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-5 h-5 text-(--color-brand-blue)" />
          </motion.div>
        </motion.button>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {openDropdown === "country" && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-(--color-border-light) rounded-xl shadow-xl z-50 overflow-hidden"
            >
              {/* Search input for countries */}
              <div className="p-2 border-b border-b-(--color-border-light) sticky top-0 bg-white z-10">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-(--color-text-muted)" />
                  <input
                    autoFocus
                    type="text"
                    placeholder="Search country..."
                    value={countrySearch}
                    onChange={(e) => setCountrySearch(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 text-sm bg-gray-50 border border-(--color-border-light) rounded-lg focus:outline-none focus:border-(--color-brand-blue) transition-all"
                  />
                </div>
              </div>

              <div className="max-h-60 overflow-y-auto">
                {filteredCountries.length > 0 ? (
                  filteredCountries.map((opt, idx) => (
                    <motion.button
                      key={opt.value}
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleChange({
                          target: { name: "country", value: opt.value },
                        });
                        setOpenDropdown(null);
                        setCountrySearch("");
                      }}
                      whileHover={{ backgroundColor: "rgba(42, 171, 215, 0.08)" }}
                      className={`w-full px-4 py-3.5 text-left transition-all duration-200 flex items-center justify-between group ${
                        form.country === opt.value
                          ? "bg-(--color-bg-brand-tint) border-l-4 border-l-(--color-brand-blue)"
                          : "border-l-4 border-l-transparent"
                      } ${idx !== filteredCountries.length - 1 ? "border-b border-b-(--color-border-light)" : ""}`}
                    >
                      <span
                        className={`font-medium ${
                          form.country === opt.value
                            ? "text-(--color-brand-blue) font-black"
                            : "text-(--color-text-primary)"
                        }`}
                      >
                        {opt.label}
                      </span>
                      {form.country === opt.value && (
                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                          <CheckCircle2 className="w-5 h-5 text-(--color-brand-blue)" />
                        </motion.div>
                      )}
                    </motion.button>
                  ))
                ) : (
                  <div className="p-8 text-center text-(--color-text-muted) italic text-sm">
                    No countries found matching "{countrySearch}"
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <label className="block text-sm font-semibold text-(--color-text-primary) mb-2.5">
          Tell us about your project (Optional)
        </label>
        <motion.div
          animate={{
            boxShadow:
              focused === "message"
                ? "0 0 20px rgba(42, 171, 215, 0.2)"
                : "0 2px 8px rgba(0, 0, 0, 0.04)",
          }}
        >
          <textarea
            disabled={isLoading}
            name="message"
            rows={5}
            placeholder="Describe your project, goals, and timeline..."
            value={form.message}
            onChange={handleChange}
            onFocus={() => setFocused("message")}
            onBlur={() => setFocused(null)}
            className={`w-full px-4 py-3.5 rounded-xl bg-white border-2 border-(--color-border-light) text-(--color-text-primary) placeholder-(--color-text-muted) focus:border-(--color-brand-blue) focus:outline-none transition-all duration-300 resize-none ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
          />
        </motion.div>
      </motion.div>

      {/* Submit Button */}
      <motion.button
        whileHover={!isLoading ? { scale: 1.02, y: -2 } : {}}
        whileTap={!isLoading ? { scale: 0.98 } : {}}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        type="submit"
        disabled={isLoading}
        className={`w-full py-4 rounded-xl text-white font-bold text-base hover:shadow-xl transition-all duration-300 relative overflow-hidden group flex items-center justify-center gap-2 ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`}
        style={{
          background: "var(--gradient-brand)",
          boxShadow: isLoading ? "none" : "0 10px 30px var(--color-brand-glow)",
        }}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {isLoading ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
            />
          ) : (
            <Send className="w-5 h-5" />
          )}
          {isLoading ? "Sending..." : "Send Message"}
          {!isLoading && (
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          )}
        </span>
      </motion.button>
    </form>
  );
}
