import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Star } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import AnimateIn, { StaggerChildren, FadeItem } from '../components/AnimateIn';
import { TESTIMONIALS } from '../constants/data';
import LucideIcon from '../components/LucideIcon';

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={13} fill={i < count ? '#C9A66B' : 'none'} className={i < count ? 'star-gold' : 'text-gray-200'} />
      ))}
    </div>
  );
}

function TestiCard({ t }: { t: typeof TESTIMONIALS[0] }) {
  return (
    <div className="bg-white rounded-2xl p-6 w-[320px] shrink-0 shadow-premium" style={{ border: '1.5px solid rgba(10,37,64,0.06)' }}>
      <div className="font-heading text-5xl leading-none mb-3" style={{ color: '#C9A66B', lineHeight: 1 }}>"</div>
      <p className="text-[#0A2540] text-sm leading-relaxed mb-4 font-medium italic">{t.text}</p>
      <div className="flex items-center justify-between pt-3 border-t border-[#f0f3f7]">
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs" style={{ background: 'linear-gradient(135deg, #0A2540, #0e3560)', color: '#C9A66B' }}>{t.initials}</div>
          <div>
            <div className="text-[#0A2540] font-semibold text-xs">{t.name}</div>
            <div className="text-[#8A9BB0] text-[10px]">{t.role}</div>
          </div>
        </div>
        <div className="text-right">
          <StarRow count={t.rating} />
          <div className="text-[10px] text-[#8A9BB0] mt-0.5">{t.badge}</div>
        </div>
      </div>
    </div>
  );
}

const doubled = [...TESTIMONIALS, ...TESTIMONIALS];

export default function Testimonials() {
  const navigate = useNavigate();

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6 lg:px-10 overflow-hidden" style={{ background: 'linear-gradient(160deg, #0A2540 0%, #0e3560 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 80% 30%, #00A99D 0%, transparent 55%)' }} />
        <div className="max-w-7xl mx-auto relative">
          <AnimateIn>
            <div className="section-line mb-6" />
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Patient<br />
              <span className="teal-gradient-text">Stories</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl">Real outcomes, real lives transformed — from the patients of OrthoCare Elite, Chennai.</p>
          </AnimateIn>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-[#F4F6F8] border-b border-[#e8edf2] px-6 lg:px-10 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-[#8A9BB0]">
          <span className="hover:text-[#00A99D] cursor-pointer" onClick={() => navigate('/')}>Home</span>
          <ChevronRight size={12} />
          <span className="text-[#0A2540] font-medium">Testimonials</span>
        </div>
      </div>

      {/* Summary stats */}
      <section className="py-14 px-6 lg:px-10 max-w-7xl mx-auto">
        <AnimateIn className="flex flex-wrap justify-center gap-10">
          {[
            { val: '4.9', label: 'Average Rating', icon: 'Star' },
            { val: '500+', label: 'Verified Reviews', icon: 'Users' },
            { val: '98%', label: 'Would Recommend', icon: 'Heart' },
            { val: '15+', label: 'Years Trusted', icon: 'Trophy' },
          ].map(s => (
            <div key={s.label} className="text-center flex flex-col items-center">
              <div className="mb-2 text-[#C9A66B] flex justify-center">
                <LucideIcon name={s.icon} size={28} />
              </div>
              <div className="font-heading text-3xl font-bold text-[#0A2540] mb-0.5">{s.val}</div>
              <div className="text-[#8A9BB0] text-sm">{s.label}</div>
            </div>
          ))}
        </AnimateIn>
      </section>

      {/* Marquee Row 1 */}
      <section className="pb-4 overflow-hidden">
        <div className="marquee-wrap">
          <div className="marquee-track">
            {doubled.map((t, i) => (
              <div key={`r1-${i}`} className="mx-3"><TestiCard t={t} /></div>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee Row 2 — reversed */}
      <section className="pb-16 overflow-hidden">
        <div className="marquee-wrap">
          <div className="marquee-track-reverse">
            {[...doubled].reverse().map((t, i) => (
              <div key={`r2-${i}`} className="mx-3"><TestiCard t={t} /></div>
            ))}
          </div>
        </div>
      </section>

      {/* Static 3-col grid */}
      <section className="py-20 px-6 lg:px-10" style={{ background: '#F4F6F8' }}>
        <div className="max-w-7xl mx-auto">
          <AnimateIn className="text-center mb-14">
            <div className="flex justify-center mb-4"><div className="section-line" /></div>
            <h2 className="font-heading text-4xl font-bold text-[#0A2540] mb-3">Featured Stories</h2>
            <p className="text-[#8A9BB0] max-w-lg mx-auto">In-depth experiences from patients who chose OrthoCare Elite, Chennai.</p>
          </AnimateIn>
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TESTIMONIALS.map(t => (
              <FadeItem key={t.id}>
                <motion.div
                  className="bg-white rounded-2xl p-7 shadow-premium h-full flex flex-col"
                  style={{ border: '1.5px solid rgba(10,37,64,0.06)' }}
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 18 }}
                >
                  <StarRow count={t.rating} />
                  <div className="font-heading text-4xl leading-none my-3" style={{ color: '#C9A66B' }}>"</div>
                  <p className="text-[#0A2540] text-sm leading-relaxed font-medium italic flex-1">{t.text}</p>
                  <div className="mt-5 pt-5 border-t border-[#f0f3f7] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm" style={{ background: 'linear-gradient(135deg, #0A2540, #0e3560)', color: '#C9A66B' }}>{t.initials}</div>
                      <div>
                        <div className="text-[#0A2540] font-semibold text-sm">{t.name}</div>
                        <div className="text-[#8A9BB0] text-xs">{t.role} · {t.location}</div>
                      </div>
                    </div>
                    <div className="text-[10px] font-medium px-2 py-1 rounded-full" style={{ background: 'rgba(0,169,157,0.1)', color: '#00A99D' }}>{t.badge}</div>
                  </div>
                </motion.div>
              </FadeItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Trust bar */}
      <div className="py-5 px-6 text-center" style={{ background: '#0A2540', borderTop: '1px solid rgba(201,166,107,0.2)' }}>
        <p className="text-white/60 text-sm flex items-center justify-center gap-1"><Star size={14} className="text-[#C9A66B]" fill="#C9A66B" /> <strong className="text-[#C9A66B]">4.9/5 Rating</strong> from <strong className="text-white">500+ Patients</strong> — Google & Practo Verified</p>
      </div>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ background: '#F4F6F8' }}>
        <AnimateIn>
          <h2 className="font-heading text-3xl font-bold text-[#0A2540] mb-4">Join Our Satisfied Patients</h2>
          <p className="text-[#8A9BB0] mb-8 max-w-md mx-auto text-sm">Begin your journey to pain-free living with Chennai's most trusted orthopaedic team.</p>
          <button onClick={() => navigate('/contact')} className="btn-gold px-10 py-4 rounded-xl text-base font-semibold">Book Your Consultation</button>
        </AnimateIn>
      </section>
    </PageTransition>
  );
}
