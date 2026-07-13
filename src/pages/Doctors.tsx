import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, ChevronRight, GraduationCap, CheckCircle } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import AnimateIn, { StaggerChildren, FadeItem } from '../components/AnimateIn';
import { DOCTORS } from '../constants/data';
import LucideIcon from '../components/LucideIcon';

export default function Doctors() {
  const navigate = useNavigate();

  return (
    <PageTransition>
      {/* Hero */}
      <section
        className="relative pt-40 pb-20 px-6 lg:px-10 overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #0A2540 0%, #0e3560 100%)' }}
      >
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, #C9A66B 0%, transparent 60%)' }} />
        <div className="max-w-7xl mx-auto relative">
          <AnimateIn>
            <div className="section-line mb-6" />
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Meet Our<br />
              <span className="gradient-text">Specialists</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl leading-relaxed">
              Fellowship-trained surgeons with international expertise from UK, Japan, Hong Kong, and Switzerland — practising in Chennai.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-[#F4F6F8] border-b border-[#e8edf2] px-6 lg:px-10 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-[#8A9BB0]">
          <span className="hover:text-[#00A99D] cursor-pointer" onClick={() => navigate('/')}>Home</span>
          <ChevronRight size={12} />
          <span className="text-[#0A2540] font-medium">Our Doctors</span>
        </div>
      </div>

      {/* Intro */}
      <section className="py-14 px-6 lg:px-10 max-w-7xl mx-auto text-center">
        <AnimateIn>
          <p className="text-[#8A9BB0] text-base leading-relaxed max-w-2xl mx-auto">
            Every physician at Ortho3Trio is selected for their fellowship training, subspecialty depth, and genuine commitment to patient-first care. Together, they bring over 60 years of combined clinical experience across Chennai and the world's leading orthopaedic institutions.
          </p>
        </AnimateIn>
      </section>

      {/* Doctors Grid */}
      <section className="pb-28 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {DOCTORS.map(doc => (
              <FadeItem key={doc.id}>
                <motion.div
                  className="relative bg-white rounded-3xl overflow-hidden shadow-premium group"
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
                  <div className="h-64 overflow-hidden">
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
                  <div className="p-6">
                    <div className="inline-block px-2.5 py-1 rounded-lg text-[10px] font-medium tracking-wide mb-3" style={{ background: 'rgba(0,169,157,0.08)', color: '#00A99D' }}>
                      {doc.subspecialty}
                    </div>
                    <h3 className="font-heading text-lg font-bold text-[#0A2540] mb-0.5">{doc.name}</h3>
                    <p className="text-[#C9A66B] text-xs font-semibold mb-1">{doc.credentials}</p>
                    <p className="text-[#8A9BB0] text-xs mb-4">{doc.designation}</p>
                    <p className="text-[#8A9BB0] text-xs leading-relaxed mb-4 pb-4 border-b border-[#f0f3f7]">{doc.bio}</p>
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
                    <motion.button
                      onClick={() => navigate('/contact')}
                      className="btn-gold w-full py-3 rounded-xl text-sm font-semibold"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Book Appointment
                    </motion.button>
                  </div>
                </motion.div>
              </FadeItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Why our team */}
      <section className="py-20 px-6 lg:px-10" style={{ background: '#F4F6F8' }}>
        <div className="max-w-7xl mx-auto">
          <AnimateIn className="text-center mb-12">
            <div className="flex justify-center mb-4"><div className="section-line" /></div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#0A2540] mb-3">Why Ortho3Trio Physicians</h2>
          </AnimateIn>
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'Award', title: 'International Fellowship', desc: 'Trained at leading centres in UK, Japan, Hong Kong & Switzerland' },
              { icon: 'Microscope', title: 'Minimally Invasive First', desc: 'Keyhole techniques as the primary approach for faster recovery' },
              { icon: 'Trophy', title: 'Ethical Practice', desc: 'No unnecessary procedures. Honest second opinions always welcome' },
              { icon: 'Globe', title: 'Patients from Across India', desc: 'Serving patients from Tamil Nadu, Karnataka, Andhra & beyond' },
            ].map(item => (
              <FadeItem key={item.title}>
                <div className="bg-white rounded-2xl p-6 text-center shadow-premium flex flex-col items-center">
                  <div className="mb-4 text-[#C9A66B]">
                    <LucideIcon name={item.icon} size={28} />
                  </div>
                  <h4 className="font-heading text-base font-bold text-[#0A2540] mb-2">{item.title}</h4>
                  <p className="text-[#8A9BB0] text-xs leading-relaxed">{item.desc}</p>
                </div>
              </FadeItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ background: '#0A2540' }}>
        <AnimateIn>
          <h2 className="font-heading text-3xl font-bold text-white mb-4">Ready to Meet Your Specialist?</h2>
          <p className="text-white/50 mb-8 max-w-md mx-auto">Book a consultation and begin your personalised treatment journey today.</p>
          <button onClick={() => navigate('/contact')} className="btn-gold px-10 py-4 rounded-xl text-base font-semibold">Book a Consultation</button>
        </AnimateIn>
      </section>
    </PageTransition>
  );
}
