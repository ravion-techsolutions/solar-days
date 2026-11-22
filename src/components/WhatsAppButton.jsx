import { buildWhatsAppUrl } from '../utils/whatsapp';
import WhatsAppIcon from './WhatsAppIcon';

export default function WhatsAppButton() {
  return (
    <div className="group fixed bottom-5 right-5 z-[60] sm:bottom-7 sm:right-7">
      <a
        href={buildWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Solar Days on WhatsApp"
        className="flex h-14 w-14 touch-manipulation items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_35px_-12px_rgba(37,211,102,0.7)] transition-transform duration-300 hover:scale-105 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#25D366]"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>
      <span className="pointer-events-none absolute right-[4.25rem] top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-navy-950 px-3.5 py-2 text-xs font-semibold text-white opacity-0 shadow-lift transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
        Chat with Solar Days
      </span>
    </div>
  );
}
