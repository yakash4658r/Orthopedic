import { useNavigate } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { BRAND } from '../constants/data';

export default function MobileBookBar() {
  const navigate = useNavigate();
  return (
    <div className="mobile-book-bar">
      <a href={`tel:${BRAND.phone}`} className="flex items-center gap-2">
        <Phone size={14} className="text-[#C9A66B]" />
        <div>
          <p className="text-white/40 text-[10px]">Call Us</p>
          <p className="text-white font-semibold text-xs">{BRAND.phone}</p>
        </div>
      </a>
      <button
        onClick={() => navigate('/contact')}
        className="btn-gold px-5 py-2.5 rounded-xl text-sm font-bold"
      >
        Book Now
      </button>
    </div>
  );
}
