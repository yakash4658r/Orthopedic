import { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { NAV_LINKS, BRAND } from '../constants/data';
import { X, Menu, Phone, Mail, MapPin } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [microVisible, setMicroVisible] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      setMicroVisible(window.scrollY < 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setDrawerOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  const isHome = location.pathname === '/';

  return (
    <>
      {/* ── TOP MICRO BAR ── */}
      <AnimatePresence>
        {microVisible && (
          <motion.div
            className="fixed top-0 left-0 right-0 z-[5100] hidden lg:flex items-center justify-between px-10 py-2 text-[11px]"
            style={{ background: 'rgba(10,37,64,0.95)', backdropFilter: 'blur(8px)' }}
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="flex items-center gap-6">
              <a href={`tel:${BRAND.phone}`} className="flex items-center gap-1.5 text-white/60 hover:text-[#C9A66B] transition-colors">
                <Phone size={11} /> {BRAND.phone}
              </a>
              <a href={`mailto:${BRAND.email}`} className="flex items-center gap-1.5 text-white/60 hover:text-[#C9A66B] transition-colors">
                <Mail size={11} /> {BRAND.email}
              </a>
            </div>
            <div className="flex items-center gap-1.5 text-white/40">
              <MapPin size={11} />
              <span>Anna Nagar & Chromepet, Chennai | Mon–Sat: 9AM–8PM</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── DESKTOP NAVBAR ── */}
      <motion.nav
        className={`fixed left-0 right-0 z-[5000] transition-all duration-500 ${
          scrolled || !isHome ? 'glass-nav !top-0' : 'glass-nav-transparent'
        } ${microVisible ? 'lg:top-9 top-0' : 'top-0'}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-[72px]">

          {/* Logo */}
          <NavLink to="/" className="flex items-center group">
            <div className="h-10 sm:h-12 lg:h-14 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <img src={import.meta.env.BASE_URL + 'logo.png'} alt="Ortho3Trio Logo" className="h-full w-auto object-contain" />
            </div>
          </NavLink>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map(link => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 rounded-lg group ${
                      isActive ? 'text-[#C9A66B]' : 'text-white/80 hover:text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      {isActive && (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute bottom-0.5 left-4 right-4 h-[2px] rounded-full"
                          style={{ background: '#C9A66B' }}
                          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-4">
            <a
              href={`tel:${BRAND.phone}`}
              className="hidden lg:flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
            >
              <Phone size={14} />
            </a>
            <motion.button
              onClick={() => navigate('/contact')}
              className="hidden lg:block btn-gold px-5 py-2.5 rounded-xl text-sm font-semibold relative z-10"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Book Appointment
            </motion.button>
            <button
              onClick={() => setDrawerOpen(true)}
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ── MOBILE DRAWER ── */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[5100] bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDrawerOpen(false)}
            />
            <motion.div
              className="fixed inset-0 z-[5200] flex flex-col"
              style={{ background: 'linear-gradient(160deg, #0A2540 0%, #0e3560 100%)' }}
              initial={{ clipPath: 'inset(0 0 0 100%)' }}
              animate={{ clipPath: 'inset(0 0 0 0%)' }}
              exit={{ clipPath: 'inset(0 0 0 100%)' }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center justify-between px-8 py-6 border-b border-white/10">
                <NavLink to="/" className="flex items-center gap-3" onClick={() => setDrawerOpen(false)}>
                  <div className="w-9 h-9 flex items-center justify-center">
                    <img src={import.meta.env.BASE_URL + 'Logo.png'} alt="Logo" className="w-full h-full object-contain" />
                  </div>
                  <span className="font-heading text-white text-lg font-bold">Ortho<span style={{ color: '#C9A66B' }}>3Trio</span></span>
                </NavLink>
                <button onClick={() => setDrawerOpen(false)} className="text-white/60 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors">
                  <X size={22} />
                </button>
              </div>
              <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i + 0.15, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <NavLink
                      to={link.path}
                      onClick={() => setDrawerOpen(false)}
                      className={({ isActive }) =>
                        `block py-4 text-2xl font-heading font-semibold border-b border-white/8 transition-colors ${
                          isActive ? 'text-[#C9A66B]' : 'text-white/80 hover:text-white'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>
              <motion.div
                className="px-8 py-8 border-t border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <button
                  onClick={() => { setDrawerOpen(false); navigate('/contact'); }}
                  className="btn-gold w-full py-4 rounded-xl text-base font-semibold"
                >
                  Book Appointment
                </button>
                <div className="mt-4 flex flex-col gap-2">
                  <a href={`tel:${BRAND.phone}`} className="flex items-center gap-2 text-white/40 text-sm justify-center">
                    <Phone size={13} /> {BRAND.phone}
                  </a>
                  <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2 text-white/40 text-sm justify-center">
                    <Mail size={13} /> {BRAND.email}
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
