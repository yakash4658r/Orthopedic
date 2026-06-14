import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, MapPin, Phone, Mail, Clock, ExternalLink, Send, CheckCircle, Star } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import AnimateIn, { StaggerChildren, FadeItem } from '../components/AnimateIn';
import { LOCATIONS, DOCTORS } from '../constants/data';

export default function Contact() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: '', phone: '', email: '', doctor: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  };

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6 lg:px-10 overflow-hidden" style={{ background: 'linear-gradient(160deg, #0A2540 0%, #0e3560 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #C9A66B 0%, transparent 55%)' }} />
        <div className="max-w-7xl mx-auto relative">
          <AnimateIn>
            <div className="section-line mb-6" />
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Get In<br />
              <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl">Book an appointment or send us a message — we'll respond within a few hours.</p>
          </AnimateIn>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-[#F4F6F8] border-b border-[#e8edf2] px-6 lg:px-10 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-[#8A9BB0]">
          <span className="hover:text-[#00A99D] cursor-pointer" onClick={() => navigate('/')}>Home</span>
          <ChevronRight size={12} />
          <span className="text-[#0A2540] font-medium">Contact</span>
        </div>
      </div>

      {/* Form + Clinic Cards */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">

          {/* Contact Form */}
          <AnimateIn direction="left">
            <div className="bg-white rounded-3xl p-8 shadow-premium" style={{ border: '1.5px solid rgba(10,37,64,0.06)' }}>
              <div className="section-line mb-5" />
              <h2 className="font-heading text-3xl font-bold text-[#0A2540] mb-2">Book an Appointment</h2>
              <p className="text-[#8A9BB0] text-sm mb-8">Fill in your details and we'll confirm your appointment within hours.</p>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12"
                >
                  <CheckCircle size={56} className="mx-auto mb-4" style={{ color: '#00A99D' }} />
                  <h3 className="font-heading text-2xl font-bold text-[#0A2540] mb-2">Thank You!</h3>
                  <p className="text-[#8A9BB0] mb-6">We've received your message and will confirm your appointment shortly. You can also call us directly:</p>
                  <a href="tel:+919444853737" className="btn-gold px-8 py-3 rounded-xl text-sm font-semibold inline-flex items-center gap-2">
                    <Phone size={14} /> +91 94448 53737
                  </a>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#0A2540] mb-1.5">Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} required placeholder="Your full name" className="input-premium" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-[#0A2540] mb-1.5">Phone Number *</label>
                      <input name="phone" value={form.phone} onChange={handleChange} required placeholder="+91 XXXXX XXXXX" className="input-premium" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#0A2540] mb-1.5">Email Address</label>
                    <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="your@email.com" className="input-premium" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#0A2540] mb-1.5">Preferred Doctor</label>
                    <select name="doctor" value={form.doctor} onChange={handleChange} className="input-premium">
                      <option value="">Select a specialist (optional)</option>
                      {DOCTORS.map(d => <option key={d.id} value={d.name}>{d.name} — {d.subspecialty}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-[#0A2540] mb-1.5">Message / Your Condition</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Briefly describe your condition or question..." className="input-premium resize-none" />
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
                      <><Send size={16} /> Send Appointment Request</>
                    )}
                  </motion.button>
                  <p className="text-[#8A9BB0] text-[11px] text-center">
                    Or call us directly: <a href="tel:+919444853737" className="text-[#C9A66B] font-semibold hover:underline">+91 94448 53737</a>
                  </p>
                </form>
              )}
            </div>
          </AnimateIn>

          {/* Clinic Cards */}
          <AnimateIn direction="right" delay={0.1}>
            <div className="space-y-6">
              {LOCATIONS.map((loc, i) => (
                <motion.div
                  key={loc.id}
                  className="bg-white rounded-3xl p-7 shadow-premium"
                  style={{ border: '1.5px solid rgba(10,37,64,0.06)' }}
                  whileHover={{ y: -4, borderColor: 'rgba(201,166,107,0.3)' }}
                  transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold" style={{ background: 'linear-gradient(135deg, #C9A66B, #E8C98A)', color: '#0A2540' }}>
                      {i + 1}
                    </div>
                    <h3 className="font-heading text-base font-bold text-[#0A2540]">{loc.name}</h3>
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
                  <a
                    href={loc.directions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#00A99D] text-sm font-semibold hover:gap-3 transition-all"
                  >
                    Get Directions <ExternalLink size={14} />
                  </a>
                </motion.div>
              ))}

              {/* Quick info */}
              <div className="rounded-2xl p-6" style={{ background: 'linear-gradient(135deg, #0A2540 0%, #0e3560 100%)', border: '1px solid rgba(201,166,107,0.2)' }}>
                <div className="text-[#C9A66B] font-heading font-bold mb-2 flex items-center gap-1.5">
                  <Star size={14} fill="#C9A66B" /> 4.9/5 Rating
                </div>
                <p className="text-white/60 text-sm">Rated by 500+ patients on Google and Practo. Open Monday to Saturday, 9AM to 8PM at both locations.</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Maps */}
      <section className="px-6 lg:px-10 pb-24">
        <div className="max-w-7xl mx-auto">
          <AnimateIn className="text-center mb-10">
            <div className="flex justify-center mb-4"><div className="section-line" /></div>
            <h2 className="font-heading text-3xl font-bold text-[#0A2540] mb-3">Find Us</h2>
            <p className="text-[#8A9BB0]">Both our clinics are easily accessible in Chennai.</p>
          </AnimateIn>
          <StaggerChildren className="grid lg:grid-cols-2 gap-6">
            {LOCATIONS.map(loc => (
              <FadeItem key={loc.id}>
                <div className="rounded-3xl overflow-hidden shadow-premium" style={{ border: '2px solid rgba(201,166,107,0.15)' }}>
                  <div className="px-4 py-3 flex items-center gap-2" style={{ background: '#0A2540' }}>
                    <MapPin size={14} style={{ color: '#C9A66B' }} />
                    <span className="text-white text-sm font-medium">{loc.name}</span>
                  </div>
                  <iframe
                    src={loc.mapUrl}
                    width="100%"
                    height="280"
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
      </section>
    </PageTransition>
  );
}
