import { Hero } from './components/Hero';
import { About } from './components/About';
import { SpecialOffers } from './components/SpecialOffers';
import { Menu } from './components/Menu';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { LanguageProvider } from './contexts/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-amber-50">
        <Hero />
        <About />
        <SpecialOffers />
        <Menu />
        <Gallery />
        <Testimonials />
        <Contact />
        <Newsletter />
        <Footer />
        <ScrollToTop />
      </div>
    </LanguageProvider>
  );
}