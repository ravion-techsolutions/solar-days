import { MessageCircle } from 'lucide-react';
import Contact from '../components/Contact';
import MapSection from '../components/MapSection';
import PageHero from '../components/PageHero';
import { buildWhatsAppUrl } from '../utils/whatsapp';

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Let us talk about your solar plans"
        copy="Call, message or send an enquiry. Share your location and a little about your property so we can keep the conversation useful."
      >
        <a
          href={buildWhatsAppUrl('Hello Solar Days, I would like to start a solar enquiry.')}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary w-full sm:w-auto"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Message on WhatsApp
        </a>
      </PageHero>
      <Contact />
      <MapSection />
    </>
  );
}
