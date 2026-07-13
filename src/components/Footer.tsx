import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { NAV_LINKS, BRAND } from '../constants/data';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const SERVICES_LINKS = [
  'Hip, Knee & Shoulder Replacement',
  'Fracture & Trauma Care',
  'Minimally Invasive Spine Surgery',
  'ACL Reconstruction',
  'Sports Injury Rehabilitation',
  'Arthroscopy',
];

const SOCIALS = [
  {
    name: 'Facebook', href: '#',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>,
  },
  {
    name: 'Instagram', href: '#',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
  },
  {
    name: 'YouTube', href: '#',
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#0A2540"/></svg>,
  },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) { setSubscribed(true); setEmail(''); }
  };

  return (
    <footer style={{ background: '#061A30', borderTop: '1px solid rgba(201,166,107,0.15)' }}>
      {/* Top gold strip */}
      <div
        className="text-center py-3 text-xs tracking-widest uppercase font-medium"
        style={{ background: 'linear-gradient(90deg, #C9A66B22 0%, #00A99D22 100%)', color: '#C9A66B' }}
      >
        {BRAND.tagline}
      </div>

      {/* Main 4-col grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Col 1 — Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #C9A66B, #E8C98A)' }}>
              <svg width="22" height="22" viewBox="0 0 44 44" fill="none"><path d="M19 14H25V19H30V25H25V30H19V25H14V19H19V14Z" fill="#0A2540" /></svg>
            </div>
            <span className="font-heading text-white text-xl font-bold">OrthoCare <span style={{ color: '#C9A66B' }}>Elite</span></span>
          </div>
          <p className="text-white/40 text-sm leading-relaxed mb-5">
            Chennai's premier multi-specialty orthopaedic destination. Fellowship-trained surgeons. World-class outcomes.
          </p>
          <div className="flex gap-3 mb-6">
            {SOCIALS.map(s => (
              <motion.a
                key={s.name}
                href={s.href}
                aria-label={s.name}
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.5)' }}
                whileHover={{ scale: 1.1, backgroundColor: '#C9A66B', color: '#0A2540' }}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
          {/* Newsletter */}
          <form onSubmit={handleSubscribe}>
            <p className="text-white/40 text-xs mb-2 uppercase tracking-wider">Health Newsletter</p>
            {subscribed ? (
              <p className="text-[#00A99D] text-sm font-medium">✓ Subscribed — thank you!</p>
            ) : (
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 bg-white/8 border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-white/30 outline-none focus:border-[#C9A66B] transition-colors"
                  style={{ background: 'rgba(255,255,255,0.05)' }}
                />
                <button type="submit" className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: '#C9A66B', color: '#0A2540' }}>
                  <Send size={14} />
                </button>
              </div>
            )}
          </form>
        </div>

        {/* Col 2 — Quick Links */}
        <div>
          <h4 className="text-white font-heading text-base font-semibold mb-5 pb-2 border-b border-white/10">Quick Links</h4>
          <ul className="space-y-3">
            {NAV_LINKS.map(link => (
              <li key={link.path}>
                <NavLink to={link.path} className="text-white/45 hover:text-[#C9A66B] text-sm transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-current opacity-60" />
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 — Services */}
        <div>
          <h4 className="text-white font-heading text-base font-semibold mb-5 pb-2 border-b border-white/10">Our Services</h4>
          <ul className="space-y-3">
            {SERVICES_LINKS.map(s => (
              <li key={s}>
                <NavLink to="/services" className="text-white/45 hover:text-[#C9A66B] text-sm transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-current opacity-60" />
                  {s}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 — Contact */}
        <div>
          <h4 className="text-white font-heading text-base font-semibold mb-5 pb-2 border-b border-white/10">Contact Us</h4>
          <ul className="space-y-4 text-sm text-white/45">
            <li className="flex gap-3">
              <MapPin size={14} className="mt-0.5 shrink-0 text-[#C9A66B]" />
              <span>AG-63, River View Colony,<br />Anna Nagar, Chennai - 600040</span>
            </li>
            <li className="flex gap-3">
              <MapPin size={14} className="mt-0.5 shrink-0 text-[#C9A66B]" />
              <span>No.7, CLC Works Road,<br />Chromepet, Chennai - 600044</span>
            </li>
            <li className="flex gap-3">
              <Phone size={14} className="mt-0.5 shrink-0 text-[#C9A66B]" />
              <a href={`tel:${BRAND.phone}`} className="hover:text-[#C9A66B] transition-colors">{BRAND.phone}</a>
            </li>
            <li className="flex gap-3">
              <Mail size={14} className="mt-0.5 shrink-0 text-[#C9A66B]" />
              <a href={`mailto:${BRAND.email}`} className="hover:text-[#C9A66B] transition-colors">{BRAND.email}</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8 px-6 lg:px-10 py-5 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
        <p>© {new Date().getFullYear()} Ortho3Trio, Chennai. All rights reserved.</p>
        <div className="flex gap-5">
          {['Privacy Policy', 'Terms of Service', 'Medical Disclaimer'].map(t => (
            <a key={t} href="#" className="hover:text-[#C9A66B] transition-colors">{t}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
