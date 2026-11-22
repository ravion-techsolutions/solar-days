import { useState } from 'react';
import { ArrowUpRight, Check, MessageCircle } from 'lucide-react';
import { productCategories, products } from '../data/products';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function ProductCatalog() {
  const [category, setCategory] = useState('All');
  const visibleProducts = category === 'All' ? products : products.filter((product) => product.category === category);

  return (
    <section id="products" className="section bg-mist">
      <div className="container-custom">
        <SectionHeading
          eyebrow="Solar product catalog"
          title="Solar systems and components explained simply"
          copy="Browse the solar options we can discuss with you. Each item focuses on the practical use case, not technical claims or unverified specifications."
        />

        <div className="mt-9 flex flex-wrap gap-2" role="group" aria-label="Filter solar products">
          {productCategories.map((item) => {
            const isActive = item === category;
            return (
              <button
                key={item}
                type="button"
                aria-pressed={isActive}
                onClick={() => setCategory(item)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? 'border-navy-900 bg-navy-900 text-white'
                    : 'border-line bg-white text-navy-900/75 hover:border-royal hover:text-royal'
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProducts.map((product, index) => (
            <Reveal key={product.id} delay={(index % 3) * 0.06} className="h-full">
              <article className="card flex h-full flex-col overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    width="1600"
                    height="1067"
                    loading="lazy"
                    alt={product.alt}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.05]"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-royal shadow-soft">
                    {product.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-royal">{product.category}</p>
                  <h3 className="mt-3 text-lg font-semibold tracking-[-0.02em] text-navy-900">{product.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{product.description}</p>
                  <p className="mt-5 text-xs font-semibold text-navy-900">Suitable for: {product.suitable}</p>
                  <ul className="mt-4 space-y-2.5">
                    {product.points.map((point) => (
                      <li key={point} className="flex gap-2.5 text-sm leading-6 text-muted">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-royal" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={buildWhatsAppUrl(`Hello Solar Days, I would like to enquire about ${product.title.toLowerCase()}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-2 self-start pt-7 text-sm font-semibold text-royal transition-colors hover:text-navy-900"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Enquire on WhatsApp
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-xs leading-6 text-muted">
          Product photography is illustrative and is not presented as an installation completed by Solar Days.
        </p>
      </div>
    </section>
  );
}
