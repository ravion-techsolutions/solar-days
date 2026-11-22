import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Images, X } from 'lucide-react';
import { galleryImages } from '../data/gallery';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const closeButtonRef = useRef(null);
  const isOpen = activeIndex !== null;

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setActiveIndex(null);
      if (event.key === 'ArrowRight') setActiveIndex((current) => (current + 1) % galleryImages.length);
      if (event.key === 'ArrowLeft') {
        setActiveIndex((current) => (current - 1 + galleryImages.length) % galleryImages.length);
      }
    };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  const activeImage = isOpen ? galleryImages[activeIndex] : null;

  return (
    <section id="gallery" className="section bg-white">
      <div className="container-custom">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Solar showcase"
            title="A closer look at solar in everyday spaces"
            copy="A visual collection of rooftops, homes and solar details that show what clean energy can look like."
          />
          <span className="inline-flex items-center gap-2 self-start rounded-full border border-line bg-mist px-4 py-2 text-xs font-medium text-muted">
            <Images className="h-4 w-4 text-royal" aria-hidden="true" />
            Illustrative imagery
          </span>
        </div>

        <p className="mt-5 text-xs leading-6 text-muted">
          These photographs are illustrative and may not represent installations completed by Solar Days.
        </p>

        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {galleryImages.map((image, index) => (
            <Reveal key={image.id} delay={(index % 3) * 0.05} className="mb-4 break-inside-avoid">
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Open image: ${image.caption}`}
                className="group relative block w-full overflow-hidden rounded-xl bg-mist text-left"
              >
                <img
                  src={image.src}
                  srcSet={`${image.src} ${image.width}w, ${image.srcLarge} ${image.largeWidth}w`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  alt={image.alt}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-navy-950/75 via-navy-950/5 to-transparent opacity-80 transition-opacity group-hover:opacity-95" aria-hidden="true" />
                <span className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-white">{image.caption}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/90 text-navy-900 opacity-0 transition-opacity group-hover:opacity-100">
                    <ChevronRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {isOpen ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-navy-950/95 p-4 backdrop-blur-md sm:p-8"
          onClick={() => setActiveIndex(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Solar image gallery"
            className="relative w-full max-w-5xl"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => setActiveIndex(null)}
              aria-label="Close gallery"
              className="absolute -top-2 right-0 z-10 flex h-11 w-11 touch-manipulation items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25 sm:-top-12"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>

            <img
              src={activeImage.srcLarge}
              width={activeImage.width}
              height={activeImage.height}
              alt={activeImage.alt}
              className="mx-auto max-h-[72vh] w-full rounded-xl object-contain"
            />

            <div className="mt-4 flex items-center justify-between gap-4 text-white">
              <div>
                <p className="text-sm font-semibold">{activeImage.caption}</p>
                <p className="mt-1 text-xs text-white/60">Illustrative imagery</p>
              </div>
              <p className="text-xs font-medium text-white/70">
                {activeIndex + 1} / {galleryImages.length}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setActiveIndex((current) => (current - 1 + galleryImages.length) % galleryImages.length)}
              aria-label="Previous image"
              className="absolute left-0 top-1/2 flex h-11 w-11 -translate-y-1/2 touch-manipulation items-center justify-center rounded-full bg-navy-950/70 text-white transition-colors hover:bg-navy-950 sm:-left-5"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => setActiveIndex((current) => (current + 1) % galleryImages.length)}
              aria-label="Next image"
              className="absolute right-0 top-1/2 flex h-11 w-11 -translate-y-1/2 touch-manipulation items-center justify-center rounded-full bg-navy-950/70 text-white transition-colors hover:bg-navy-950 sm:-right-5"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
