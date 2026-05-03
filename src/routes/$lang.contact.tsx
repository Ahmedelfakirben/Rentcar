import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/sections/Contact";
import { Location } from "@/components/sections/Location";
import { FooterLinks } from "@/components/FooterLinks";

export const Route = createFileRoute("/$lang/contact")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Contact />
        <Location />
      </main>
      <FooterLinks />
    </div>
  );
}
