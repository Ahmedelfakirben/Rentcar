import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { FooterLinks } from "@/components/FooterLinks";

export const Route = createFileRoute("/$lang/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <About />
      </main>
      <FooterLinks />
    </div>
  );
}
