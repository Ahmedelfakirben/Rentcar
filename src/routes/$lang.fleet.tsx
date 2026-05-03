import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Cars } from "@/components/sections/Cars";
import { Contact } from "@/components/sections/Contact";
import { FooterLinks } from "@/components/FooterLinks";
import { useTranslation } from "@/lib/useTranslation";

export const Route = createFileRoute("/$lang/fleet")({
  component: FleetPage,
});

function FleetPage() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Cars />
      </main>
      <FooterLinks />
    </div>
  );
}
