import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, MapPin, Menu, MessageCircle, Phone, ShieldCheck, X } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { businessInfo } from '../data/businessInfo';
import { buildWhatsAppUrl } from '../utils/whatsapp';

const navLinks = [
  { label: 'Home', to: '/', end: true },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Products', to: '/products' },
  { label: 'Contact', to: '/contact' },
];

const consultationUrl = buildWhatsAppUrl(
  'Hello Solar Days, I would like to book a free consultation about solar energy solutions.',
);

export default function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [openMenuPath, setOpenMenuPath] = useState(null);
  const menuOpen = openMenuPath === pathname;
  const toggleRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const firstFocusable = menuRef.current?.querySelector('a, button');
    firstFocusable?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpenMenuPath(null);
        toggleRef.current?.focus();
        return;
      }

      if (event.key !== 'Tab' || !menuRef.current) return;
      const focusable = Array.from(menuRef.current.querySelectorAll('a, button'));
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = () => setOpenMenuPath(null);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy-900/95 text-white backdrop-blur-xl transition-shadow duration-300 ${
        scrolled ? 'shadow-elevated' : ''
      }`}
    >
      <div className="hidden border-b border-white/10 bg-navy-950/70 text-xs text-slate-300 md:block">
        <div className="container-custom flex h-9 items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-aqua" aria-hidden="true" />
              Solar energy solutions in Kannur
            </span>
            <span className="hidden lg:inline">GST: {businessInfo.gst}</span>
          </div>
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-aqua" aria-hidden="true" />
              Azhikode, Kannur
            </span>
            <a href={`tel:+91${businessInfo.contactPersons[0].phone}`} className="inline-flex items-center gap-1.5 font-semibold text-white transition-colors hover:text-aqua">
              <Phone className="h-3.5 w-3.5 text-aqua" aria-hidden="true" />
              +91 {businessInfo.contactPersons[0].displayPhone}
            </a>
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-aqua transition-colors hover:text-white"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      <div className="container-custom flex h-[4.5rem] items-center justify-between gap-3 sm:gap-6">
        <Link to="/" className="flex shrink-0 items-center rounded-xl bg-white p-1.5 shadow-md" aria-label="Solar Days — home" onClick={closeMenu}>
          <img
            src={businessInfo.logo}
            alt="Solar Days"
            className="h-8 w-auto object-contain sm:h-9 lg:h-10"
            width="853"
            height="160"
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `relative rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors xl:px-4 ${
                  isActive ? 'text-aqua' : 'text-slate-300 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  <span
                    className={`absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-royal to-aqua transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                    aria-hidden="true"
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        <a
          href={consultationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary hidden !rounded-lg !px-5 !py-2.5 !text-sm lg:inline-flex"
        >
          Get a Free Quote
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>

        <button
          ref={toggleRef}
          type="button"
          className="inline-flex h-11 w-11 touch-manipulation items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white lg:hidden"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setOpenMenuPath((value) => (value === pathname ? null : pathname))}
        >
          {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      {menuOpen ? (
        <div className="fixed inset-x-0 top-[4.5rem] bottom-0 z-40 overflow-y-auto lg:hidden">
          <div
            className="absolute inset-0 bg-navy-950/60 backdrop-blur-sm"
            aria-hidden="true"
            onClick={closeMenu}
          />
          <div
            id="mobile-menu"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="relative mx-4 mt-3 max-h-[calc(100vh-6rem)] overflow-y-auto rounded-3xl border border-white/10 bg-navy-950/95 p-5 shadow-elevated"
          >
            <nav className="flex flex-col" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.end}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `flex items-center justify-between border-b border-white/10 px-2 py-3.5 text-sm font-semibold transition-colors ${
                      isActive ? 'text-aqua' : 'text-slate-200 hover:text-aqua'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {link.label}
                      <span className={`h-1.5 w-1.5 rounded-full bg-aqua ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>
            <div className="mt-5 flex flex-col gap-3">
              <a href={consultationUrl} target="_blank" rel="noopener noreferrer" className="btn-primary w-full">
                Get a Free Quote
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-light w-full"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
