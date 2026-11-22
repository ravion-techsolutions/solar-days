import { ArrowUpRight, Check, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

const featuredProducts = products.slice(0, 3);

export default function FeaturedSystems() {
  return (
    <section className="section bg-mist">
      <div className="container-custom">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Featured solar systems"
            title="Solar options worth a conversation"
            copy="A quick look at the system types we can help you explore, each shaped around a different property or requirement."
          />
          <Link to="/products" className="btn-secondary w-full shrink-0 sm:w-auto">
            View Full Catalog
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {featuredProducts.map((product, index) => (
            <Reveal key={product.id} delay={index * 0.07} className="h-full">
              <article className="card flex h-full flex-col overflow-hidden">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    width="1600"
                    height="1067"
                    loading="lazy"
                    alt={product.alt}
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-lg border border-white/20 bg-navy-900/80 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-widest text-orange backdrop-blur-md">
                    {product.tag}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-bold uppercase tracking-widest text-royal">{product.category}</p>
                  <h3 className="mt-3 text-lg font-bold text-navy">{product.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-7 text-muted">{product.description}</p>
                  <p className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-navy">
                    <Check className="h-4 w-4 text-orange" aria-hidden="true" />
                    {product.suitable}
                  </p>
                  <a
                    href={buildWhatsAppUrl(`Hello Solar Days, I would like to enquire about ${product.title.toLowerCase()}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-2 self-start pt-6 text-sm font-bold text-royal transition-colors hover:text-navy"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    Enquire Now
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-7 text-xs text-muted">Images shown are illustrative and are not presented as Solar Days installations.</p>
      </div>
    </section>
  );
}
