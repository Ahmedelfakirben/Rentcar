import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Cars } from "@/components/sections/Cars";
import { Offers } from "@/components/sections/Offers";
import { Location } from "@/components/sections/Location";
import { Contact } from "@/components/sections/Contact";
import { FooterLinks } from "@/components/FooterLinks";
import { useTranslation } from "@/lib/useTranslation";

export const Route = createFileRoute("/$lang/")({
  component: Index,
});

function Index() {
  const { lang } = useTranslation();
  
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Cars />
        <Offers />
        <Location />
        <Contact />
      </main>
      <FooterLinks />
    </div>
  );
}
