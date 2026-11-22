import { ArrowRight, Leaf, Lightbulb, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import aboutSmall from '../assets/images/about-800.webp';
import aboutLarge from '../assets/images/about-1600.webp';
import Reveal from './Reveal';

const points = [
  {
    icon: Leaf,
    title: 'Cleaner choices',
    copy: 'Explore energy that comes from a renewable natural resource.',
  },
  {
    icon: Lightbulb,
    title: 'Smarter electricity use',
    copy: 'Understand how solar can fit the way your home or business uses power.',
  },
  {
    icon: Users,
    title: 'Guidance that listens',
    copy: 'We start with your location, property and requirement before suggesting a direction.',
  },
];

export default function About() {
  return (
    <section id="about" className="section bg-white">
      <div className="container-custom grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <span className="eyebrow">
            <span className="h-px w-6 bg-royal" aria-hidden="true" />
            About Solar Days
          </span>
          <h2 className="section-title mt-4">Building a Brighter, Sustainable Future</h2>
          <p className="section-copy">
            Solar Days is a solar energy solutions business based in Azhikode, Kannur, Kerala. We help homes and
            businesses explore how sunlight can become part of their everyday energy mix — thoughtfully, practically
            and with clear communication.
          </p>
          <p className="mt-4 text-[0.98rem] leading-7 text-muted">
            Solar energy is about more than panels on a roof. It is a chance to use a renewable resource more
            intelligently, reduce dependence on conventional electricity and make considered choices for the future.
            Our role is to help you understand what is possible for your property and your needs.
          </p>

          <div className="mt-8 space-y-4">
            {points.map((point) => {
              const Icon = point.icon;
              return (
                <div key={point.title} className="flex gap-4">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mist text-royal">
                    <Icon className="h-[1.15rem] w-[1.15rem]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-navy-900">{point.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted">{point.copy}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <Link to="/contact" className="btn-dark mt-9 w-full sm:w-auto">
            Talk to Our Team
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Reveal>

        <Reveal delay={0.12} className="relative">
          <div className="relative overflow-hidden rounded-[1.6rem]">
            <img
              src={aboutLarge}
              srcSet={`${aboutSmall} 800w, ${aboutLarge} 1600w`}
              sizes="(max-width: 1023px) 100vw, 45vw"
              width="1600"
              height="901"
              loading="lazy"
              alt="Solar panels generating energy in Dehradun, India"
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/45 via-transparent to-transparent" aria-hidden="true" />
          </div>
          <div className="card absolute -bottom-5 left-5 right-5 flex items-center gap-4 p-4 sm:left-auto sm:right-[-1rem] sm:w-[19rem]">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-royal/15 text-royal">
              <Leaf className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold text-navy-900">Rooted in Kerala</p>
              <p className="mt-0.5 text-xs leading-5 text-muted">Serving customers from Azhikode, Kannur.</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
