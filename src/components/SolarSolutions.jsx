import { ArrowUpRight } from 'lucide-react';
import { solutions } from '../data/solutions';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function SolarSolutions() {
  return (
    <section id="solutions" className="section bg-mist">
      <div className="container-custom">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Solar solutions"
            title="Energy ideas shaped around your space"
            copy="From a family home to a commercial rooftop, Solar Days helps you explore solar energy options that make sense for the way you use electricity."
          />
          <a
            href={buildWhatsAppUrl('Hello Solar Days, I would like to discuss which solar solution is right for me.')}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary w-full shrink-0 sm:w-auto"
          >
            Discuss Your Requirement
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-14">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Reveal key={solution.id} delay={index * 0.06}>
                <article
                  id={`solution-${solution.id}`}
                  className="card group h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={solution.imageLarge}
                      srcSet={`${solution.image} 800w, ${solution.imageLarge} 1600w`}
                      sizes="(max-width: 640px) 100vw, 45vw"
                      width="1600"
                      height="1067"
                      loading="lazy"
                      alt={solution.alt}
                      className={`${
                        index % 3 === 0 ? 'aspect-[16/10]' : 'aspect-[16/9]'
                      } w-full object-cover transition-transform duration-700 group-hover:scale-[1.06]`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/25 to-transparent" aria-hidden="true" />
                    <span className="absolute left-5 top-5 flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 text-royal shadow-soft">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </div>
                  <div className="flex flex-col p-6 sm:p-7">
                    <h3 className="text-lg font-semibold tracking-[-0.02em] text-navy-900">{solution.title}</h3>
                    <p className="mt-3 flex-1 text-sm leading-7 text-muted">{solution.description}</p>
                    <a
                      href={buildWhatsAppUrl(
                        `Hello Solar Days, I would like to enquire about ${solution.title.toLowerCase()}.`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Enquire about ${solution.title}`}
                      className="mt-6 inline-flex items-center gap-2 self-start text-sm font-semibold text-royal transition-colors hover:text-navy-900"
                    >
                      Enquire
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <p className="mt-6 text-xs text-muted">Images shown are illustrative.</p>
      </div>
    </section>
  );
}
