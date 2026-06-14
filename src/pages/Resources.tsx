import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Download, ExternalLink, FileText, Video, BookOpen, Stethoscope } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import AnimateIn, { StaggerChildren, FadeItem } from '../components/AnimateIn';
import { RESOURCES, RESOURCE_CATEGORIES } from '../constants/data';
import LucideIcon from '../components/LucideIcon';

const getCategoryIcon = (type: string) => {
  switch (type) {
    case 'FileText': return <FileText size={24} />;
    case 'Video': return <Video size={24} />;
    case 'BookOpen': return <BookOpen size={24} />;
    case 'Stethoscope': return <Stethoscope size={24} />;
    default: return <FileText size={24} />;
  }
};

const TAG_COLORS: Record<string, { bg: string; color: string }> = {
  Orthopaedic: { bg: 'rgba(201,166,107,0.1)', color: '#C9A66B' },
  Spine: { bg: 'rgba(0,169,157,0.1)', color: '#00A99D' },
  Sports: { bg: 'rgba(10,37,64,0.1)', color: '#0A2540' },
  General: { bg: 'rgba(201,166,107,0.1)', color: '#C9A66B' },
};

export default function Resources() {
  const navigate = useNavigate();

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6 lg:px-10 overflow-hidden" style={{ background: 'linear-gradient(160deg, #0A2540 0%, #0e3560 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 70% 40%, #C9A66B 0%, transparent 55%)' }} />
        <div className="max-w-7xl mx-auto relative">
          <AnimateIn>
            <div className="section-line mb-6" />
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Patient<br />
              <span className="gradient-text">Resources</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl">
              Guides, articles, and tools to help you prepare for treatment and understand your recovery journey.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-[#F4F6F8] border-b border-[#e8edf2] px-6 lg:px-10 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-[#8A9BB0]">
          <span className="hover:text-[#00A99D] cursor-pointer" onClick={() => navigate('/')}>Home</span>
          <ChevronRight size={12} />
          <span className="text-[#0A2540] font-medium">Resources</span>
        </div>
      </div>

      {/* Categories */}
      <section className="py-16 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <AnimateIn className="text-center mb-12">
            <div className="flex justify-center mb-4"><div className="section-line" /></div>
            <h2 className="font-heading text-3xl font-bold text-[#0A2540] mb-3">Resource Library</h2>
            <p className="text-[#8A9BB0] max-w-lg mx-auto">Everything you need to be informed, prepared, and confident about your orthopaedic care.</p>
          </AnimateIn>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {RESOURCE_CATEGORIES.map(cat => (
              <FadeItem key={cat.label}>
                <motion.div
                  className="rounded-2xl p-6 text-center cursor-pointer"
                  style={{ background: cat.bg, border: `1.5px solid ${cat.color}22` }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4" style={{ background: cat.color + '20', color: cat.color }}>
                    {getCategoryIcon(cat.iconType)}
                  </div>
                  <h3 className="font-heading text-base font-bold text-[#0A2540] mb-2">{cat.label}</h3>
                  <p className="text-[#8A9BB0] text-xs leading-relaxed">{cat.desc}</p>
                </motion.div>
              </FadeItem>
            ))}
          </StaggerChildren>

          {/* Resource Cards */}
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESOURCES.map(r => (
              <FadeItem key={r.id}>
                <motion.div
                  className="bg-white rounded-2xl p-6 shadow-premium h-full flex flex-col"
                  style={{ border: '1.5px solid rgba(10,37,64,0.06)' }}
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 18 }}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="text-xl text-[#00A99D] mt-1">
                      <LucideIcon name={r.icon} size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-medium px-2 py-0.5 rounded" style={{ background: TAG_COLORS[r.tag]?.bg, color: TAG_COLORS[r.tag]?.color }}>{r.tag}</span>
                        <span className="text-[10px] text-[#8A9BB0]">{r.type}</span>
                      </div>
                      <h3 className="font-heading text-base font-bold text-[#0A2540] leading-tight">{r.title}</h3>
                    </div>
                  </div>
                  <p className="text-[#8A9BB0] text-sm leading-relaxed flex-1 mb-5">{r.desc}</p>
                  <div className="flex items-center gap-3">
                    <button className="flex items-center gap-1.5 text-[#00A99D] text-xs font-semibold hover:gap-2.5 transition-all">
                      <Download size={13} /> Download
                    </button>
                    <button onClick={() => navigate('/contact')} className="ml-auto btn-gold px-4 py-2 rounded-lg text-xs font-semibold">
                      Ask a Doctor
                    </button>
                  </div>
                </motion.div>
              </FadeItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ background: '#0A2540' }}>
        <AnimateIn>
          <h2 className="font-heading text-3xl font-bold text-white mb-4">Have a Specific Question?</h2>
          <p className="text-white/50 mb-8 max-w-md mx-auto text-sm">Our specialists are available to answer your medical questions directly — no obligation.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={() => navigate('/contact')} className="btn-gold px-8 py-3.5 rounded-xl text-sm font-semibold">Book a Consultation</button>
            <a href="tel:+919444853737" className="btn-ghost px-8 py-3.5 rounded-xl text-sm font-semibold">Call Now</a>
          </div>
        </AnimateIn>
      </section>
    </PageTransition>
  );
}
