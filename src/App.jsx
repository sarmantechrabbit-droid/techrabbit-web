import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Pricing from "./pages/Pricing";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import CookiePolicy from "./pages/CookiePolicy";
import CookieConsent from "./components/CookieConsent";
import FloatingCTA from "./components/UI/FloatingCTA";

const pageVariants = {
  initial: { opacity: 0, scale: 0.99 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 1.01 },
};

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="will-change-transform"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/services" element={<Services />} /> */}
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/work" element={<Work />} />
          <Route path="/case-study/:slug" element={<CaseStudyDetail />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} /> */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AnimatedRoutes />
      </Layout>
      <CookieConsent />
      <FloatingCTA />
    </BrowserRouter>
  );
}
