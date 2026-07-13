import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        {/* Main pages in nav */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        {/* Secondary pages (still accessible via links) */}
        <Route path="/gallery" element={<Layout><Gallery /></Layout>} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <HashRouter>
      <ScrollProgress />
      <BackToTop />
      <AnimatedRoutes />
    </HashRouter>
  );
}


