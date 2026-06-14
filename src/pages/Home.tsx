import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  ChevronRight, Plus, Star, Award, GraduationCap, CheckCircle,
  MapPin, Phone, Mail, Clock, ExternalLink, Send,
  Download, FileText, Video, BookOpen, Stethoscope, ArrowRight, User, ZoomIn
} from 'lucide-react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import PageTransition from '../components/PageTransition';
import AnimateIn, { StaggerChildren, FadeItem } from '../components/AnimateIn';
import HeroSwiper from '../components/HeroSwiper';
import {
  BRAND, DOCTORS, ABOUT, SERVICES, TESTIMONIALS, FAQS, STATS,
  TIMELINE, GALLERY_ITEMS, LOCATIONS, BLOGS, RESOURCE_CATEGORIES, RESOURCES
} from '../constants/data';
import LucideIcon from '../components/LucideIcon';

// ─── Counter for Stats ──────────────────────────────────────────────
function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true });
  useEffect(() => {
    if (!inView) return;
    const steps = 60, duration = 2000;
    const inc = end / steps;
    let cur = 0;
    const t = setInterval(() => {
      cur += inc;
      if (cur >= end) {
        setCount(end);
        clearInterval(t);
      } else {
        setCount(Math.round(cur));
      }
    }, duration / steps);
    return () => clearInterval(t);
  }, [inView, end]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

// ─── FAQ Item Accordion ────────────────────────────────────────────
function FAQItem({ faq, isOpen, toggle }: { faq: typeof FAQS[0]; isOpen: boolean; toggle: () => void }) {
  return (
    <div
      className={`rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'faq-active' : ''}`}
      style={{
        border: isOpen ? '1.5px solid rgba(201,166,107,0.3)' : '1.5px solid rgba(10,37,64,0.08)',
        background: isOpen ? 'rgba(201,166,107,0.02)' : 'white'
      }}
    >
      <button onClick={toggle} className="w-full flex items-center justify-between px-6 py-4 text-left">
        <span className="font-heading text-sm font-bold text-[#0A2540] leading-snug pr-4">{faq.q}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
          style={{ background: isOpen ? '#C9A66B' : 'rgba(201,166,107,0.12)', color: isOpen ? '#0A2540' : '#C9A66B' }}
        >
          <Plus size={14} strokeWidth={2.5} />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-6 pb-4">
              <div className="w-full h-px mb-3" style={{ background: 'rgba(201,166,107,0.2)' }} />
              <p className="text-[#8A9BB0] text-sm leading-relaxed">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Resource Category Icon Resolver ───────────────────────────────
const getCategoryIcon = (type: string) => {
  switch (type) {
    case 'FileText': return <FileText size={24} />;
    case 'Video': return <Video size={24} />;
    case 'BookOpen': return <BookOpen size={24} />;
    case 'Stethoscope': return <Stethoscope size={24} />;
    default: return <FileText size={24} />;
  }
};

const BLOG_CAT_COLORS: Record<string, { bg: string; color: string }> = {
  Spine: { bg: 'rgba(0,169,157,0.1)', color: '#00A99D' },
  'Sports Medicine': { bg: 'rgba(10,37,64,0.1)', color: '#0A2540' },
  Orthopaedic: { bg: 'rgba(201,166,107,0.1)', color: '#C9A66B' },
  Lifestyle: { bg: 'rgba(201,166,107,0.1)', color: '#C9A66B' },
  'Patient Stories': { bg: 'rgba(0,169,157,0.1)', color: '#00A99D' },
};

const RESOURCE_TAG_COLORS: Record<string, { bg: string; color: string }> = {
  Orthopaedic: { bg: 'rgba(201,166,107,0.1)', color: '#C9A66B' },
  Spine: { bg: 'rgba(0,169,157,0.1)', color: '#00A99D' },
  Sports: { bg: 'rgba(10,37,64,0.1)', color: '#0A2540' },
  General: { bg: 'rgba(201,166,107,0.1)', color: '#C9A66B' },
};

// ─── Service Categories ────────────────────────────────────────────
const SERVICE_CATEGORIES = [
  { key: 'Ortho', label: 'Orthopaedic Surgery', doctor: 'Dr. Ashok S. Gavaskar', icon: 'Shield', color: '#C9A66B' },
  { key: 'Spine', label: 'Spine Surgery', doctor: 'Dr. Parthasarathy Srinivasan', icon: 'Dna', color: '#00A99D' },
  { key: 'Sports', label: 'Ligament & Sports', doctor: 'Dr. Prakash Ayyadurai', icon: 'Activity', color: '#0A2540' },
];

const GALLERY_CATS = ['All', 'Clinic', 'Operations', 'Team', 'Patient Moments', 'Awards'] as const;
type GalleryCat = typeof GALLERY_CATS[number];

export default function Home() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  // Gallery states
  const [activeCategory, setActiveCategory] = useState<GalleryCat>('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Filter gallery items
  const filteredGallery = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(g => g.category === activeCategory);
  const slides = filteredGallery.map(g => ({ src: g.src, alt: g.alt }));

  const openLightbox = (idx: number) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  // Appointment Form states
  const [form, setForm] = useState({ name: '', phone: '', email: '', doctor: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  };

  return (
    <PageTransition>
      {/* ══════════════════════════════════════
          1. HERO — 3 SWIPER BANNERS
      ══════════════════════════════════════ */}
      <HeroSwiper />

      {/* ══════════════════════════════════════
          2. ABOUT US & TIMELINE & VALUES
      ══════════════════════════════════════ */}
      <section id="about-section" className="py-24 px-6 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            {/* Image */}
            <AnimateIn direction="left">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-premium" style={{ border: '3px solid rgba(201,166,107,0.25)', aspectRatio: '4/5' }}>
                  <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80" alt="OrthoCare Elite" className="w-full h-full object-cover" />
                </div>
                <motion.div
                  className="absolute -bottom-6 -right-4 bg-white rounded-2xl p-5 shadow-card-hover"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  style={{ border: '1px solid rgba(201,166,107,0.2)' }}
                >
                  <div className="font-heading text-3xl font-bold text-[#0A2540] mb-0.5">98<span style={{ color: '#C9A66B' }}>%</span></div>
                  <div className="text-[#8A9BB0] text-xs leading-tight">Patient<br />Satisfaction</div>
                </motion.div>
                <motion.div
                  className="absolute -top-4 -left-4 rounded-2xl px-4 py-3 shadow-premium"
                  style={{ background: 'linear-gradient(135deg, #0A2540, #0e3560)' }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                >
                  <div className="text-[#C9A66B] font-bold text-sm flex items-center gap-1">
                    <Star size={12} fill="#C9A66B" className="text-[#C9A66B]" /> 4.9/5
                  </div>
                  <div className="text-white/50 text-[10px]">500+ Reviews</div>
                </motion.div>
              </div>
            </AnimateIn>

            {/* Text */}
            <AnimateIn direction="right" delay={0.1}>
              <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: '#00A99D' }}>About OrthoCare Elite</p>
              <div className="section-line mb-6" />
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#0A2540] mb-6 leading-tight">
                Where Compassionate Care Meets<br />
                <span className="gradient-text">Surgical Precision</span>
              </h2>
              <p className="text-[#8A9BB0] text-base leading-relaxed mb-5">{ABOUT.story}</p>
              <p className="text-[#8A9BB0] text-base leading-relaxed mb-8">{ABOUT.para2}</p>

              {/* 4 mini stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { val: '5000+', label: 'Surgeries Performed' },
                  { val: '15+', label: 'Years Experience' },
                  { val: '1500+', label: 'Spine Surgeries' },
                  { val: '98%', label: 'Success Rate' },
                ].map(s => (
                  <div key={s.label} className="bg-[#F4F6F8] rounded-xl p-4 text-center shadow-premium" style={{ border: '1px solid rgba(10,37,64,0.06)' }}>
                    <div className="font-heading text-2xl font-bold text-[#0A2540] mb-1">{s.val}</div>
                    <div className="text-[#8A9BB0] text-xs">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 flex-wrap">
                <button onClick={() => navigate('/about')} className="btn-gold px-6 py-3 rounded-xl text-sm font-semibold">Read Full About Us</button>
                <a href="#booking-form-section" className="btn-outline-gold px-6 py-3 rounded-xl text-sm text-center">Book Appointment</a>
              </div>
            </AnimateIn>
          </div>

          {/* Timeline - Journey */}
          <div className="mb-24 pt-12 border-t border-[#f0f3f7]">
            <AnimateIn className="text-center mb-14">
              <div className="flex justify-center mb-4"><div className="section-line" /></div>
              <h3 className="font-heading text-3xl font-bold text-[#0A2540] mb-3">Our Milestone Journey</h3>
              <p className="text-[#8A9BB0] max-w-lg mx-auto">15+ years of clinical and surgical milestones in Chennai's orthopaedic landscape.</p>
            </AnimateIn>
            <div className="relative max-w-5xl mx-auto">
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] hidden lg:block" style={{ background: 'linear-gradient(to bottom, #C9A66B, #00A99D)' }} />
              <div className="space-y-8">
                {TIMELINE.map((item, i) => (
                  <AnimateIn key={item.year} delay={i * 0.08} direction={i % 2 === 0 ? 'left' : 'right'}>
                    <div className={`flex items-center gap-8 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                      <div className="flex-1">
                        <div className="bg-white rounded-2xl p-6 shadow-premium" style={{ border: '1.5px solid rgba(10,37,64,0.06)' }}>
                          <div className="text-xs font-bold tracking-widest mb-2 uppercase" style={{ color: '#00A99D' }}>{item.year}</div>
                          <h4 className="font-heading text-lg font-bold text-[#0A2540] mb-1">{item.title}</h4>
                          <p className="text-[#8A9BB0] text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                      <div className="hidden lg:flex w-5 h-5 rounded-full border-4 border-white z-10 shrink-0" style={{ background: '#C9A66B', boxShadow: '0 0 12px rgba(201,166,107,0.5)' }} />
                      <div className="flex-1 hidden lg:block" />
                    </div>
                  </AnimateIn>
                ))}
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="pt-12 border-t border-[#f0f3f7]">
            <AnimateIn className="text-center mb-14">
              <div className="flex justify-center mb-4"><div className="section-line" /></div>
              <h3 className="font-heading text-3xl font-bold text-[#0A2540] mb-3">Our Core Values</h3>
              <p className="text-[#8A9BB0] max-w-lg mx-auto">The operational principles that guide our surgical patient care every day.</p>
            </AnimateIn>
            <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {ABOUT.values.map(v => (
                <FadeItem key={v.title}>
                  <motion.div
                    className="bg-[#F4F6F8] rounded-2xl p-7 group flex flex-col items-start"
                    whileHover={{ backgroundColor: '#0A2540', y: -6 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-3xl mb-4">{v.icon}</div>
                    <h4 className="font-heading text-lg font-bold text-[#0A2540] mb-2 group-hover:text-[#C9A66B] transition-colors">{v.title}</h4>
                    <p className="text-[#8A9BB0] text-sm leading-relaxed group-hover:text-white/75 transition-colors">{v.desc}</p>
                  </motion.div>
                </FadeItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          3. STATS DARK STRIP
      ══════════════════════════════════════ */}
      <section className="py-20 px-6 lg:px-10" style={{ background: '#0A2540' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <AnimateIn key={s.label} delay={i * 0.1} className="text-center">
              <div className="font-heading text-5xl font-bold mb-2 gradient-text">
                <Counter end={s.value} suffix={s.suffix} />
              </div>
              <div className="text-white/50 text-sm">{s.label}</div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          4. DOCTORS SECTION (Full Detailed Profiles)
      ══════════════════════════════════════ */}
      <section className="py-24 px-6 lg:px-10 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto">
          <AnimateIn className="text-center mb-14">
            <div className="flex justify-center mb-4"><div className="section-line" /></div>
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#00A99D' }}>Our Specialists</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#0A2540] mb-4">
              Meet Our <span className="gradient-text">Expert Surgeons</span>
            </h2>
            <p className="text-[#8A9BB0] max-w-xl mx-auto text-base">
              Fellowship-trained surgeons with international expertise from UK, Japan, and Switzerland — practising in Chennai.
            </p>
          </AnimateIn>

          {/* Full Doctor Cards (Match Doctors.tsx) */}
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {DOCTORS.map(doc => (
              <FadeItem key={doc.id}>
                <motion.div
                  className="relative bg-white rounded-3xl overflow-hidden shadow-premium group h-full flex flex-col"
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 250, damping: 18 }}
                  style={{ border: '1.5px solid rgba(10,37,64,0.06)' }}
                >
                  {/* Available badge */}
                  <div
                    className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold tracking-wide"
                    style={{ background: 'rgba(0,169,157,0.15)', color: '#00A99D', backdropFilter: 'blur(8px)' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00A99D] animate-pulse" />
                    Accepting Patients
                  </div>
                  {/* Exp badge */}
                  <div
                    className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-[10px] font-semibold"
                    style={{ background: 'rgba(201,166,107,0.15)', color: '#C9A66B', backdropFilter: 'blur(8px)' }}
                  >
                    {doc.experience}
                  </div>
                  {/* Photo */}
                  <div className="h-64 overflow-hidden shrink-0">
                    <motion.img
                      src={doc.image}
                      alt={doc.name}
                      className="w-full h-full object-cover object-top"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                  {/* Gold glow */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl pointer-events-none"
                    style={{ border: '2px solid transparent' }}
                    whileHover={{ borderColor: '#C9A66B', boxShadow: '0 0 32px rgba(201,166,107,0.2)' }}
                    transition={{ duration: 0.3 }}
                  />
                  {/* Info */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="inline-block self-start px-2.5 py-1 rounded-lg text-[10px] font-medium tracking-wide mb-3" style={{ background: 'rgba(0,169,157,0.08)', color: '#00A99D' }}>
                      {doc.subspecialty}
                    </div>
                    <h3 className="font-heading text-lg font-bold text-[#0A2540] mb-0.5">{doc.name}</h3>
                    <p className="text-[#C9A66B] text-xs font-semibold mb-1">{doc.credentials}</p>
                    <p className="text-[#8A9BB0] text-xs mb-4">{doc.designation}</p>
                    <p className="text-[#8A9BB0] text-xs leading-relaxed mb-4 pb-4 border-b border-[#f0f3f7] flex-1">{doc.bio}</p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <div className="flex items-center gap-1.5 mb-2">
                        <Award size={12} style={{ color: '#C9A66B' }} />
                        <span className="text-[10px] font-bold text-[#0A2540] tracking-wider uppercase">Key Highlights</span>
                      </div>
                      <ul className="space-y-1.5">
                        {doc.achievements.slice(0, 2).map((a, i) => (
                          <li key={i} className="flex items-start gap-1.5 text-[11px] text-[#8A9BB0] leading-tight">
                            <CheckCircle size={10} className="mt-0.5 shrink-0" style={{ color: '#00A99D' }} />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Note */}
                    <div className="flex items-start gap-1.5 text-[10px] text-[#8A9BB0] mb-5 pb-5 border-b border-[#f0f3f7] leading-snug">
                      <GraduationCap size={11} className="mt-0.5 shrink-0" style={{ color: '#C9A66B' }} />
                      <span>{doc.note}</span>
                    </div>

                    <a
                      href="#booking-form-section"
                      className="btn-gold w-full py-3 rounded-xl text-sm font-semibold text-center block"
                    >
                      Book Appointment
                    </a>
                  </div>
                </motion.div>
              </FadeItem>
            ))}
          </StaggerChildren>

          {/* Why Our Team Strip */}
          <div className="pt-12 border-t border-[#0A2540]/10">
            <AnimateIn className="text-center mb-12">
              <h3 className="font-heading text-2xl font-bold text-[#0A2540] mb-3">Why Choose OrthoCare Elite Physicians?</h3>
            </AnimateIn>
            <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: 'Award', title: 'International Fellowship', desc: 'Trained at leading centres in UK, Japan, Hong Kong & Switzerland' },
                { icon: 'Microscope', title: 'Minimally Invasive First', desc: 'Keyhole techniques as the primary approach for faster recovery' },
                { icon: 'Trophy', title: 'Ethical Practice', desc: 'No unnecessary procedures. Honest second opinions always welcome' },
                { icon: 'Globe', title: 'Patients from Across India', desc: 'Serving patients from Tamil Nadu, Karnataka, Andhra & beyond' },
              ].map(item => (
                <FadeItem key={item.title}>
                  <div className="bg-white rounded-2xl p-6 text-center shadow-premium flex flex-col items-center" style={{ border: '1.5px solid rgba(10,37,64,0.04)' }}>
                    <div className="mb-4 text-[#C9A66B] flex justify-center">
                      <LucideIcon name={item.icon} size={28} />
                    </div>
                    <h4 className="font-heading text-base font-bold text-[#0A2540] mb-2">{item.title}</h4>
                    <p className="text-[#8A9BB0] text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </FadeItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          5. SERVICES (Detailed Services)
      ══════════════════════════════════════ */}
      <section className="py-24 px-6 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimateIn className="text-center mb-14">
            <div className="flex justify-center mb-4"><div className="section-line" /></div>
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#00A99D' }}>What We Offer</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#0A2540] mb-4">
              Our Specialised <span className="gradient-text">Services</span>
            </h2>
            <p className="text-[#8A9BB0] max-w-xl mx-auto">
              12 specialised treatment programmes — each led by a dedicated fellowship-trained specialist.
            </p>
          </AnimateIn>

          {/* 3 category columns */}
          <div className="grid lg:grid-cols-3 gap-8">
            {SERVICE_CATEGORIES.map((cat, ci) => {
              const catServices = SERVICES.filter(s => s.category === cat.key);
              return (
                <AnimateIn key={cat.key} delay={ci * 0.1}>
                  <div className="h-full flex flex-col">
                    {/* Category header */}
                    <div className="rounded-2xl p-6 mb-4" style={{ background: '#0A2540', border: '1px solid rgba(201,166,107,0.15)' }}>
                      <div className="text-[#C9A66B] mb-3 flex items-center">
                        <LucideIcon name={cat.icon} size={24} />
                      </div>
                      <h3 className="font-heading text-xl font-bold text-white mb-1">{cat.label}</h3>
                      <p className="text-xs" style={{ color: '#C9A66B' }}>Lead: {cat.doctor}</p>
                    </div>
                    {/* Service cards with benefits */}
                    <div className="space-y-4 flex-1">
                      {catServices.map((service) => (
                        <motion.div
                          key={service.id}
                          className="bg-white rounded-xl p-5 shadow-premium group service-card"
                          style={{ border: '1.5px solid rgba(10,37,64,0.06)' }}
                          whileHover={{ y: -4, borderColor: 'rgba(0,169,157,0.3)' }}
                          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        >
                          <div className="flex items-start gap-3 mb-3">
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 service-icon-wrap transition-all duration-300 text-[#00A99D]" style={{ background: 'rgba(0,169,157,0.08)' }}>
                              <LucideIcon name={service.icon} size={20} />
                            </div>
                            <div>
                              <h4 className="font-heading text-sm font-bold text-[#0A2540] group-hover:text-[#00A99D] transition-colors leading-tight">{service.title}</h4>
                              <p className="text-[#8A9BB0] text-xs leading-relaxed mt-1">{service.description}</p>
                            </div>
                          </div>
                          {service.benefits && (
                            <ul className="pl-3 mt-3 pt-3 border-t border-[#f0f3f7] space-y-1">
                              {service.benefits.map((b, bi) => (
                                <li key={bi} className="flex items-start gap-1.5 text-[10px] text-[#8A9BB0] leading-snug">
                                  <span className="mt-1 shrink-0 w-1 h-1 rounded-full bg-[#00A99D]" />
                                  {b}
                                </li>
                              ))}
                            </ul>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </AnimateIn>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <button onClick={() => navigate('/services')} className="btn-outline-gold px-8 py-3 rounded-xl text-sm inline-flex items-center gap-2">
              View Interactive Services Page <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          6. PATIENT RESOURCES SECTION
      ══════════════════════════════════════ */}
      <section className="py-24 px-6 lg:px-10 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto">
          <AnimateIn className="text-center mb-14">
            <div className="flex justify-center mb-4"><div className="section-line" /></div>
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#00A99D' }}>Information Library</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#0A2540] mb-4">
              Patient <span className="gradient-text">Resources</span>
            </h2>
            <p className="text-[#8A9BB0] max-w-xl mx-auto text-base">
              Pre-operative guides, home physical exercises, and clinical reports to help you prepare and heal.
            </p>
          </AnimateIn>

          {/* Categories Grid */}
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {RESOURCE_CATEGORIES.map(cat => (
              <FadeItem key={cat.label}>
                <div
                  className="rounded-2xl p-6 text-center bg-white shadow-premium"
                  style={{ border: `1.5px solid ${cat.color}22` }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: cat.color + '20', color: cat.color }}>
                    {getCategoryIcon(cat.iconType)}
                  </div>
                  <h3 className="font-heading text-base font-bold text-[#0A2540] mb-2">{cat.label}</h3>
                  <p className="text-[#8A9BB0] text-xs leading-relaxed">{cat.desc}</p>
                </div>
              </FadeItem>
            ))}
          </StaggerChildren>

          {/* Featured resources cards */}
          <StaggerChildren className="grid md:grid-cols-3 gap-6 mb-10">
            {RESOURCES.slice(0, 3).map(r => (
              <FadeItem key={r.id}>
                <motion.div
                  className="bg-white rounded-2xl p-6 shadow-premium h-full flex flex-col justify-between"
                  style={{ border: '1.5px solid rgba(10,37,64,0.06)' }}
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 18 }}
                >
                  <div>
                    <div className="flex items-start gap-3 mb-4">
                      <div className="text-xl text-[#00A99D] mt-1">
                        <LucideIcon name={r.icon} size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-medium px-2 py-0.5 rounded" style={{ background: RESOURCE_TAG_COLORS[r.tag]?.bg, color: RESOURCE_TAG_COLORS[r.tag]?.color }}>{r.tag}</span>
                          <span className="text-[10px] text-[#8A9BB0]">{r.type}</span>
                        </div>
                        <h3 className="font-heading text-base font-bold text-[#0A2540] leading-tight">{r.title}</h3>
                      </div>
                    </div>
                    <p className="text-[#8A9BB0] text-sm leading-relaxed mb-5">{r.desc}</p>
                  </div>
                  <div className="flex items-center gap-3 mt-auto pt-4 border-t border-[#f0f3f7]">
                    <a href="#booking-form-section" className="flex items-center gap-1.5 text-[#00A99D] text-xs font-semibold hover:gap-2.5 transition-all">
                      <Download size={13} /> Request PDF Guide
                    </a>
                  </div>
                </motion.div>
              </FadeItem>
            ))}
          </StaggerChildren>

          <div className="text-center">
            <button onClick={() => navigate('/resources')} className="btn-outline-gold px-8 py-3 rounded-xl text-sm inline-flex items-center gap-2">
              Browse All Patient Resources <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          7. GALLERY SECTION (Filterable Grid & Lightbox)
      ══════════════════════════════════════ */}
      <section className="py-24 px-6 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimateIn className="text-center mb-14">
            <div className="flex justify-center mb-4"><div className="section-line" /></div>
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#00A99D' }}>Our Facility</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#0A2540] mb-4">
              Explore Our <span className="gradient-text">Gallery</span>
            </h2>
            <p className="text-[#8A9BB0] max-w-xl mx-auto text-base">
              A glimpse inside Chennai's premier orthopaedic centre — clinics, operation suites, and patient moments.
            </p>
          </AnimateIn>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {GALLERY_CATS.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
                style={{
                  background: activeCategory === cat ? '#0A2540' : '#F4F6F8',
                  color: activeCategory === cat ? '#C9A66B' : '#8A9BB0',
                  border: activeCategory === cat ? '1px solid rgba(201,166,107,0.3)' : '1px solid transparent',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="masonry-grid"
            >
              {filteredGallery.map((item, idx) => (
                <motion.div
                  key={item.id}
                  className="masonry-item group relative cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.04, duration: 0.4 }}
                  onClick={() => openLightbox(idx)}
                  whileHover={{ y: -4 }}
                >
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full object-cover"
                      style={{ minHeight: 180 }}
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center" style={{ background: 'rgba(10,37,64,0.7)' }}>
                      <ZoomIn size={28} color="#C9A66B" className="mb-2" />
                      <p className="text-white text-sm font-semibold text-center px-4">{item.alt}</p>
                      <span className="mt-1 text-[10px] tracking-widest uppercase text-white/50">{item.category}</span>
                    </div>
                    {/* Gold border on hover */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ border: '2px solid rgba(201,166,107,0.6)' }} />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Lightbox component */}
          <Lightbox
            open={lightboxOpen}
            close={() => setLightboxOpen(false)}
            slides={slides}
            index={lightboxIndex}
            styles={{
              container: { background: 'rgba(10,37,64,0.96)' },
            }}
          />

          <div className="text-center mt-12">
            <button onClick={() => navigate('/gallery')} className="btn-outline-gold px-8 py-3 rounded-xl text-sm inline-flex items-center gap-2">
              Open Fullscreen Gallery Page <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          8. TESTIMONIALS
      ══════════════════════════════════════ */}
      <section className="py-24 px-6 lg:px-10" style={{ background: '#0A2540' }}>
        <div className="max-w-7xl mx-auto">
          <AnimateIn className="text-center mb-14">
            <div className="flex justify-center mb-4"><div className="section-line" /></div>
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#00A99D' }}>Patient Stories</p>
            <h2 className="font-heading text-4xl font-bold text-white mb-4">
              What Our <span className="gradient-text">Patients Say</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto">Rated 4.9/5 by 500+ verified patients on Google and Practo.</p>
          </AnimateIn>

          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {TESTIMONIALS.map(t => (
              <FadeItem key={t.id}>
                <motion.div
                  className="rounded-2xl p-6 h-full flex flex-col justify-between"
                  style={{ background: 'rgba(255,255,255,0.05)', border: '1.5px solid rgba(255,255,255,0.08)' }}
                  whileHover={{ background: 'rgba(255,255,255,0.09)', borderColor: 'rgba(201,166,107,0.35)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div>
                    <div className="flex gap-0.5 mb-3">
                      {[...Array(5)].map((_, i) => <Star key={i} size={13} fill="#C9A66B" className="star-gold" />)}
                    </div>
                    <div className="font-heading text-3xl leading-none mb-2" style={{ color: '#C9A66B' }}>"</div>
                    <p className="text-white/75 text-sm leading-relaxed italic mb-5">{t.text}</p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs" style={{ background: 'linear-gradient(135deg, #C9A66B, #E8C98A)', color: '#0A2540' }}>{t.initials}</div>
                      <div>
                        <div className="text-white font-semibold text-xs">{t.name}</div>
                        <div className="text-white/40 text-[10px]">{t.role}</div>
                      </div>
                    </div>
                    <div className="text-[10px] font-medium px-2 py-1 rounded-full" style={{ background: 'rgba(0,169,157,0.15)', color: '#00A99D' }}>{t.badge}</div>
                  </div>
                </motion.div>
              </FadeItem>
            ))}
          </StaggerChildren>

          {/* Trust bar */}
          <AnimateIn className="text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full" style={{ background: 'rgba(201,166,107,0.1)', border: '1px solid rgba(201,166,107,0.25)' }}>
              <span className="text-[#C9A66B] font-bold flex items-center gap-1.5">
                <Star size={14} fill="#C9A66B" className="text-[#C9A66B]" /> 4.9/5 Rating
              </span>
              <span className="text-white/30">·</span>
              <span className="text-white/60 text-sm">500+ Patients — Google & Practo Verified</span>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* ══════════════════════════════════════
          9. FAQ (Complete FAQ list)
      ══════════════════════════════════════ */}
      <section className="py-24 px-6 lg:px-10 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto">
          <AnimateIn className="text-center mb-14">
            <div className="flex justify-center mb-4"><div className="section-line" /></div>
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: '#00A99D' }}>Got Questions?</p>
            <h2 className="font-heading text-4xl font-bold text-[#0A2540] mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-[#8A9BB0] max-w-lg mx-auto text-sm">
              Everything you need to know about insurances, recovery timelines, and consulting at OrthoCare Elite.
            </p>
          </AnimateIn>

          <div className="grid lg:grid-cols-2 gap-6 items-start max-w-6xl mx-auto">
            {/* Column 1: FAQs 1-4 */}
            <div className="space-y-4">
              {FAQS.slice(0, 4).map(faq => (
                <FAQItem
                  key={faq.id}
                  faq={faq}
                  isOpen={openFaq === faq.id}
                  toggle={() => setOpenFaq(prev => prev === faq.id ? null : faq.id)}
                />
              ))}
            </div>
            {/* Column 2: FAQs 5-8 */}
            <div className="space-y-4">
              {FAQS.slice(4, 8).map(faq => (
                <FAQItem
                  key={faq.id}
                  faq={faq}
                  isOpen={openFaq === faq.id}
                  toggle={() => setOpenFaq(prev => prev === faq.id ? null : faq.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          10. HEALTH BLOGS SECTION (Previews)
      ══════════════════════════════════════ */}
      <section className="py-24 px-6 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimateIn className="text-center mb-14">
            <div className="flex justify-center mb-4"><div className="section-line" /></div>
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#00A99D' }}>Health Guides</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#0A2540] mb-4">
              Health <span className="gradient-text">Insights & Blogs</span>
            </h2>
            <p className="text-[#8A9BB0] max-w-xl mx-auto text-base">
              Latest joint health advices, injury preventions, and surgical updates from our surgeons.
            </p>
          </AnimateIn>

          {/* 3 blog cards */}
          <StaggerChildren className="grid md:grid-cols-3 gap-6 mb-12">
            {BLOGS.slice(0, 3).map(blog => (
              <FadeItem key={blog.id}>
                <motion.div
                  className="bg-white rounded-2xl overflow-hidden shadow-premium group cursor-pointer h-full flex flex-col"
                  style={{ border: '1.5px solid rgba(10,37,64,0.06)' }}
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 18 }}
                  onClick={() => navigate('/blogs')}
                >
                  <div className="h-44 overflow-hidden shrink-0">
                    <img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span
                      className="inline-block self-start text-[10px] font-semibold px-2 py-0.5 rounded-full mb-2"
                      style={{ background: BLOG_CAT_COLORS[blog.category]?.bg || 'rgba(201,166,107,0.1)', color: BLOG_CAT_COLORS[blog.category]?.color || '#C9A66B' }}
                    >
                      {blog.category}
                    </span>
                    <h3 className="font-heading text-base font-bold text-[#0A2540] mb-2 leading-snug group-hover:text-[#00A99D] transition-colors flex-1">{blog.title}</h3>
                    <p className="text-[#8A9BB0] text-xs leading-relaxed mb-4 line-clamp-2">{blog.excerpt}</p>
                    <div className="flex items-center justify-between pt-3 border-t border-[#f0f3f7] mt-auto">
                      <div className="flex items-center gap-2 text-[10px] text-[#8A9BB0]">
                        <Clock size={10} /> {blog.readTime}
                      </div>
                      <span className="text-[#00A99D] text-[11px] font-semibold flex items-center gap-1">Read <ArrowRight size={11} /></span>
                    </div>
                  </div>
                </motion.div>
              </FadeItem>
            ))}
          </StaggerChildren>

          <div className="text-center">
            <button onClick={() => navigate('/blogs')} className="btn-outline-gold px-8 py-3 rounded-xl text-sm inline-flex items-center gap-2">
              View All Blog Articles <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          11. CONTACT & CLINICS & MAPS SECTION
      ══════════════════════════════════════ */}
      <section id="booking-form-section" className="py-24 px-6 lg:px-10 bg-[#F4F6F8] border-t border-[#e8edf2]">
        <div className="max-w-7xl mx-auto">
          <AnimateIn className="text-center mb-16">
            <div className="flex justify-center mb-4"><div className="section-line" /></div>
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#00A99D' }}>Get In Touch</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#0A2540] mb-4">
              Schedule Your <span className="gradient-text">Consultation</span>
            </h2>
            <p className="text-[#8A9BB0] max-w-xl mx-auto text-base">
              Book your appointment or get in touch with our Chennai clinics. We will confirm your timing within hours.
            </p>
          </AnimateIn>

          <div className="grid lg:grid-cols-2 gap-14 items-start mb-20">
            {/* Booking Form Card */}
            <AnimateIn direction="left">
              <div className="bg-white rounded-3xl p-8 shadow-premium" style={{ border: '1.5px solid rgba(10,37,64,0.06)' }}>
                <div className="section-line mb-5" />
                <h3 className="font-heading text-2xl font-bold text-[#0A2540] mb-2">Book an Appointment</h3>
                <p className="text-[#8A9BB0] text-sm mb-8">Enter your requirements below to schedule your consultation slot.</p>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-12"
                  >
                    <CheckCircle size={56} className="mx-auto mb-4" style={{ color: '#00A99D' }} />
                    <h4 className="font-heading text-2xl font-bold text-[#0A2540] mb-2">Request Received!</h4>
                    <p className="text-[#8A9BB0] mb-6">Our receptionist will contact you to confirm the time. For immediate queries, call:</p>
                    <a href="tel:+919444853737" className="btn-gold px-8 py-3 rounded-xl text-sm font-semibold inline-flex items-center gap-2">
                      <Phone size={14} /> +91 94448 53737
                    </a>
                  </motion.div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-[#0A2540] mb-1.5">Full Name *</label>
                        <input name="name" value={form.name} onChange={handleFormChange} required placeholder="Your full name" className="input-premium" />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#0A2540] mb-1.5">Phone Number *</label>
                        <input name="phone" value={form.phone} onChange={handleFormChange} required placeholder="+91 XXXXX XXXXX" className="input-premium" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#0A2540] mb-1.5">Email Address</label>
                      <input name="email" value={form.email} onChange={handleFormChange} type="email" placeholder="your@email.com" className="input-premium" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#0A2540] mb-1.5">Preferred Specialist</label>
                      <select name="doctor" value={form.doctor} onChange={handleFormChange} className="input-premium">
                        <option value="">Select a specialist (optional)</option>
                        {DOCTORS.map(d => <option key={d.id} value={d.name}>{d.name} — {d.subspecialty}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#0A2540] mb-1.5">Describe Your Pain/Condition</label>
                      <textarea name="message" value={form.message} onChange={handleFormChange} rows={4} placeholder="E.g., chronic knee pain, spine consult, sports ligament injury..." className="input-premium resize-none" />
                    </div>
                    <motion.button
                      type="submit"
                      disabled={loading}
                      className="btn-gold w-full py-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {loading ? (
                        <motion.div className="w-5 h-5 rounded-full border-2 border-[#0A2540] border-t-transparent" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }} />
                      ) : (
                        <><Send size={16} /> Submit Appointment Request</>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </AnimateIn>

            {/* Clinic details block */}
            <AnimateIn direction="right" delay={0.1}>
              <div className="space-y-6">
                {LOCATIONS.map((loc, idx) => (
                  <div
                    key={loc.id}
                    className="bg-white rounded-3xl p-6 shadow-premium"
                    style={{ border: '1.5px solid rgba(10,37,64,0.06)' }}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold" style={{ background: 'linear-gradient(135deg, #C9A66B, #E8C98A)', color: '#0A2540' }}>
                        {idx + 1}
                      </div>
                      <h4 className="font-heading text-base font-bold text-[#0A2540]">{loc.name}</h4>
                    </div>
                    <ul className="space-y-3 text-sm mb-5">
                      <li className="flex gap-3 items-start">
                        <MapPin size={15} className="shrink-0 mt-0.5" style={{ color: '#C9A66B' }} />
                        <span className="text-[#8A9BB0]">{loc.address}</span>
                      </li>
                      <li className="flex gap-3 items-center">
                        <Phone size={15} className="shrink-0" style={{ color: '#C9A66B' }} />
                        <a href={`tel:${loc.phone}`} className="text-[#8A9BB0] hover:text-[#C9A66B] transition-colors">{loc.phone}</a>
                      </li>
                      <li className="flex gap-3 items-center">
                        <Mail size={15} className="shrink-0" style={{ color: '#C9A66B' }} />
                        <a href={`mailto:${loc.email}`} className="text-[#8A9BB0] hover:text-[#C9A66B] transition-colors">{loc.email}</a>
                      </li>
                      <li className="flex gap-3 items-center">
                        <Clock size={15} className="shrink-0" style={{ color: '#C9A66B' }} />
                        <span className="text-[#8A9BB0]">{loc.hours}</span>
                      </li>
                    </ul>
                    <a href={loc.directions} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[#00A99D] text-xs font-bold hover:underline">
                      View Google Directions <ExternalLink size={12} />
                    </a>
                  </div>
                ))}

                <div className="rounded-2xl p-6" style={{ background: 'linear-gradient(135deg, #0A2540 0%, #0e3560 100%)', border: '1px solid rgba(201,166,107,0.2)' }}>
                  <div className="text-[#C9A66B] font-heading font-bold mb-2 flex items-center gap-1.5">
                    <Star size={14} fill="#C9A66B" className="text-[#C9A66B]" /> Ethical Treatment Guarantee</div>
                  <p className="text-white/60 text-xs leading-relaxed">
                    Our physicians practice only evidence-based medicine. We never recommend redundant surgery or tests. Star Health, HDFC Ergo & major insurances accepted.
                  </p>
                </div>
              </div>
            </AnimateIn>
          </div>

          {/* Maps Embeds */}
          <div className="pt-12 border-t border-[#0A2540]/10">
            <AnimateIn className="text-center mb-8">
              <h3 className="font-heading text-2xl font-bold text-[#0A2540] mb-2">Find Our Clinics</h3>
              <p className="text-[#8A9BB0] text-sm">Anna Nagar and Chromepet clinics are fully equipped with physiotherapy units.</p>
            </AnimateIn>
            <StaggerChildren className="grid lg:grid-cols-2 gap-6">
              {LOCATIONS.map(loc => (
                <FadeItem key={loc.id}>
                  <div className="rounded-3xl overflow-hidden shadow-premium" style={{ border: '2px solid rgba(201,166,107,0.15)' }}>
                    <div className="px-4 py-3 flex items-center gap-2" style={{ background: '#0A2540' }}>
                      <MapPin size={14} style={{ color: '#C9A66B' }} />
                      <span className="text-white text-xs font-semibold">{loc.name}</span>
                    </div>
                    <iframe
                      src={loc.mapUrl}
                      width="100%"
                      height="260"
                      style={{ border: 0, display: 'block' }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={loc.name}
                    />
                  </div>
                </FadeItem>
              ))}
            </StaggerChildren>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          12. FINAL QUICK CTA
      ══════════════════════════════════════ */}
      <section className="py-20 px-6 text-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A2540 0%, #0e3560 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #C9A66B 0%, transparent 65%)' }} />
        <AnimateIn className="relative">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Ready to Start Your <span className="gradient-text">Recovery?</span>
          </h2>
          <p className="text-white/50 mb-8 max-w-md mx-auto leading-relaxed">
            Book a consultation with Chennai's most trusted orthopaedic specialists today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#booking-form-section" className="btn-gold px-10 py-4 rounded-xl text-base font-semibold">Book Appointment Now</a>
            <a href="tel:+919444853737" className="btn-ghost px-10 py-4 rounded-xl text-base font-semibold">Call: +91 94448 53737</a>
          </div>
        </AnimateIn>
      </section>

    </PageTransition>
  );
}
