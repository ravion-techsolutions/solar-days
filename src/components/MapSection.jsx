import { ArrowUpRight, MapPin, Navigation, Phone } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';
import Reveal from './Reveal';

export default function MapSection() {
  return (
    <section id="location" className="section bg-mist">
      <div className="container-custom grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
        <Reveal>
          <div className="flex h-full flex-col justify-center rounded-[1.6rem] border border-line bg-white p-7 shadow-soft sm:p-9">
            <span className="eyebrow">
              <span className="h-px w-6 bg-orange" aria-hidden="true" />
              Our location
            </span>
            <h2 className="section-title mt-4">Find Solar Days in Azhikode</h2>
            <p className="mt-5 flex gap-3 text-sm leading-7 text-muted">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-royal" aria-hidden="true" />
              <span>{businessInfo.address}</span>
            </p>

            <div className="mt-6 border-t border-line pt-6">
              {businessInfo.contactPersons.map((person) => (
                <a
                  key={person.phone}
                  href={`tel:+91${person.phone}`}
                  className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-navy-900 transition-colors hover:text-royal"
                >
                  <Phone className="h-4 w-4 text-royal" aria-hidden="true" />
                  {person.name}: {person.displayPhone}
                </a>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={businessInfo.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full sm:w-auto"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Get Directions
              </a>
              <a
                href={businessInfo.googleMapsOpenUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full sm:w-auto"
              >
                Open in Google Maps
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="min-h-[22rem]">
          <div className="h-full overflow-hidden rounded-[1.6rem] border border-line bg-white shadow-soft">
            <iframe
              title="Map showing the approximate location of Solar Days in Azhikode, Kannur"
              src={businessInfo.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="h-full min-h-[22rem] w-full"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
