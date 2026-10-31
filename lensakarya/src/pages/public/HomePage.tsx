import HeroSection from '../../components/home/HeroSection'
import MarqueeStrip from '../../components/home/MarqueeStrip'
import AboutSection from '../../components/home/AboutSection'
import CategorySection from '../../components/home/CategorySection'
import GallerySection from '../../components/home/GallerySection'
import PackageSection from '../../components/home/PackageSection'
import PhotographerSection from '../../components/home/PhotographerSection'
import ProcessSection from '../../components/home/ProcessSection'
import TestimonialSection from '../../components/home/TestimonialSection'
import ContactSection from '../../components/home/ContactSection'
import CtaSection from '../../components/home/CtaSection'

export default function HomePage() {
  return (
    <div className="relative">
      <HeroSection />
      <MarqueeStrip />
      <AboutSection />
      <CategorySection />
      <GallerySection />
      <PackageSection />
      <PhotographerSection />
      <ProcessSection />
      <TestimonialSection />
      <ContactSection />
      <CtaSection />
    </div>
  )
}

