import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Star, Award, CheckCircle, GraduationCap } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import PageTransition from '../components/PageTransition';
import AnimateIn, { StaggerChildren, FadeItem } from '../components/AnimateIn';
import { STATS, ABOUT, DOCTORS } from '../constants/data';
import LucideIcon from '../components/LucideIcon';

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
      if (cur >= end) { setCount(end); clearInterval(t); }
      else setCount(Math.round(cur));
    }, duration / steps);
    return () => clearInterval(t);
  }, [inView, end]);
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function About() {
  const navigate = useNavigate();

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600&q=80" alt="Ortho3Trio" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,37,64,0.95) 0%, rgba(10,37,64,0.5) 60%, rgba(10,37,64,0.2) 100%)' }} />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pb-20 pt-40 w-full">
          <AnimateIn>
            <div className="section-line mb-6" />
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              About<br />
              <span className="gradient-text">Ortho3Trio</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl">Chennai's premier multi-specialty orthopaedic destination — 15+ years of surgical excellence.</p>
          </AnimateIn>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-[#F4F6F8] border-b border-[#e8edf2] px-6 lg:px-10 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-[#8A9BB0]">
          <span className="hover:text-[#00A99D] cursor-pointer" onClick={() => navigate('/')}>Home</span>
          <ChevronRight size={12} />
          <span className="text-[#0A2540] font-medium">About Us</span>
        </div>
      </div>

      {/* Asymmetric Intro */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          {/* Image col — 5 */}
          <AnimateIn direction="left" className="lg:col-span-5">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-premium" style={{ border: '3px solid rgba(201,166,107,0.25)', aspectRatio: '4/5' }}>
                <img src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&q=80" alt="Ortho3Trio Clinic" className="w-full h-full object-cover" />
              </div>
              <motion.div
                className="absolute -bottom-8 -right-6 bg-white rounded-2xl p-5 shadow-card-hover"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                style={{ border: '1px solid rgba(201,166,107,0.2)' }}
              >
                <div className="font-heading text-3xl font-bold text-[#0A2540] mb-0.5">98<span style={{ color: '#C9A66B' }}>%</span></div>
                <div className="text-[#8A9BB0] text-xs leading-tight">Patient Satisfaction<br />Rate 2024</div>
              </motion.div>
              <motion.div
                className="absolute -top-5 -left-5 w-20 h-20 rounded-2xl flex flex-col items-center justify-center shadow-premium"
                style={{ background: 'linear-gradient(135deg, #C9A66B, #E8C98A)' }}
                initial={{ opacity: 0, rotate: -15 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <div className="text-[#0A2540] font-bold text-xs text-center leading-tight">5000+<br />Surgeries</div>
              </motion.div>
            </div>
          </AnimateIn>

          {/* Text col — 7 */}
          <AnimateIn direction="right" delay={0.15} className="lg:col-span-7">
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: '#00A99D' }}>About Ortho3Trio</p>
            <div className="section-line mb-6" />
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#0A2540] mb-6 leading-tight">
              Where Compassionate Care Meets<br />
              <span className="gradient-text">Surgical Precision</span>
            </h2>
            <p className="text-[#8A9BB0] text-base leading-relaxed mb-5">{ABOUT.story}</p>
            <p className="text-[#8A9BB0] text-base leading-relaxed mb-8">{ABOUT.para2}</p>
            {/* Mini stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { val: '5000+', label: 'Surgeries Performed' },
                { val: '15+', label: 'Years Experience' },
                { val: '1500+', label: 'Spine Surgeries' },
                { val: '98%', label: 'Success Rate' },
              ].map(s => (
                <div key={s.label} className="text-center p-4 rounded-xl" style={{ background: 'rgba(0,169,157,0.06)', border: '1px solid rgba(0,169,157,0.15)' }}>
                  <div className="font-heading text-2xl font-bold text-[#0A2540]">{s.val}</div>
                  <div className="text-[#8A9BB0] text-[11px] mt-1 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              <button onClick={() => navigate('/contact')} className="btn-gold px-6 py-3 rounded-xl text-sm font-semibold">Book a Visit</button>
              <button onClick={() => navigate('/doctors')} className="btn-outline-gold px-6 py-3 rounded-xl text-sm">Meet Our Team</button>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Stats dark strip */}
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

      {/* What Makes Us Different */}
      <section className="py-24 px-6 lg:px-10 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto">
          <AnimateIn className="text-center mb-14">
            <div className="flex justify-center mb-4"><div className="section-line" /></div>
            <h2 className="font-heading text-4xl font-bold text-[#0A2540] mb-3">What Makes Us Different</h2>
            <p className="text-[#8A9BB0] max-w-lg mx-auto">A model of care designed entirely around the patient's exact needs.</p>
          </AnimateIn>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {ABOUT.whyChooseUs.map((item, i) => (
              <AnimateIn key={item.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-premium h-full" style={{ border: '1px solid rgba(10,37,64,0.06)' }}>
                  <div className="mb-4 text-[#C9A66B]">
                    <LucideIcon name={item.icon} size={28} />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[#0A2540] mb-2">{item.title}</h3>
                  <p className="text-[#8A9BB0] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Our Specialists / Doctor Bios */}
      <section className="py-24 px-6 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimateIn className="text-center mb-14">
            <div className="flex justify-center mb-4"><div className="section-line" /></div>
            <h2 className="font-heading text-4xl font-bold text-[#0A2540] mb-3">Our Three Specialists</h2>
            <p className="text-[#8A9BB0] max-w-lg mx-auto">True sub-specialisation. Meet the experts behind Ortho3Trio.</p>
          </AnimateIn>
          <div className="space-y-16">
            {DOCTORS.map((doc, i) => (
              <AnimateIn key={doc.id} delay={i * 0.1}>
                <div className="grid lg:grid-cols-3 gap-8 items-start bg-white rounded-3xl p-8 shadow-premium" style={{ border: '1px solid rgba(201,166,107,0.2)' }}>
                  {/* Photo */}
                  <div className="lg:col-span-1 rounded-2xl overflow-hidden shadow-premium h-80 relative" style={{ border: '1px solid rgba(10,37,64,0.06)' }}>
                    <img src={doc.image} alt={doc.name} className="w-full h-full object-cover object-top" />
                    <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-[10px] font-semibold bg-white/90 text-[#00A99D] shadow-sm backdrop-blur">
                      {doc.subspecialty}
                    </div>
                  </div>
                  {/* Bio & Info */}
                  <div className="lg:col-span-2 flex flex-col h-full">
                    <h3 className="font-heading text-3xl font-bold text-[#0A2540] mb-1">{doc.name}</h3>
                    <p className="text-[#C9A66B] text-sm font-semibold mb-2">{doc.credentials}</p>
                    <p className="text-[#8A9BB0] text-sm font-medium mb-4">{doc.designation}</p>
                    
                    <p className="text-[#8A9BB0] text-sm leading-relaxed mb-6">{doc.bio}</p>
                    
                    <div className="grid sm:grid-cols-2 gap-6 mt-auto">
                      <div>
                        <div className="flex items-center gap-1.5 mb-3 text-[#0A2540]">
                          <Star size={16} className="text-[#C9A66B]" />
                          <h4 className="font-heading text-sm font-bold uppercase tracking-wide">Key Focus Areas</h4>
                        </div>
                        <p className="text-xs text-[#8A9BB0] leading-relaxed">{doc.specialty}</p>
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5 mb-3 text-[#0A2540]">
                          <Award size={16} className="text-[#C9A66B]" />
                          <h4 className="font-heading text-sm font-bold uppercase tracking-wide">Achievements</h4>
                        </div>
                        <ul className="space-y-1.5">
                          {doc.achievements.map((achieve, idx) => (
                            <li key={idx} className="flex items-start gap-1.5 text-xs text-[#8A9BB0] leading-snug">
                              <CheckCircle size={12} className="mt-0.5 shrink-0 text-[#00A99D]" />
                              {achieve}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-8 pt-4 border-t border-[#f0f3f7] flex items-center gap-2 text-xs text-[#8A9BB0]">
                      <GraduationCap size={16} className="text-[#C9A66B]" /> {doc.note}
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Our Shared Philosophy */}
      <section className="py-24 px-6 lg:px-10 bg-[#0A2540]">
        <div className="max-w-4xl mx-auto text-center">
          <AnimateIn>
            <div className="flex justify-center mb-4"><div className="section-line" style={{ background: '#C9A66B' }} /></div>
            <h2 className="font-heading text-4xl font-bold text-white mb-6">Our Shared Philosophy</h2>
            <p className="text-white/80 text-xl leading-relaxed mb-6 font-medium">
              Ortho3Trio was founded on the belief that orthopaedic care should never feel like a conveyor belt.
            </p>
            <p className="text-white/60 text-lg leading-relaxed">
              Every patient — whether a weekend athlete, a working professional with back pain, or someone finally ready for a joint replacement — deserves a plan built around their life, explained in plain language, and delivered by the person best qualified to deliver it.
            </p>
          </AnimateIn>
        </div>
      </section>
    </PageTransition>
  );
}
