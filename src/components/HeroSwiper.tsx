import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { HERO_BANNERS } from '../constants/data';

export default function HeroSwiper() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-[100vh] lg:h-[90vh] lg:min-h-[680px] overflow-hidden bg-[#F8FAFC]">
      {/* Background subtle elements */}
      <div className="absolute inset-0 bg-white opacity-60" />
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 0% 0%, #00A99D 0%, transparent 40%)' }} />

      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop
        speed={1200}
        pagination={{
          clickable: true,
          el: '.custom-swiper-pagination',
        }}
        className="w-full h-full"
      >
        {HERO_BANNERS.map((banner) => (
          <SwiperSlide key={banner.id}>
            {({ isActive }) => (
              <div className="relative w-full h-full min-h-[100vh] lg:h-[90vh] lg:min-h-[680px] flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-20 pt-28 pb-10 lg:py-0">
                
                {/* TEXT CONTENT CONTAINER */}
                <div className="w-full lg:w-[50%] relative z-20 flex flex-col justify-center text-left py-6 lg:py-0 lg:pr-10">
                  {/* Doctor Name */}
                  {isActive && (
                    <motion.h1
                      className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#0A2540] tracking-wide leading-tight mb-3 uppercase"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {banner.doctorName}
                    </motion.h1>
                  )}

                  {/* Credentials */}
                  {isActive && (
                    <motion.div
                      className="text-[#00A99D] text-xs sm:text-sm lg:text-base font-bold tracking-widest mb-8 lg:mb-10 uppercase font-body"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                      {banner.credentials}
                    </motion.div>
                  )}

                  {/* Bullet Points list */}
                  {isActive && (
                    <motion.ul
                      className="space-y-4 lg:space-y-5 mb-10 lg:mb-12 text-[#4A5568] text-[13px] sm:text-sm lg:text-base leading-relaxed max-w-xl"
                      initial="hidden"
                      animate="visible"
                      variants={{
                        visible: { transition: { staggerChildren: 0.12, delayChildren: 0.5 } }
                      }}
                    >
                      {banner.bullets.map((bullet, bi) => (
                        <motion.li
                          key={bi}
                          className="flex items-start gap-3"
                          variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0 }
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          <span className="text-[#00A99D] shrink-0 font-bold select-none mt-0.5">✓</span>
                          <span className="font-medium text-left">{bullet}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}

                  {/* CTA Button */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.1, duration: 0.6 }}
                    >
                      {banner.cta.href.startsWith('#') ? (
                        <a
                          href={banner.cta.href}
                          className="bg-[#0A2540] hover:bg-[#0e3560] text-white inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                          {banner.cta.label}
                        </a>
                      ) : (
                        <button
                          onClick={() => navigate(banner.cta.href)}
                          className="bg-[#0A2540] hover:bg-[#0e3560] text-white inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                        >
                          {banner.cta.label}
                        </button>
                      )}
                    </motion.div>
                  )}
                </div>

                {/* IMAGE CONTAINER */}
                <div className="w-full lg:w-[50%] h-[35vh] lg:h-[80%] flex justify-center items-center relative z-10 mb-6 lg:mb-0 lg:mt-10">
                  {isActive && (
                    <motion.div
                      className="relative w-full h-full flex justify-center lg:justify-end items-center"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="relative w-full max-w-[600px] h-full flex items-center justify-center">
                        <img
                          src={banner.bg}
                          alt={banner.doctorName}
                          className="w-full h-auto max-h-full object-contain rounded-2xl shadow-sm"
                          loading="eager"
                        />
                      </div>
                    </motion.div>
                  )}
                </div>

              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper Pagination */}
      <div className="absolute bottom-8 left-6 lg:left-20 z-30 flex justify-start">
        <div className="custom-swiper-pagination flex gap-3" />
      </div>
    </div>
  );
}
