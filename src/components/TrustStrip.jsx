import { MapPin, MessageCircle, ShieldCheck, Sun } from 'lucide-react';

const items = [
  {
    icon: Sun,
    title: 'Solar-focused',
    copy: 'Solar energy is all we talk about here.',
  },
  {
    icon: MapPin,
    title: 'Kannur base',
    copy: 'Based in Azhikode, Kannur, Kerala.',
  },
  {
    icon: ShieldCheck,
    title: 'GST registered',
    copy: 'Registered with GSTIN 32AEFFS9820R1ZD.',
  },
  {
    icon: MessageCircle,
    title: 'Direct enquiries',
    copy: 'Call or message us on WhatsApp.',
  },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-line bg-white py-10 sm:py-12">
      <div className="container-custom grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-aqua/10 text-aqua">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-sm font-bold text-navy">{item.title}</h3>
                <p className="mt-1 text-xs leading-6 text-muted">{item.copy}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
