import Benefits from '../components/Benefits';
import Contact from '../components/Contact';
import FeaturedSystems from '../components/FeaturedSystems';
import Gallery from '../components/Gallery';
import Hero from '../components/Hero';
import HowSolarWorks from '../components/HowSolarWorks';
import MapSection from '../components/MapSection';
import SolarSolutions from '../components/SolarSolutions';
import TrustStrip from '../components/TrustStrip';
import WhySolarDays from '../components/WhySolarDays';

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <SolarSolutions />
      <FeaturedSystems />
      <Benefits />
      <HowSolarWorks />
      <WhySolarDays />
      <Gallery />
      <Contact />
      <MapSection />
    </>
  );
}
