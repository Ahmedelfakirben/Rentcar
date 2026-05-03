import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Offers } from "@/components/sections/Offers";
import { Contact } from "@/components/sections/Contact";
import { FooterLinks } from "@/components/FooterLinks";

export const Route = createFileRoute("/$lang/offers")({
  component: OffersPage,
});

function OffersPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Offers />
      </main>
      <FooterLinks />
    </div>
  );
}
