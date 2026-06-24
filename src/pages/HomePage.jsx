import Hero from '../components/Hero';
import ScrollBar from '../components/ScrollBar';
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
      <Hero />
      <ScrollBar />
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
