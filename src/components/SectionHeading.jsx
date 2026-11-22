import Reveal from './Reveal';

export default function SectionHeading({ eyebrow, title, copy, invert = false, align = 'left', className = '' }) {
  const centered = align === 'center';

  return (
    <Reveal className={`${centered ? 'text-center' : ''} ${className}`}>
      <span className={`eyebrow ${invert ? 'text-aqua' : ''}`}>
        <span className={`h-px w-6 ${invert ? 'bg-aqua' : 'bg-royal'}`} aria-hidden="true" />
        {eyebrow}
      </span>
      <h2 className={`section-title mt-4 ${invert ? 'text-white' : ''} ${centered ? 'mx-auto' : ''}`}>{title}</h2>
      {copy ? (
        <p className={`section-copy ${invert ? 'text-white/70' : ''} ${centered ? 'mx-auto' : ''}`}>{copy}</p>
      ) : null}
    </Reveal>
  );
}
