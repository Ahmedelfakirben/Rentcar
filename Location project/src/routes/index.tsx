import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Cars } from "@/components/sections/Cars";
import { Offers } from "@/components/sections/Offers";
import { Location } from "@/components/sections/Location";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Cars />
        <Offers />
        <Location />
        <Contact />
      </main>
    </div>
  );
}
