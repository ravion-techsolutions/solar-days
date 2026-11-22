import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageCTA from '../components/PageCTA';
import PageHero from '../components/PageHero';
import ProductCatalog from '../components/ProductCatalog';
import TrustStrip from '../components/TrustStrip';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export default function Products() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Solar options for homes and businesses"
        copy="Explore the system types and components we can discuss with you. We focus on practical fit and plain-language explanations."
      >
        <a
          href={buildWhatsAppUrl('Hello Solar Days, I would like help choosing a solar product.')}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full sm:w-auto"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Ask for guidance
        </a>
        <Link to="/services" className="btn-outline-light w-full sm:w-auto">
          View our services
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </PageHero>
      <TrustStrip />
      <ProductCatalog />
      <PageCTA
        title="Need help narrowing it down?"
        copy="A short WhatsApp message with your location, property type and rough electricity use is enough to start."
      />
    </>
  );
}
