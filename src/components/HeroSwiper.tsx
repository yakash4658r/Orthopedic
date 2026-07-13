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
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540] via-[#0A2540] to-[#0e3560] opacity-100" />
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 80% 30%, #C9A66B 0%, transparent 40%)' }} />

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
                
                {/* TEXT CONTENT CONTAINER (Now on the Left) */}
                <div className="w-full lg:w-[55%] relative z-20 flex flex-col justify-center text-left py-6 lg:py-0 lg:pr-10">
                  {/* Doctor Name */}
                  {isActive && (
                    <motion.h1
                      className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-wide leading-tight mb-3 uppercase"
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
                      className="text-[#C9A66B] text-xs sm:text-sm lg:text-base font-bold tracking-widest mb-8 lg:mb-10 uppercase font-body"
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
                      className="space-y-4 lg:space-y-5 mb-10 lg:mb-12 text-white/90 text-[13px] sm:text-sm lg:text-base leading-relaxed max-w-xl"
                      initial="hidden"
                      animate="visible"
                      variants={{
                        visible: { transition: { staggerChildren: 0.12, delayChildren: 0.5 } }
                      }}
                    >
                      {banner.bullets.map((bullet, bi) => (
                        <motion.li
                          key={bi}
                          className="flex items-start gap-3 text-white/80"
                          variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0 }
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          <span className="text-[#C9A66B] shrink-0 font-bold select-none mt-0.5">✦</span>
                          <span className="font-normal text-left">{bullet}</span>
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
                          className="btn-gold inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-semibold transition-all duration-300"
                        >
                          {banner.cta.label}
                        </a>
                      ) : (
                        <button
                          onClick={() => navigate(banner.cta.href)}
                          className="btn-gold inline-flex items-center justify-center px-8 py-4 rounded-xl text-sm font-semibold transition-all duration-300"
                        >
                          {banner.cta.label}
                        </button>
                      )}
                    </motion.div>
                  )}
                </div>

                {/* DOCTOR IMAGE CONTAINER (Now on the Right) */}
                <div className="w-full lg:w-[45%] h-[35vh] lg:h-[80%] flex justify-center items-center lg:items-end relative z-10 select-none mb-6 lg:mb-0 lg:mt-10">
                  {isActive && (
                    <motion.div
                      className="relative w-full h-full flex justify-center lg:justify-end"
                      initial={{ opacity: 0, x: 40, scale: 0.95 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="relative w-full max-w-[500px] h-full flex items-end">
                        {/* Decorative background element behind image */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] to-transparent z-10 lg:hidden" />
                        <img
                          src={banner.bg}
                          alt={banner.doctorName}
                          className="h-full w-full object-contain object-bottom drop-shadow-2xl z-0"
                          style={{ filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.5))' }}
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
