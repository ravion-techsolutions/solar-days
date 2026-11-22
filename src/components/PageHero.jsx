import { Link } from 'react-router-dom';

export default function PageHero({ eyebrow, title, copy, children }) {
  return (
    <section className="relative overflow-hidden bg-navy-900 pt-[4.5rem] text-white md:pt-[6.75rem]">
      <div className="pointer-events-none absolute inset-0 bg-gradient-navy opacity-90" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 bg-grid-dots bg-dots opacity-10" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-32 -top-24 h-[30rem] w-[30rem] rounded-full bg-aqua/10 blur-3xl" aria-hidden="true" />

      <div className="container-custom relative py-14 sm:py-16 lg:py-20">
        <nav aria-label="Breadcrumb" className="mb-7 flex items-center gap-2 text-xs font-semibold text-slate-400">
          <Link to="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-aqua">{title}</span>
        </nav>
        <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-aqua">
          <span className="h-px w-6 bg-aqua" aria-hidden="true" />
          {eyebrow}
        </span>
        <h1 className="mt-5 max-w-4xl text-balance text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {copy ? <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{copy}</p> : null}
        {children ? <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">{children}</div> : null}
      </div>
    </section>
  );
}
