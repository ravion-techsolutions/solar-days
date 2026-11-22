import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Check, MapPin, MessageCircle, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroLarge from '../assets/images/hero-1920.webp';
import commercialLarge from '../assets/images/commercial-1600.webp';
import systemsLarge from '../assets/images/systems-1600.webp';
import { buildWhatsAppUrl } from '../utils/whatsapp';

const slides = [
  {
    label: 'Residential',
    title: 'Rooftop solar for homes',
    image: heroLarge,
    alt: 'Solar panels covering the roof of a home in India',
  },
  {
    label: 'Commercial',
    title: 'Solar for businesses',
    image: commercialLarge,
    alt: 'Solar panels across a solar farm in India',
  },
  {
    label: 'Solar Systems',
    title: 'Complete solar power systems',
    image: systemsLarge,
    alt: 'Rows of solar panels generating energy in India',
  },
];

const highlights = [
  'Residential and commercial solar conversations',
  'Practical guidance shaped around your site',
  'Simple enquiry by phone or WhatsApp',
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const reducedMotion = useReducedMotion();
  const slide = slides[activeSlide];
  const consultationUrl = buildWhatsAppUrl(
    'Hello Solar Days, I would like to book a free consultation about solar energy solutions.',
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#EAF2FF] via-[#DCE9FF] to-[#C7D9FF] pt-[4.5rem] text-navy md:pt-[6.75rem]">
      <div className="pointer-events-none absolute inset-0 bg-solar-panel bg-panel opacity-70" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-32 -top-24 h-[30rem] w-[30rem] rounded-full bg-white/70 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-40 -left-24 h-[28rem] w-[28rem] rounded-full bg-orange/10 blur-3xl" aria-hidden="true" />

      <div className="container-custom relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:py-24">
        <motion.div
          variants={containerVariants}
          initial={reducedMotion ? 'visible' : 'hidden'}
          animate="visible"
          className="max-w-2xl"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange">
              <span className="h-1.5 w-1.5 rounded-full bg-orange" aria-hidden="true" />
              Solar energy solutions in Kannur
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mt-6 text-balance text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Pure Energy. <span className="text-orange">Brighter Futures.</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="mt-6 max-w-xl text-base leading-8 text-muted sm:text-lg">
            Discover thoughtful solar energy solutions for homes and businesses in Azhikode, Kannur. Clear guidance,
            practical options and a simple way to get started.
          </motion.p>

          <motion.ul variants={itemVariants} className="mt-7 grid gap-3">
            {highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-3 text-sm leading-7 text-navy">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange/15 text-orange">
                  <Check className="h-3 w-3" aria-hidden="true" />
                </span>
                {highlight}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={itemVariants} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link to="/services" className="btn-primary w-full sm:w-auto">
              Explore Solar Solutions
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a href={consultationUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary w-full sm:w-auto">
              <MessageCircle className="h-4 w-4 text-orange" aria-hidden="true" />
              Get a Free Quote
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-muted">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-orange" aria-hidden="true" />
              Azhikode, Kannur
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Sun className="h-4 w-4 text-orange" aria-hidden="true" />
              Solar-focused
            </span>
          </motion.div>
        </motion.div>

        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="rounded-3xl border-4 border-white bg-white/70 p-3 shadow-elevated sm:p-5">
            <div className="relative overflow-hidden rounded-2xl border border-white/80">
              <img
                key={slide.image}
                src={slide.image}
                width="1920"
                height="1280"
                alt={slide.alt}
                className="aspect-[4/3] w-full object-cover sm:aspect-[16/11]"
              />
              <div className="pointer-events-none absolute inset-0 bg-solar-panel bg-panel opacity-90" aria-hidden="true" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-900/25 via-transparent to-transparent" aria-hidden="true" />
              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3 sm:bottom-6 sm:left-6 sm:right-6">
                <div className="rounded-xl border border-white/40 bg-white/85 px-4 py-3 backdrop-blur-md">
                  <p className="text-[0.68rem] font-bold uppercase tracking-widest text-orange">{slide.label}</p>
                  <p className="mt-1 text-base font-bold text-navy sm:text-lg">{slide.title}</p>
                </div>
                <span className="hidden rounded-full border border-white/60 bg-white/85 px-3 py-1.5 text-[0.68rem] font-semibold text-navy backdrop-blur-md sm:inline-flex">
                  Illustrative imagery
                </span>
              </div>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {slides.map((item, index) => {
              const isActive = index === activeSlide;
              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  aria-pressed={isActive}
                  className={`rounded-xl border px-3 py-3 text-left transition-all ${
                    isActive
                      ? 'border-royal bg-white text-navy shadow-soft'
                      : 'border-white/80 bg-white/50 text-muted hover:border-royal hover:text-navy'
                  }`}
                >
                  <span className="block text-[0.65rem] font-bold tracking-widest text-orange">0{index + 1}</span>
                  <span className="mt-1 block text-xs font-semibold sm:text-sm">{item.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
