import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import HowSolarWorks from '../components/HowSolarWorks';
import PageCTA from '../components/PageCTA';
import PageHero from '../components/PageHero';
import SolarSolutions from '../components/SolarSolutions';
import TrustStrip from '../components/TrustStrip';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Solar guidance from first question to next step"
        copy="From a first conversation to understanding how solar works, Solar Days helps you look at the options that fit your location and requirements."
      >
        <Link to="/contact" className="btn-primary w-full sm:w-auto">
          Request a conversation
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
        <a
          href={buildWhatsAppUrl('Hello Solar Days, I would like to ask about your solar services.')}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline-light w-full sm:w-auto"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          WhatsApp Us
        </a>
      </PageHero>
      <TrustStrip />
      <SolarSolutions />
      <HowSolarWorks />
      <PageCTA
        title="Not sure which solar option fits?"
        copy="Tell us whether this is for a home, shop or larger property. We will help you frame the right questions before you decide."
      />
    </>
  );
}
