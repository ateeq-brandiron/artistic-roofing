import Hero from '../components/Hero';
import SEO from '../components/SEO';
import ScrollBar from '../components/ScrollBar';
import VideoSection from '../components/VideoSection';
import About from '../components/About';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import Certifications from '../components/Certifications';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import FAQ from '../components/FAQ';

export default function HomePage() {
  return (
    <>
      <SEO
        title="Roofing Contractor in Sierra Vista, AZ | Artistic Roofing"
        description="Tile, shingle, metal & flat roof installation, repair and replacement in Sierra Vista, AZ. TRI-certified tile installers. Free estimates: (520) 458-6781."
        canonical="/"
      />
      <Hero />
      <ScrollBar />
      <VideoSection />
      <About />
      <Services />
      <WhyUs />
      <Certifications />
      <Testimonials />
      <CallToAction />
      <FAQ />
    </>
  );
}
