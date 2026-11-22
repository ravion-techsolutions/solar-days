import { ArrowRight, Building2, Headphones, MapPin, MessageCircle, Users } from 'lucide-react';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import Reveal from './Reveal';

const values = [
  {
    icon: MessageCircle,
    title: 'Personalized consultation',
    copy: 'We begin with your questions, location and the way you use electricity.',
    featured: true,
  },
  {
    icon: Users,
    title: 'Customer-focused approach',
    copy: 'Conversations shaped around your property, not a one-size-fits-all pitch.',
  },
  {
    icon: MapPin,
    title: 'Local guidance',
    copy: 'Based in Azhikode, Kannur, with an understanding of the local context.',
  },
  {
    icon: Headphones,
    title: 'Clear communication',
    copy: 'Reach us by phone, email or WhatsApp when you need to ask something.',
  },
  {
    icon: Building2,
    title: 'Homes and businesses',
    copy: 'We discuss solar possibilities for both residential and commercial needs.',
  },
];

export default function WhySolarDays() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-navy-950 py-20 text-white sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute -left-32 top-0 h-[26rem] w-[26rem] rounded-full bg-royal/10 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-[22rem] w-[22rem] rounded-full bg-sun/10 blur-3xl" aria-hidden="true" />

      <div className="container-custom relative grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <span className="eyebrow text-orange">
            <span className="h-px w-6 bg-sun" aria-hidden="true" />
            Why Solar Days
          </span>
          <h2 className="section-title mt-5 text-white">Solar guidance that keeps people first</h2>
          <p className="mt-5 max-w-lg text-sm leading-7 text-white/70">
            Choosing solar starts with good questions. We take the time to understand what you need, explain the options
            in plain language and keep the conversation open from first enquiry to the next step.
          </p>
          <a
            href={buildWhatsAppUrl('Hello Solar Days, I would like to speak with your team about solar energy.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-8 w-full sm:w-auto"
          >
            Talk to Our Team
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Reveal
                key={value.title}
                delay={index * 0.05}
                className={value.featured ? 'sm:col-span-2' : ''}
              >
                <div
                  className={`h-full rounded-2xl border p-6 transition-colors sm:p-7 ${
                    value.featured
                      ? 'border-royal/30 bg-royal/10'
                      : 'border-white/10 bg-white/[0.045] hover:border-white/20'
                  }`}
                >
                  <span
                    className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                      value.featured ? 'bg-royal text-navy-950' : 'bg-white/10 text-orange'
                    }`}
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-white">{value.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/60">{value.copy}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
