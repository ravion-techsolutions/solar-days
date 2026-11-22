import { Home, Leaf, Sun, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const steps = [
  {
    number: '01',
    icon: Sun,
    title: 'Sunlight',
    copy: 'Solar panels capture sunlight.',
  },
  {
    number: '02',
    icon: Zap,
    title: 'Energy Conversion',
    copy: 'Solar cells convert sunlight into electrical energy.',
  },
  {
    number: '03',
    icon: Home,
    title: 'Power Usage',
    copy: 'Generated electricity can be utilized by the connected electrical system, depending on the system configuration.',
  },
  {
    number: '04',
    icon: Leaf,
    title: 'Smarter Energy',
    copy: 'Customers can make use of solar energy as part of their energy consumption.',
  },
];

export default function HowSolarWorks() {
  return (
    <section className="section bg-mist">
      <div className="container-custom">
        <SectionHeading
          eyebrow="How solar works"
          title="From sunlight to smarter energy"
          copy="A simple look at how solar energy becomes usable power — explained without the technical jargon."
          align="center"
        />

        <div className="relative mt-14 lg:mt-16">
          <div
            className="absolute left-[12.5%] right-[12.5%] top-7 hidden h-px bg-line lg:block"
            aria-hidden="true"
          />
          <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.number} delay={index * 0.08} className="relative">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-4 border-mist bg-white text-royal shadow-soft">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="mt-5 text-center">
                    <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-royal">
                      Step {index + 1}
                    </span>
                    <h3 className="mt-2.5 text-base font-semibold text-navy-900">{step.title}</h3>
                    <p className="mx-auto mt-2.5 max-w-[15rem] text-sm leading-6 text-muted">{step.copy}</p>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>

        <div className="mt-14 text-center">
          <Link to="/contact" className="btn-secondary w-full sm:w-auto">
            Ask Us About Your Site
          </Link>
        </div>
      </div>
    </section>
  );
}
