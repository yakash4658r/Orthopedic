import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BRAND } from '../constants/data';

export default function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${BRAND.whatsapp}?text=Hello%2C%20I%20would%20like%20to%20book%20an%20appointment%20at%20OrthoCare%20Elite.`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-5 z-[7000] w-14 h-14 rounded-full flex items-center justify-center shadow-premium"
      style={{ background: '#25D366' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{ background: '#25D366', opacity: 0.4 }}
        animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
      />
      <svg width="28" height="28" viewBox="0 0 32 32" fill="white">
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.825.737 5.476 2.027 7.782L0 32l8.454-2.013A15.937 15.937 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm8.005 22.338c-.337.946-1.963 1.807-2.7 1.919-.688.104-1.557.148-2.511-.158-.578-.186-1.32-.433-2.263-.85-3.98-1.72-6.576-5.737-6.776-6.003-.2-.265-1.623-2.155-1.623-4.11 0-1.955 1.023-2.919 1.386-3.316.362-.396.79-.495 1.055-.495.264 0 .528.003.759.014.244.012.57-.093.894.682.337.793 1.143 2.747 1.244 2.946.1.2.167.431.033.693-.133.264-.2.43-.396.661-.198.232-.415.518-.594.695-.198.198-.405.413-.174.812.23.396 1.022 1.688 2.194 2.733 1.507 1.343 2.777 1.76 3.172 1.958.396.2.627.167.858-.1.23-.265.984-1.145 1.245-1.54.264-.396.528-.33.89-.198.363.133 2.307 1.089 2.703 1.287.396.199.66.298.76.462.1.166.1.963-.237 1.907z" />
      </svg>
    </motion.a>
  );
}
