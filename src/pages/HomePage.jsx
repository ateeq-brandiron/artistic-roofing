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
        title="Roofing Contractor in Sierra Vista, AZ"
        description="Licensed roofing contractor in Sierra Vista, AZ. Roof repair, replacement & maintenance for homes and businesses. TRI Certified tile, metal, shingle & gutters. Call for a free estimate."
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
