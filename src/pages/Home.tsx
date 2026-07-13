import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import AnimateIn, { StaggerChildren, FadeItem } from '../components/AnimateIn';
import HeroSwiper from '../components/HeroSwiper';
import { TESTIMONIALS } from '../constants/data';

export default function Home() {
  const navigate = useNavigate();

  return (
    <PageTransition>
      {/* 1. HERO — 3 SWIPER BANNERS */}
      <HeroSwiper />

      {/* 2. TRUST STRIP */}
      <section className="py-20 px-6 lg:px-10" style={{ background: '#0A2540' }}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <AnimateIn delay={0.1} className="text-center">
            <div className="font-heading text-4xl font-bold mb-2 gradient-text">35+</div>
            <div className="text-white/50 text-sm">Years Combined Experience</div>
          </AnimateIn>
          <AnimateIn delay={0.2} className="text-center">
            <div className="font-heading text-4xl font-bold mb-2 gradient-text">7000+</div>
            <div className="text-white/50 text-sm">Successful Surgeries</div>
          </AnimateIn>
          <AnimateIn delay={0.3} className="text-center">
            <div className="font-heading text-4xl font-bold mb-2 gradient-text">3</div>
            <div className="text-white/50 text-sm">Super-Specialists, 1 Clinic</div>
          </AnimateIn>
          <AnimateIn delay={0.4} className="text-center">
            <div className="font-heading text-4xl font-bold mb-2 gradient-text">1</div>
            <div className="text-white/50 text-sm">Rela Hospital Ecosystem</div>
          </AnimateIn>
        </div>
      </section>

      {/* 3. WHY ORTHO3TRIO */}
      <section className="py-24 px-6 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimateIn direction="left">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-premium" style={{ border: '3px solid rgba(201,166,107,0.25)', aspectRatio: '4/5' }}>
                  <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80" alt="Ortho3Trio" className="w-full h-full object-cover" />
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

            <AnimateIn direction="right" delay={0.1}>
              <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: '#00A99D' }}>Why Ortho3Trio</p>
              <div className="section-line mb-6" />
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#0A2540] mb-6 leading-tight">
                One Roof. Every Joint.<br />
                <span className="gradient-text">No Guesswork.</span>
              </h2>
              <p className="text-[#8A9BB0] text-base leading-relaxed mb-5">Most orthopaedic visits start with a guessing game—is this a spine problem, a ligament problem, or a joint problem?</p>
              <p className="text-[#8A9BB0] text-base leading-relaxed mb-8">Ortho3Trio removes that guesswork. By bringing together three leading sub-specialists under one roof, we ensure you get the exact expertise you need, right from day one.</p>

              <div className="flex gap-4 flex-wrap">
                <button onClick={() => navigate('/about')} className="btn-gold px-6 py-3 rounded-xl text-sm font-semibold">Read Our Story</button>
                <button onClick={() => navigate('/contact')} className="btn-outline-gold px-6 py-3 rounded-xl text-sm text-center">Book Appointment</button>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* 4. THREE-COLUMN INTRO */}
      <section className="py-24 px-6 lg:px-10 bg-[#F4F6F8]">
        <div className="max-w-7xl mx-auto">
          <AnimateIn className="text-center mb-14">
            <div className="flex justify-center mb-4"><div className="section-line" /></div>
            <h2 className="font-heading text-4xl font-bold text-[#0A2540] mb-4">
              Our <span className="gradient-text">Specialists</span>
            </h2>
            <p className="text-[#8A9BB0] max-w-xl mx-auto text-base">
              Each dedicated to their own sub-specialty for maximum precision.
            </p>
          </AnimateIn>

          <StaggerChildren className="grid lg:grid-cols-3 gap-8">
            {/* Dr. Prakash */}
            <FadeItem>
              <div className="bg-white p-8 rounded-3xl shadow-premium h-full flex flex-col" style={{ border: '1.5px solid rgba(10,37,64,0.06)' }}>
                <h3 className="font-heading text-2xl font-bold text-[#0A2540] mb-2">Dr. Prakash Ayyadurai</h3>
                <p className="text-[#00A99D] text-sm font-semibold mb-4">Sports Injury, Arthroscopy & Ligament Reconstruction</p>
                <p className="text-[#8A9BB0] text-sm leading-relaxed mb-6 flex-1">
                  A former state and university-level athlete turned surgeon, he understands exactly what it takes to get you back to the game — faster and stronger.
                </p>
                <div className="flex gap-3">
                  <button onClick={() => navigate('/about')} className="text-xs font-bold text-[#0A2540] hover:text-[#C9A66B] transition-colors underline">View Profile</button>
                  <button onClick={() => navigate('/services')} className="text-xs font-bold text-[#C9A66B] hover:text-[#0A2540] transition-colors underline">View Expertise</button>
                </div>
              </div>
            </FadeItem>
            
            {/* Dr. Parthasarathy */}
            <FadeItem>
              <div className="bg-white p-8 rounded-3xl shadow-premium h-full flex flex-col" style={{ border: '1.5px solid rgba(10,37,64,0.06)' }}>
                <h3 className="font-heading text-2xl font-bold text-[#0A2540] mb-2">Dr. Parthasarathy Srinivasan</h3>
                <p className="text-[#00A99D] text-sm font-semibold mb-4">Spine Surgeon</p>
                <p className="text-[#8A9BB0] text-sm leading-relaxed mb-6 flex-1">
                  With over 1,500 successful spine surgeries and an international fellowship background, he specialises in minimally invasive solutions to complex neck and back problems.
                </p>
                <div className="flex gap-3">
                  <button onClick={() => navigate('/about')} className="text-xs font-bold text-[#0A2540] hover:text-[#C9A66B] transition-colors underline">View Profile</button>
                  <button onClick={() => navigate('/services')} className="text-xs font-bold text-[#C9A66B] hover:text-[#0A2540] transition-colors underline">View Expertise</button>
                </div>
              </div>
            </FadeItem>

            {/* Dr. Ashok */}
            <FadeItem>
              <div className="bg-white p-8 rounded-3xl shadow-premium h-full flex flex-col" style={{ border: '1.5px solid rgba(10,37,64,0.06)' }}>
                <h3 className="font-heading text-2xl font-bold text-[#0A2540] mb-2">Dr. Ashok S. Gavaskar</h3>
                <p className="text-[#00A99D] text-sm font-semibold mb-4">Joint Replacement, Trauma & Complex Orthopaedics</p>
                <p className="text-[#8A9BB0] text-sm leading-relaxed mb-6 flex-1">
                  An internationally trained, award-winning surgeon bringing precision knee, hip, and shoulder replacement techniques directly to Chennai.
                </p>
                <div className="flex gap-3">
                  <button onClick={() => navigate('/about')} className="text-xs font-bold text-[#0A2540] hover:text-[#C9A66B] transition-colors underline">View Profile</button>
                  <button onClick={() => navigate('/services')} className="text-xs font-bold text-[#C9A66B] hover:text-[#0A2540] transition-colors underline">View Expertise</button>
                </div>
              </div>
            </FadeItem>
          </StaggerChildren>
        </div>
      </section>

      {/* 5. JOURNEY */}
      <section className="py-24 px-6 lg:px-10 bg-white">
        <div className="max-w-7xl mx-auto">
          <AnimateIn className="text-center mb-14">
            <div className="flex justify-center mb-4"><div className="section-line" /></div>
            <h3 className="font-heading text-3xl font-bold text-[#0A2540] mb-3">Your Journey With Us</h3>
            <p className="text-[#8A9BB0] max-w-lg mx-auto">From pain to performance in 5 structured steps.</p>
          </AnimateIn>
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] hidden lg:block" style={{ background: 'linear-gradient(to bottom, #C9A66B, #00A99D)' }} />
            <div className="space-y-8">
              {[
                { step: '1', title: 'Consult', desc: 'Detailed sub-specialist assessment.' },
                { step: '2', title: 'Diagnose', desc: 'Precision imaging and biomechanical analysis.' },
                { step: '3', title: 'Plan', desc: 'Customized conservative or surgical roadmap.' },
                { step: '4', title: 'Treat', desc: 'Evidence-based intervention.' },
                { step: '5', title: 'Recover', desc: 'Guided physiotherapy to full function.' }
              ].map((item, i) => (
                <AnimateIn key={item.step} delay={i * 0.08} direction={i % 2 === 0 ? 'left' : 'right'}>
                  <div className={`flex items-center gap-8 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    <div className="flex-1">
                      <div className="bg-white rounded-2xl p-6 shadow-premium" style={{ border: '1.5px solid rgba(10,37,64,0.06)' }}>
                        <div className="text-xs font-bold tracking-widest mb-2 uppercase" style={{ color: '#00A99D' }}>Step {item.step}</div>
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
      </section>

      {/* 6. TESTIMONIALS */}
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
            {TESTIMONIALS.slice(0, 3).map(t => (
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
        </div>
      </section>

      {/* 7. FINAL QUICK CTA */}
      <section className="py-20 px-6 text-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0A2540 0%, #0e3560 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #C9A66B 0%, transparent 65%)' }} />
        <AnimateIn className="relative">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Don't Wait <span className="gradient-text">Out the Pain.</span>
          </h2>
          <p className="text-white/50 mb-8 max-w-md mx-auto leading-relaxed">
            Whether it's a torn ligament, a worn-out knee, or a slipped disc—expert help is here. Talk to the Ortho3Trio team today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => navigate('/contact')} className="btn-gold px-10 py-4 rounded-xl text-base font-semibold">Book Appointment Now</button>
            <a href="tel:+919444853737" className="btn-ghost px-10 py-4 rounded-xl text-base font-semibold">Call: +91 94448 53737</a>
          </div>
        </AnimateIn>
      </section>

    </PageTransition>
  );
}
