import HeroSection from "@/components/HeroSection";
import FeaturedCourses from '../components/FeaturedCourses';
import WhyChoosUs from "@/components/WhyChoosUs";
import MusicSchoolTestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import Instructors from "@/components/Instructors";

export default function Home() {
  return (
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <HeroSection/>
        <FeaturedCourses/>
        <WhyChoosUs/>
        <MusicSchoolTestimonialCards/>
        <UpcomingWebinar/>
        <Instructors/>
      </main>
  );
}
