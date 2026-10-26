import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Kanika Home Service | Premium Call Girls Agency Delhi NCR',
  description: 'Kanika Home Service is Delhi NCR\'s most trusted premium call girls agency — hand-picked companions, absolute discretion, and 24/7 availability across Noida, Ghaziabad & Vasundhara.',
  alternates: {
    canonical: 'https://www.kanikahomeservice.in/about',
  },
  openGraph: {
    title: 'About Kanika Home Service | Premium Call Girls Agency Delhi NCR',
    description: 'Kanika Home Service is Delhi NCR\'s most trusted premium call girls agency — hand-picked companions, absolute discretion, and 24/7 availability.',
    url: 'https://www.kanikahomeservice.in/about',
    images: [{ url: 'https://www.kanikahomeservice.in/images/home1.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Kanika Home Service | Premium Call Girls Agency Delhi NCR',
    images: ['https://www.kanikahomeservice.in/images/home1.png'],
  },
};

export default function AboutPage() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Kanika Home Service",
    url: "https://www.kanikahomeservice.in",
    logo: "https://www.kanikahomeservice.in/logo.png",
    telephone: "+917303405072",
    email: "contact@kanikahomeservice.in",
    areaServed: ["Vasundhara", "Vaishali", "Noida", "Ghaziabad", "Raj Nagar", "Kaushambi", "Mohan Nagar"],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+917303405072",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["Hindi", "English"],
    },
    sameAs: ["https://wa.me/917303405072"],
  };

  return (
    <article className="min-h-screen bg-brand-black pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      {/* Hero */}
      <div className="relative h-[40vh] w-full flex items-center justify-center">
         <Image src="/images/girl6.jpeg" alt="About Kanika Escort Service" fill className="object-cover opacity-60" priority />
         <div className="absolute inset-0 bg-brand-black/50"></div>
         <h1 className="relative z-10 text-4xl md:text-6xl font-serif text-brand-gold font-bold">About Our Agency</h1>
      </div>

      <div className="container mx-auto px-4 max-w-4xl mt-16 text-gray-300 space-y-8 prose prose-invert prose-lg">
         <p className="text-xl font-light leading-relaxed">
            Kanika Home Service was founded on a singular principle: high-net-worth individuals and distinguished gentlemen require an echelon of entertainment that standard agencies simply cannot provide. We are not just an entertainment agency; we are purveyors of luxury, curators of passion, and sworn protectors of absolute privacy.
         </p>
         <h2 className="text-3xl text-brand-gold font-serif mt-12 mb-4">Our Philosophy</h2>
         <p className="font-light leading-relaxed">
            We believe that every elite event should be an unforgettable, cinematic experience. Whether it is a massively opulent bachelor party in a sprawling Ghaziabad farmhouse or a discreet, closed-door VIP rendezvous in Noida, the quality of the performers sets the absolute tone. We strictly vet our Escorts not only for their breathtaking physical beauty and choreographic skill but for their fierce intelligence, elegance, and understanding of elite etiquette.
         </p>
         <h2 className="text-3xl text-brand-gold font-serif mt-12 mb-4">Uncompromising Discretion</h2>
         <p className="font-light leading-relaxed">
            Our clientele includes some of the most influential figures in Delhi NCR. Consequently, confidentiality is not a feature of our service—it is the foundation. Our booking processes are highly encrypted, and our performers act with the utmost discretion upon arrival and departure. You can trust us completely with your reputation.
         </p>

         <div className="text-center mt-16 pt-16 border-t border-brand-burgundy/30">
             <Link href="/" className="text-brand-gold hover:text-white uppercase tracking-widest text-sm font-semibold transition">
                Return to Home
             </Link>
         </div>
      </div>
    </article>
  );
}
