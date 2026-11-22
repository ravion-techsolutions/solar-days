import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export default function PageCTA({
  title = 'Ready to explore solar for your property?',
  copy = 'Tell us a little about your location and electricity needs. We will help you understand the options that may suit your home or business.',
}) {
  return (
    <section className="section bg-mist">
      <div className="container-custom">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-navy p-7 shadow-elevated sm:p-10">
          <div className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-orange/10 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-royal/25 blur-3xl" aria-hidden="true" />
          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange">
                <span className="h-px w-6 bg-orange" aria-hidden="true" />
                Next step
              </span>
              <h2 className="mt-5 text-balance text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
                {title}
              </h2>
              <p className="mt-5 text-sm leading-7 text-slate-200 sm:text-base">{copy}</p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href={buildWhatsAppUrl('Hello Solar Days, I would like to discuss a solar enquiry.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Chat on WhatsApp
              </a>
              <Link to="/contact" className="btn-outline-light w-full sm:w-auto">
                Contact Us
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
