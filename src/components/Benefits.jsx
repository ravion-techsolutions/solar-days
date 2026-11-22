import { Gauge, Layers, Leaf, Sprout, Sun, Wallet, Zap } from 'lucide-react';
import Reveal from './Reveal';

const benefits = [
  {
    icon: Zap,
    title: 'Reduced dependence',
    copy: 'Use more sunlight and rely a little less on conventional electricity.',
  },
  {
    icon: Leaf,
    title: 'Renewable and clean',
    copy: 'Solar power draws on a natural, renewable resource.',
  },
  {
    icon: Wallet,
    title: 'Savings potential',
    copy: 'Energy generation can support long-term savings, based on your usage and site.',
  },
  {
    icon: Layers,
    title: 'Better rooftop use',
    copy: 'Turn available roof space into a useful part of your energy plan.',
  },
  {
    icon: Sprout,
    title: 'Sustainable future',
    copy: 'Choose an energy direction that is mindful of the generations ahead.',
  },
  {
    icon: Gauge,
    title: 'Energy independence',
    copy: 'Explore the possibility of having more control over how you source power.',
  },
];

export default function Benefits() {
  return (
    <section id="why-solar" className="section bg-white">
      <div className="container-custom grid gap-6 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-5">
          <div className="relative flex h-full flex-col overflow-hidden rounded-[1.6rem] bg-navy-900 p-8 text-white sm:p-10">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-sun/20"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -right-6 -top-6 h-40 w-40 rounded-full bg-sun/10 blur-2xl"
              aria-hidden="true"
            />
            <span className="eyebrow text-orange">
              <span className="h-px w-6 bg-sun" aria-hidden="true" />
              Why solar energy
            </span>
            <h2 className="section-title mt-5 text-white">A brighter way to think about power</h2>
            <p className="mt-5 text-sm leading-7 text-white/70">
              Solar energy turns an everyday natural resource into a practical conversation about how homes and
              businesses use electricity. The benefits grow from thoughtful planning, the right site and realistic
              expectations.
            </p>
            <div className="mt-auto pt-10">
              <div className="flex items-start gap-4 border-t border-white/15 pt-6">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange/15 text-orange">
                  <Sun className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold">Start with the sunlight you already have</p>
                  <p className="mt-1.5 text-xs leading-6 text-white/60">
                    Every property is different. We help you look at what solar can realistically offer yours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-px overflow-hidden rounded-[1.6rem] border border-line bg-line sm:grid-cols-2 lg:col-span-7">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Reveal key={benefit.title} delay={index * 0.05} className="bg-white p-6 sm:p-8">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-mist text-royal">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-base font-semibold text-navy-900">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{benefit.copy}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
