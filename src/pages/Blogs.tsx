import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Clock, User, ArrowRight, Search } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import AnimateIn, { StaggerChildren, FadeItem } from '../components/AnimateIn';
import { BLOGS, BLOG_CATEGORIES } from '../constants/data';


const CAT_COLORS: Record<string, { bg: string; color: string }> = {
  Spine: { bg: 'rgba(0,169,157,0.1)', color: '#00A99D' },
  'Sports Medicine': { bg: 'rgba(10,37,64,0.1)', color: '#0A2540' },
  Orthopaedic: { bg: 'rgba(201,166,107,0.1)', color: '#C9A66B' },
  Lifestyle: { bg: 'rgba(201,166,107,0.1)', color: '#C9A66B' },
  'Patient Stories': { bg: 'rgba(0,169,157,0.1)', color: '#00A99D' },
};

export default function Blogs() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filtered = BLOGS
    .filter(b => activeCategory === 'All' || b.category === activeCategory)
    .filter(b => !search || b.title.toLowerCase().includes(search.toLowerCase()) || b.excerpt.toLowerCase().includes(search.toLowerCase()));

  const featured = BLOGS.filter(b => b.featured);

  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6 lg:px-10 overflow-hidden" style={{ background: 'linear-gradient(160deg, #0A2540 0%, #0e3560 100%)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 30% 70%, #00A99D 0%, transparent 55%)' }} />
        <div className="max-w-7xl mx-auto relative">
          <AnimateIn>
            <div className="section-line mb-6" />
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Health<br />
              <span className="teal-gradient-text">Blogs</span>
            </h1>
            <p className="text-white/60 text-lg max-w-xl mb-8">Expert insights, patient stories, and orthopaedic health advice — written by our specialist team.</p>
            {/* Search */}
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-2xl px-4 py-3 max-w-md border border-white/15">
              <Search size={18} className="text-white/40 shrink-0" />
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Search articles..."
                className="flex-1 bg-transparent text-white text-sm outline-none placeholder-white/30"
              />
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-[#F4F6F8] border-b border-[#e8edf2] px-6 lg:px-10 py-3">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-[#8A9BB0]">
          <span className="hover:text-[#00A99D] cursor-pointer" onClick={() => navigate('/')}>Home</span>
          <ChevronRight size={12} />
          <span className="text-[#0A2540] font-medium">Blogs</span>
        </div>
      </div>

      {/* Featured articles */}
      <section className="py-16 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <AnimateIn className="mb-10">
            <div className="section-line mb-4" />
            <h2 className="font-heading text-2xl font-bold text-[#0A2540]">Featured Articles</h2>
          </AnimateIn>
          <div className="grid lg:grid-cols-2 gap-6 mb-16">
            {featured.map(blog => (
              <AnimateIn key={blog.id}>
                <motion.div
                  className="bg-white rounded-3xl overflow-hidden shadow-premium group cursor-pointer"
                  style={{ border: '1.5px solid rgba(10,37,64,0.06)' }}
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 18 }}
                >
                  <div className="h-52 overflow-hidden">
                    <motion.img src={blog.image} alt={blog.title} className="w-full h-full object-cover" whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ background: CAT_COLORS[blog.category]?.bg, color: CAT_COLORS[blog.category]?.color }}>{blog.category}</span>
                      <span className="text-[10px] text-[#8A9BB0]">Featured</span>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-[#0A2540] mb-2 leading-snug group-hover:text-[#00A99D] transition-colors">{blog.title}</h3>
                    <p className="text-[#8A9BB0] text-sm leading-relaxed mb-4">{blog.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-[#8A9BB0]">
                        <span className="flex items-center gap-1"><User size={11} /> {blog.author}</span>
                        <span className="flex items-center gap-1"><Clock size={11} /> {blog.readTime}</span>
                      </div>
                      <span className="text-[#00A99D] text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">Read More <ArrowRight size={13} /></span>
                    </div>
                  </div>
                </motion.div>
              </AnimateIn>
            ))}
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {BLOG_CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="px-4 py-2 rounded-full text-xs font-medium transition-all duration-200"
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

          {/* All Articles Grid */}
          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(blog => (
              <FadeItem key={blog.id}>
                <motion.div
                  className="bg-white rounded-2xl overflow-hidden shadow-premium group cursor-pointer h-full flex flex-col"
                  style={{ border: '1.5px solid rgba(10,37,64,0.06)' }}
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 280, damping: 18 }}
                >
                  <div className="h-40 overflow-hidden">
                    <motion.img src={blog.image} alt={blog.title} className="w-full h-full object-cover" whileHover={{ scale: 1.05 }} transition={{ duration: 0.5 }} />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="inline-block self-start text-[10px] font-semibold px-2 py-0.5 rounded-full mb-2" style={{ background: CAT_COLORS[blog.category]?.bg || 'rgba(201,166,107,0.1)', color: CAT_COLORS[blog.category]?.color || '#C9A66B' }}>{blog.category}</span>
                    <h3 className="font-heading text-base font-bold text-[#0A2540] mb-2 leading-snug group-hover:text-[#00A99D] transition-colors flex-1">{blog.title}</h3>
                    <p className="text-[#8A9BB0] text-xs leading-relaxed mb-4 line-clamp-2">{blog.excerpt}</p>
                    <div className="flex items-center justify-between pt-3 border-t border-[#f0f3f7]">
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

          {filtered.length === 0 && (
            <div className="text-center py-16 text-[#8A9BB0]">
              <div className="text-4xl mb-4">🔍</div>
              <p className="font-heading text-lg font-bold text-[#0A2540] mb-2">No articles found</p>
              <p className="text-sm">Try a different search term or category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-6 text-center" style={{ background: '#0A2540' }}>
        <AnimateIn>
          <h2 className="font-heading text-3xl font-bold text-white mb-4">Stay Updated on Orthopaedic Health</h2>
          <p className="text-white/50 mb-8 max-w-md mx-auto text-sm">Get expert health tips, recovery guides, and clinic updates directly to your inbox.</p>
          <div className="flex justify-center gap-3 max-w-md mx-auto">
            <input type="email" placeholder="your@email.com" className="flex-1 bg-white/10 border border-white/15 rounded-xl px-4 py-3 text-white text-sm outline-none placeholder-white/30 focus:border-[#C9A66B] transition-colors" />
            <button className="btn-gold px-6 py-3 rounded-xl text-sm font-semibold shrink-0">Subscribe</button>
          </div>
        </AnimateIn>
      </section>
    </PageTransition>
  );
}
