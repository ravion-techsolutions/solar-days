import { ArrowUpRight, Mail, MapPin, MessageCircle, Navigation, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { businessInfo } from '../data/businessInfo';
import { buildWhatsAppUrl } from '../utils/whatsapp';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Products', to: '/products' },
  { label: 'Contact', to: '/contact' },
];

const solutionLinks = [
  { label: 'Residential Solar', to: '/services#solution-residential' },
  { label: 'Commercial Solar', to: '/services#solution-commercial' },
  { label: 'Rooftop Solar', to: '/services#solution-rooftop' },
  { label: 'Solar Power Systems', to: '/services#solution-systems' },
  { label: 'Product Catalog', to: '/products' },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-navy-950 pt-16 text-slate-300">
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-royal/20 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-32 top-24 h-96 w-96 rounded-full bg-orange/10 blur-3xl" aria-hidden="true" />

      <div className="container-custom relative">
        <div className="rounded-3xl border border-white/10 bg-gradient-navy p-7 shadow-elevated sm:p-10">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange">
                <span className="h-px w-6 bg-orange" aria-hidden="true" />
                Start a conversation
              </span>
              <h2 className="mt-4 text-2xl font-extrabold text-white sm:text-3xl">Ready to explore solar for your property?</h2>
              <p className="mt-3 text-sm leading-7 text-slate-200">
                Share a few details about your location and requirement. We will help you understand the options worth considering.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Link to="/contact" className="btn-primary w-full sm:w-auto">
                Contact Us
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <a href={buildWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="btn-outline-light w-full sm:w-auto">
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-10 py-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex rounded-xl bg-white p-2 shadow-md" aria-label="Solar Days — home">
              <img
                src={businessInfo.logo}
                alt="Solar Days"
                className="h-9 w-auto object-contain"
                width="853"
                height="160"
              />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              Solar Days helps homes and businesses in Kannur explore cleaner energy through thoughtful solar energy
              solutions and clear, customer-focused guidance.
            </p>
          </div>

          <nav className="lg:col-span-2" aria-label="Footer quick links">
            <h2 className="text-xs font-bold uppercase tracking-widest text-orange">Quick Links</h2>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-slate-400 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="lg:col-span-3" aria-label="Footer solar solutions">
            <h2 className="text-xs font-bold uppercase tracking-widest text-orange">Solar Divisions</h2>
            <ul className="mt-5 space-y-3">
              {solutionLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-slate-400 transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-orange">Contact & Location</h2>
            <p className="mt-5 flex gap-3 text-sm leading-7 text-slate-400">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
              <span>{businessInfo.address}</span>
            </p>
            <a
              href={`mailto:${businessInfo.email}`}
              className="mt-4 flex items-center gap-2 break-all text-sm text-slate-400 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
              {businessInfo.email}
            </a>
            <div className="mt-4 space-y-3">
              {businessInfo.contactPersons.map((person) => (
                <a
                  key={person.phone}
                  href={`tel:+91${person.phone}`}
                  className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
                  {person.name}: {person.displayPhone}
                </a>
              ))}
            </div>
            <a
              href={businessInfo.googleMapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-orange transition-colors hover:text-white"
            >
              Get Directions
              <Navigation className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-7 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Solar Days. All rights reserved.</p>
          <p>Solar energy solutions in Azhikode, Kannur, Kerala.</p>
        </div>
      </div>
    </footer>
  );
}
