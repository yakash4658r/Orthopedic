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
    <div className="relative w-full min-h-[100vh] lg:h-[90vh] lg:min-h-[680px] overflow-hidden bg-[#0A2540]">
      {/* Background soft ambient gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#06182c] via-[#0A2540] to-[#0b2b4d] opacity-90" />

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
              <div className="relative w-full h-full min-h-[100vh] lg:h-[90vh] lg:min-h-[680px] flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 pt-28 pb-10 lg:py-0">
                
                {/* DOCTOR IMAGE CONTAINER */}
                <div className="w-full lg:w-[45%] h-[28vh] lg:h-full flex justify-center items-end relative lg:absolute lg:bottom-0 lg:left-0 z-10 select-none">
                  {isActive && (
                    <motion.img
                      src={banner.bg}
                      alt={banner.doctorName}
                      className="h-full lg:h-[98%] w-auto object-contain object-top lg:object-bottom"
                      initial={{ opacity: 0, x: -40, scale: 0.95 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      loading="eager"
                    />
                  )}
                </div>

                {/* TEXT CONTENT CONTAINER */}
                <div className="w-full lg:w-[52%] lg:ml-auto relative z-20 flex flex-col justify-center text-left py-6 lg:py-0">
                  {/* Doctor Name */}
                  {isActive && (
                    <motion.h1
                      className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white tracking-wide leading-tight mb-2 uppercase"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      {banner.doctorName}
                    </motion.h1>
                  )}

                  {/* Credentials */}
                  {isActive && (
                    <motion.div
                      className="text-[#5b96d6] text-xs sm:text-sm lg:text-base font-bold tracking-wider mb-6 lg:mb-8 uppercase font-body"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35, duration: 0.5 }}
                    >
                      {banner.credentials}
                    </motion.div>
                  )}

                  {/* Bullet Points list */}
                  {isActive && (
                    <motion.ul
                      className="space-y-3 lg:space-y-4 mb-8 lg:mb-10 text-white/90 text-[11px] sm:text-xs lg:text-sm leading-relaxed max-w-2xl"
                      initial="hidden"
                      animate="visible"
                      variants={{
                        visible: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } }
                      }}
                    >
                      {banner.bullets.map((bullet, bi) => (
                        <motion.li
                          key={bi}
                          className="flex items-start gap-2 text-white/80"
                          variants={{
                            hidden: { opacity: 0, x: 15 },
                            visible: { opacity: 1, x: 0 }
                          }}
                          transition={{ duration: 0.4 }}
                        >
                          <span className="text-[#5b96d6] shrink-0 font-bold select-none">→</span>
                          <span className="font-normal text-left">{bullet}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}

                  {/* CTA Button */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.1, duration: 0.5 }}
                    >
                      {banner.cta.href.startsWith('#') ? (
                        <a
                          href={banner.cta.href}
                          className="inline-block bg-[#89afdb] hover:bg-[#a5c3e6] text-[#0A2540] font-body font-bold text-xs uppercase tracking-wider px-6 lg:px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-1px]"
                        >
                          {banner.cta.label}
                        </a>
                      ) : (
                        <button
                          onClick={() => navigate(banner.cta.href)}
                          className="inline-block bg-[#89afdb] hover:bg-[#a5c3e6] text-[#0A2540] font-body font-bold text-xs uppercase tracking-wider px-6 lg:px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-1px]"
                        >
                          {banner.cta.label}
                        </button>
                      )}
                    </motion.div>
                  )}
                </div>

              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper Pagination at bottom right */}
      <div className="absolute bottom-8 right-6 lg:right-16 z-30 flex justify-end">
        <div className="custom-swiper-pagination flex gap-2" />
      </div>
    </div>
  );
}
