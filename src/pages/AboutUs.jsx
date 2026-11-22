import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import About from '../components/About';
import Benefits from '../components/Benefits';
import Gallery from '../components/Gallery';
import PageCTA from '../components/PageCTA';
import PageHero from '../components/PageHero';
import TrustStrip from '../components/TrustStrip';
import WhySolarDays from '../components/WhySolarDays';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export default function AboutUs() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Solar energy, explained with clarity"
        copy="Solar Days is a solar-focused business in Kannur, Kerala. We keep the conversation practical: your site, your needs, and the solar options worth considering."
      >
        <a
          href={buildWhatsAppUrl('Hello Solar Days, I would like to know more about your team.')}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full sm:w-auto"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Ask Us on WhatsApp
        </a>
        <Link to="/contact" className="btn-outline-light w-full sm:w-auto">
          Get in touch
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </PageHero>
      <TrustStrip />
      <About />
      <WhySolarDays />
      <Benefits />
      <Gallery />
      <PageCTA
        title="Have a property in mind?"
        copy="Share a few details about your location and roof, and we can start a focused solar conversation."
      />
    </>
  );
}
