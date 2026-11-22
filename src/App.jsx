import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SEO from './components/SEO';
import ScrollManager from './components/ScrollManager';
import WhatsAppButton from './components/WhatsAppButton';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollManager />
        <SEO />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-navy-900 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" tabIndex={-1} className="outline-none">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
        <BackToTop />
      </BrowserRouter>
    </HelmetProvider>
  );
}
