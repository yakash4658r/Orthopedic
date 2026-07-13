import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import AnimateIn from '../components/AnimateIn';
import { SERVICES } from '../constants/data';
import LucideIcon from '../components/LucideIcon';

type Tab = 'Ortho' | 'Spine' | 'Sports';

const TABS: { key: Tab; label: string; icon: string; doctor: string }[] = [
  { key: 'Sports', label: 'Sports Injury & Arthroscopy', icon: 'Activity', doctor: 'Dr. Prakash Ayyadurai' },
  { key: 'Spine', label: 'Spine Care & Surgery', icon: 'Dna', doctor: 'Dr. Parthasarathy Srinivasan' },
  { key: 'Ortho', label: 'Joint Replacement & Trauma', icon: 'Shield', doctor: 'Dr. Ashok S. Gavaskar' },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState<Tab>('Sports');
  const navigate = useNavigate();
  const filtered = SERVICES.filter(s => s.category === activeTab);
  const activeTabData = TABS.find(t => t.key === activeTab)!;

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6 lg:px-10 overflow-hidden" style={{ background: 'linear-gradient(160deg, #0A2540 0%, #0e3560 100%)' }}>
        <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'radial-gradient(circle at 30% 70%, #00A99D 0%, transparent 55%)' }} />
        <div className="max-w-7xl mx-auto relative">
          <AnimateIn>
            <div className="section-line mb-6" />
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Our<br />
              <span className="teal-gradient-text">Services</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl">12 specialised treatment programmes across orthopaedics, spine surgery, and sports medicine.</p>
          </AnimateIn>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-[#F4F6F8] border-b border-[#e8edf2] px-6 lg:px-10 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-[#8A9BB0]">
          <span className="hover:text-[#00A99D] cursor-pointer" onClick={() => navigate('/')}>Home</span>
          <ChevronRight size={12} />
          <span className="text-[#0A2540] font-medium">Services</span>
        </div>
      </div>

      {/* Tabs */}
      <section className="py-16 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <AnimateIn className="flex justify-center mb-4">
            <div className="flex p-1.5 rounded-2xl gap-1" style={{ background: '#F4F6F8', border: '1px solid rgba(10,37,64,0.08)' }}>
              {TABS.map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className="relative px-5 py-3 rounded-xl text-sm font-medium transition-colors duration-200 flex items-center gap-2"
                  style={{ color: activeTab === tab.key ? 'white' : '#8A9BB0', zIndex: 1 }}
                >
                  {activeTab === tab.key && (
                    <motion.div
                      layoutId="tab-bg"
                      className="absolute inset-0 rounded-xl"
                      style={{ background: '#0A2540' }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center">
                    <LucideIcon name={tab.icon} size={15} />
                  </span>
                  <span className="relative z-10 hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>
          </AnimateIn>

          {/* Active tab label + doctor */}
          <AnimateIn className="text-center mb-10">
            <div className="flex flex-col items-center gap-1">
              <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#C9A66B' }}>{activeTabData.label}</span>
              <span className="text-xs text-[#8A9BB0]">Lead Specialist: <span className="font-semibold text-[#0A2540]">{activeTabData.doctor}</span></span>
            </div>
          </AnimateIn>

          {/* Services Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {filtered.map((service, i) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.5 } }}
                  className="bg-white rounded-2xl p-6 shadow-premium cursor-pointer group service-card flex flex-col items-start"
                  style={{ border: '1.5px solid rgba(10,37,64,0.06)' }}
                  whileHover={{ y: -8, boxShadow: '0 4px 8px rgba(0,169,157,0.06), 0 16px 40px rgba(0,169,157,0.14)', borderColor: 'rgba(0,169,157,0.3)' }}
                  transition={{ type: 'spring', stiffness: 280, damping: 20 }}
                >
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 service-icon-wrap text-[#00A99D]" style={{ background: 'rgba(0,169,157,0.08)' }}>
                    <LucideIcon name={service.icon} size={28} />
                  </div>
                  <div className="inline-block text-[10px] font-medium tracking-widest uppercase px-2.5 py-1 rounded-lg mb-3" style={{ background: 'rgba(201,166,107,0.1)', color: '#C9A66B' }}>
                    {service.category === 'Ortho' ? 'Orthopaedic' : service.category === 'Spine' ? 'Spine' : 'Sports'}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-[#0A2540] mb-3 group-hover:text-[#00A99D] transition-colors">{service.title}</h3>
                  <p className="text-[#8A9BB0] text-sm leading-relaxed mb-4">{service.description}</p>
                  {service.benefits && (
                    <ul className="mb-5 space-y-1.5">
                      {service.benefits.map((b, bi) => (
                        <li key={bi} className="flex items-start gap-1.5 text-[11px] text-[#8A9BB0] leading-snug">
                          <span className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-[#00A99D]" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                  <button onClick={() => navigate('/contact')} className="text-[#00A99D] text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all mt-auto">
                    Book Consultation <ChevronRight size={13} />
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Cross-Specialty Cases */}
      <section className="py-24 px-6 lg:px-10" style={{ background: '#0A2540' }}>
        <div className="max-w-4xl mx-auto text-center">
          <AnimateIn>
            <h2 className="font-heading text-4xl font-bold text-white mb-6">
              When Injuries Overlap, <span style={{ color: '#C9A66B' }}>So Do Our Surgeons.</span>
            </h2>
            <p className="text-white/80 text-lg leading-relaxed mb-10">
              Complex trauma or multi-joint arthritis doesn't always fit into one box. Because our three specialists operate out of the same facility, complex cases are reviewed jointly. You get a team approach without having to travel between different clinics.
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="text-3xl mb-3">🤝</div>
                <h4 className="font-heading font-bold text-white mb-2">Joint Review</h4>
                <p className="text-white/60 text-sm">Complex cases are evaluated by multiple experts.</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="text-3xl mb-3">🏥</div>
                <h4 className="font-heading font-bold text-white mb-2">One Facility</h4>
                <p className="text-white/60 text-sm">No need to travel between different hospitals.</p>
              </div>
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                <div className="text-3xl mb-3">⚡</div>
                <h4 className="font-heading font-bold text-white mb-2">Unified Plan</h4>
                <p className="text-white/60 text-sm">A single, cohesive treatment plan for faster recovery.</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-[#F4F6F8]">
        <AnimateIn>
          <h2 className="font-heading text-3xl font-bold text-[#0A2540] mb-4">Not Sure Which Service You Need?</h2>
          <p className="text-[#8A9BB0] mb-8 max-w-md mx-auto text-sm leading-relaxed">
            Book a comprehensive consultation and our specialists will guide you to the right treatment pathway — honestly, with no pressure.
          </p>
          <button onClick={() => navigate('/contact')} className="btn-gold px-10 py-4 rounded-xl text-sm font-semibold">Book Free Consultation</button>
        </AnimateIn>
      </section>
    </PageTransition>
  );
}
