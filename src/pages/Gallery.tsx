import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { ChevronRight, X, ZoomIn } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import AnimateIn from '../components/AnimateIn';
import { GALLERY_ITEMS } from '../constants/data';

const CATS = ['All', 'Clinic', 'Operations', 'Team', 'Patient Moments', 'Awards'] as const;
type Cat = typeof CATS[number];

export default function Gallery() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState<Cat>('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filtered = activeCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(g => g.category === activeCategory);

  const slides = filtered.map(g => ({ src: g.src, alt: g.alt }));

  const openLightbox = (idx: number) => {
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6 lg:px-10 overflow-hidden" style={{ background: 'linear-gradient(160deg, #0A2540 0%, #0e3560 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 60% 40%, #00A99D 0%, transparent 55%)' }} />
        <div className="max-w-7xl mx-auto relative">
          <AnimateIn>
            <div className="section-line mb-6" />
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Our<br />
              <span className="gradient-text">Gallery</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl">A glimpse inside Chennai's premier orthopaedic centre — our clinic, our team, our patients.</p>
          </AnimateIn>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-[#F4F6F8] border-b border-[#e8edf2] px-6 lg:px-10 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-[#8A9BB0]">
          <span className="hover:text-[#00A99D] cursor-pointer" onClick={() => navigate('/')}>Home</span>
          <ChevronRight size={12} />
          <span className="text-[#0A2540] font-medium">Gallery</span>
        </div>
      </div>

      {/* Filter Tabs */}
      <section className="py-12 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <AnimateIn className="flex flex-wrap justify-center gap-2 mb-12">
            {CATS.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
                style={{
                  background: activeCategory === cat ? '#0A2540' : '#F4F6F8',
                  color: activeCategory === cat ? '#C9A66B' : '#8A9BB0',
                  border: activeCategory === cat ? '1px solid rgba(201,166,107,0.3)' : '1px solid transparent',
                }}
              >
                {cat}
              </button>
            ))}
          </AnimateIn>

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
              {filtered.map((item, idx) => (
                <motion.div
                  key={item.id}
                  className="masonry-item group relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.04, duration: 0.4 }}
                  onClick={() => openLightbox(idx)}
                  whileHover={{ y: -4 }}
                >
                  <div className="relative overflow-hidden rounded-xl">
                    <motion.img
                      src={item.src}
                      alt={item.alt}
                      className="w-full object-cover"
                      style={{ minHeight: 180 }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.5 }}
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
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={lightboxIndex}
        styles={{
          container: { background: 'rgba(10,37,64,0.96)' },
        }}
      />

      {/* CTA */}
      <section className="py-20 px-6 text-center" style={{ background: '#0A2540' }}>
        <AnimateIn>
          <h2 className="font-heading text-3xl font-bold text-white mb-4">Visit Us in Chennai</h2>
          <p className="text-white/50 mb-8 max-w-md mx-auto text-sm">Experience world-class orthopaedic care at Anna Nagar or Chromepet. We'd love to show you around.</p>
          <button onClick={() => navigate('/contact')} className="btn-gold px-10 py-4 rounded-xl text-base font-semibold">Book a Visit</button>
        </AnimateIn>
      </section>
    </PageTransition>
  );
}
