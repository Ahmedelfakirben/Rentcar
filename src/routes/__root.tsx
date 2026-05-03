import { Outlet, Link, createRootRoute, HeadContent, Scripts, useMatch } from "@tanstack/react-router";
import { translations, defaultLang, type Language } from "../lib/translations";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold gradient-orange-text">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page introuvable</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La page que vous cherchez n'existe pas.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-orange-solid">Retour à l'accueil</Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: (ctx) => {
    // We'll handle dynamic head in child routes or use a default here
    return {
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: "2S1M RENT CAR — Location de voitures premium à Tétouan" },
        { name: "description", content: "Agence de location de voitures à Tétouan. Véhicules modernes, fiables et accessibles." },
        { property: "og:type", content: "website" },
      ],
      links: [
        { rel: "stylesheet", href: appCss },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@500;600;700&display=swap" },
      ],
    };
  },
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  // We can't easily get params here, so we rely on child routes setting the lang
  return (
    <html lang="fr" className="dark">
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

import { WhatsAppButton } from "../components/WhatsAppButton";

function RootComponent() {
  return (
    <>
      <Outlet />
      <WhatsAppButton />
    </>
  );
}
