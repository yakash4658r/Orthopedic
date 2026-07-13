import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_BANNERS } from '../constants/data';

export default function HeroSwiper() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-[100vh] lg:h-[95vh] lg:min-h-[700px] overflow-hidden bg-[#071828]">
      
      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Navigation]}
        effect="fade"
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        loop
        speed={1500}
        navigation={{
          prevEl: '.hero-swiper-button-prev',
          nextEl: '.hero-swiper-button-next',
        }}
        pagination={{
          clickable: true,
          el: '.hero-swiper-pagination',
        }}
        className="w-full h-full"
      >
        {HERO_BANNERS.map((banner) => (
          <SwiperSlide key={banner.id}>
            {({ isActive }) => (
              <div className="relative w-full h-full flex items-center">
                
                {/* 1. FULL BACKGROUND IMAGE */}
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src={banner.bg}
                    alt={banner.doctorName}
                    className="w-full h-full object-cover object-top md:object-[center_20%]"
                    loading="eager"
                  />
                </div>

                {/* 2. OVERLAY GRADIENT */}
                {/* Much lighter overlay so images are clearly visible on the right */}
                <div className="absolute inset-0 bg-[#0A2540]/60 sm:bg-gradient-to-r from-[#0A2540] via-[#0A2540]/50 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/90 via-[#0A2540]/20 to-transparent sm:hidden" />

                {/* 3. TEXT CONTENT (Left Aligned) */}
                <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-16 flex flex-col justify-center h-full pt-24 lg:pt-32 pb-20">
                  <div className="w-full lg:w-[65%] max-w-2xl lg:max-w-3xl">
                    
                    {/* Pill Badge */}
                    {isActive && (
                      <motion.div
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 border border-white/10"
                        style={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#E53E3E]" />
                        <span className="text-[#E53E3E] text-[10px] sm:text-xs font-bold tracking-widest uppercase">
                          {banner.credentials}
                        </span>
                      </motion.div>
                    )}

                    {/* Quotation Icon */}
                    {isActive && (
                      <motion.div
                        className="text-[#E53E3E] mb-4 opacity-80"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 13C9 14.6569 7.65685 16 6 16C4.34315 16 3 14.6569 3 13C3 9 5.5 6.5 8 5L9 6.5C7.5 7.5 6.5 9 6.5 10.5C7.2 10.5 8 10.8 8.5 11.3C9 11.8 9 12.4 9 13ZM19 13C19 14.6569 17.6569 16 16 16C14.3431 16 13 14.6569 13 13C13 9 15.5 6.5 18 5L19 6.5C17.5 7.5 16.5 9 16.5 10.5C17.2 10.5 18 10.8 18.5 11.3C19 11.8 19 12.4 19 13Z" />
                        </svg>
                      </motion.div>
                    )}

                    {/* Main Heading */}
                    {isActive && (
                      <motion.h1
                        className="font-heading text-4xl sm:text-5xl lg:text-[64px] font-bold text-white tracking-tight leading-[1.1] mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {banner.doctorName}
                      </motion.h1>
                    )}

                    {/* Description Paragraph */}
                    {isActive && (
                      <motion.p
                        className="text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mb-10 font-medium"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {banner.bullets.join(' • ')}
                      </motion.p>
                    )}

                    {/* Buttons */}
                    {isActive && (
                      <motion.div
                        className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      >
                        {banner.cta.href.startsWith('#') ? (
                          <a
                            href={banner.cta.href}
                            className="bg-[#E53E3E] hover:bg-[#C53030] text-white px-8 py-3.5 rounded-full text-sm font-bold transition-all duration-300 shadow-lg flex items-center gap-2 group"
                          >
                            {banner.cta.label}
                            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                          </a>
                        ) : (
                          <button
                            onClick={() => navigate(banner.cta.href)}
                            className="bg-[#E53E3E] hover:bg-[#C53030] text-white px-8 py-3.5 rounded-full text-sm font-bold transition-all duration-300 shadow-lg flex items-center gap-2 group"
                          >
                            {banner.cta.label}
                            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                          </button>
                        )}

                        <button
                          onClick={() => navigate('/contact')}
                          className="border border-white/30 hover:bg-white/10 text-white px-8 py-3.5 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 group"
                        >
                          Book Consultation
                          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </button>
                      </motion.div>
                    )}

                  </div>
                </div>

              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 4. NAVIGATION ARROWS */}
      <div className="hero-swiper-button-prev absolute left-2 lg:left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center cursor-pointer text-white/70 hover:text-white transition-colors">
        <ChevronLeft size={40} strokeWidth={1} />
      </div>
      <div className="hero-swiper-button-next absolute right-2 lg:right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center cursor-pointer text-white/70 hover:text-white transition-colors">
        <ChevronRight size={40} strokeWidth={1} />
      </div>

      {/* 5. PAGINATION DOTS */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center lg:justify-start lg:pl-16 w-full max-w-7xl mx-auto">
        <div className="hero-swiper-pagination flex gap-2" />
      </div>

      {/* 6. VERTICAL SCROLL TEXT (Desktop Only) */}
      <div className="absolute bottom-16 right-10 z-30 hidden lg:flex flex-col items-center gap-4 opacity-50">
        <div className="text-[10px] tracking-[0.3em] text-white uppercase" style={{ writingMode: 'vertical-rl' }}>
          Scroll
        </div>
        <div className="w-[1px] h-16 bg-white/50" />
      </div>

      {/* Custom Global CSS overrides for this specific swiper instance */}
      <style>{`
        .hero-swiper-pagination .swiper-pagination-bullet {
          width: 6px;
          height: 6px;
          background: rgba(255,255,255,0.4);
          border-radius: 50%;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .hero-swiper-pagination .swiper-pagination-bullet-active {
          width: 16px;
          border-radius: 4px;
          background: #E53E3E;
        }
      `}</style>

    </div>
  );
}
