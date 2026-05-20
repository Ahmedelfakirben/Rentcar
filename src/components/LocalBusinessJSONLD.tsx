import { useTranslation } from "@/lib/useTranslation";

export function LocalBusinessJSONLD() {
  const { lang, t } = useTranslation();
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRental",
    "name": "2S1M RENT CAR",
    "alternateName": ["Rent Car Tetouan", "2S1M Alquiler de Coches"],
    "description": t.description,
    "url": `https://rentcartetouan.ma/${lang}`,
    "telephone": "+212660292821",
    "email": "2s1mrentcartetouan@gmail.com",
    "priceRange": "250DH - 1000DH",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "RUE 14 AV MOHAMED BENOUNA, QUARTIER BOUJARAH",
      "addressLocality": "Tétouan",
      "addressCountry": "MA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 35.5926936,
      "longitude": -5.3507613
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "08:00",
        "closes": "22:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/share/1Gr4GZPhqC/",
      "https://www.instagram.com/tetouanrentcar?igsh=MWJ4c3hlMmx1Nm9ldA=="
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
