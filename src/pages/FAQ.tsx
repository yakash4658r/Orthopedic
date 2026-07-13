import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Plus, X, Phone } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import AnimateIn from '../components/AnimateIn';
import { FAQS } from '../constants/data';

function FAQItem({ faq, isOpen, toggle }: { faq: typeof FAQS[0]; isOpen: boolean; toggle: () => void }) {
  return (
    <div
      className={`rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'faq-active' : ''}`}
      style={{ border: isOpen ? '1.5px solid rgba(201,166,107,0.3)' : '1.5px solid rgba(10,37,64,0.08)', background: isOpen ? 'rgba(201,166,107,0.02)' : 'white' }}
    >
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left"
      >
        <span className="font-heading text-base font-bold text-[#0A2540] leading-snug pr-4">{faq.q}</span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
          style={{ background: isOpen ? '#C9A66B' : 'rgba(201,166,107,0.12)', color: isOpen ? '#0A2540' : '#C9A66B' }}
        >
          <Plus size={16} strokeWidth={2.5} />
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
            <div className="px-6 pb-5">
              <div className="w-full h-px mb-4" style={{ background: 'rgba(201,166,107,0.2)' }} />
              <p className="text-[#8A9BB0] text-sm leading-relaxed">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const navigate = useNavigate();
  const [openId, setOpenId] = useState<number | null>(1);
  const toggle = (id: number) => setOpenId(prev => prev === id ? null : id);

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6 lg:px-10 overflow-hidden" style={{ background: 'linear-gradient(160deg, #0A2540 0%, #0e3560 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 20% 60%, #C9A66B 0%, transparent 55%)' }} />
        <div className="max-w-7xl mx-auto relative">
          <AnimateIn>
            <div className="section-line mb-6" />
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Frequently<br />
              <span className="gradient-text">Asked Questions</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl">Everything you need to know before your visit to Ortho3Trio, Chennai.</p>
          </AnimateIn>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-[#F4F6F8] border-b border-[#e8edf2] px-6 lg:px-10 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-[#8A9BB0]">
          <span className="hover:text-[#00A99D] cursor-pointer" onClick={() => navigate('/')}>Home</span>
          <ChevronRight size={12} />
          <span className="text-[#0A2540] font-medium">FAQ</span>
        </div>
      </div>

      {/* 2-col layout */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-start">

          {/* Left — heading + image + quick contact */}
          <AnimateIn direction="left" className="lg:col-span-4 lg:sticky lg:top-32">
            <div className="section-line mb-6" />
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: '#00A99D' }}>Got Questions?</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0A2540] mb-4 leading-tight">
              We Have All the<br />
              <span className="gradient-text">Answers</span>
            </h2>
            <p className="text-[#8A9BB0] text-sm leading-relaxed mb-6">
              Can't find what you're looking for? Call us directly — our team is happy to answer any questions about your treatment, insurance, or appointment.
            </p>
            <div className="rounded-2xl overflow-hidden shadow-premium mb-6" style={{ border: '2px solid rgba(201,166,107,0.2)' }}>
              <img
                src="https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80"
                alt="Ortho3Trio FAQ"
                className="w-full object-cover"
                style={{ maxHeight: 240 }}
              />
            </div>
            <a
              href="tel:+919444853737"
              className="btn-gold w-full py-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2"
            >
              <Phone size={14} /> Call +91 94448 53737
            </a>
            <button
              onClick={() => navigate('/contact')}
              className="btn-outline-gold w-full py-4 rounded-xl text-sm mt-3"
            >
              Book Appointment Online
            </button>
          </AnimateIn>

          {/* Right — accordion */}
          <AnimateIn direction="right" delay={0.1} className="lg:col-span-8">
            <div className="space-y-3">
              {FAQS.map(faq => (
                <FAQItem
                  key={faq.id}
                  faq={faq}
                  isOpen={openId === faq.id}
                  toggle={() => toggle(faq.id)}
                />
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ background: '#0A2540' }}>
        <AnimateIn>
          <h2 className="font-heading text-3xl font-bold text-white mb-4">Still Have Questions?</h2>
          <p className="text-white/50 mb-8 max-w-md mx-auto text-sm">Our team is available Monday to Saturday, 9AM–8PM at both our Chennai clinics.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => navigate('/contact')} className="btn-gold px-8 py-3.5 rounded-xl text-sm font-semibold">Send Us a Message</button>
            <a href="tel:+919444853737" className="btn-ghost px-8 py-3.5 rounded-xl text-sm font-semibold">Call Now</a>
          </div>
        </AnimateIn>
      </section>
    </PageTransition>
  );
}
