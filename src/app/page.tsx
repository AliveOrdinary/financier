import { FaqSection } from "@/components/landing page/FaqSection";
import { Features } from "@/components/landing page/Features";
import { Footer } from "@/components/landing page/Footer";
import { GetStarted } from "@/components/landing page/GetStarted";
import { HeroSection } from "@/components/landing page/HeroSection";

export default function Home() {
  return (
    <main className="w-full flex justify-start lg:justify-center items-center flex-col ">
      <HeroSection />
      <Features />
      <FaqSection />
      <GetStarted />
      <Footer />
    </main>
  );
}
