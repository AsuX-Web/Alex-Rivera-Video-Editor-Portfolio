import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { WorkShowcase } from "@/components/sections/work-showcase";
import { Stats } from "@/components/sections/stats";
import { Testimonials } from "@/components/sections/testimonials";
import { FeaturedVideo } from "@/components/sections/featured-video";
import { Features } from "@/components/sections/features";
import { Process } from "@/components/sections/process";
import { TrustedBy } from "@/components/sections/trusted-by";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WorkShowcase />
        <Stats />
        <Testimonials />
        <FeaturedVideo />
        <Features />
        <Process />
        <TrustedBy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
