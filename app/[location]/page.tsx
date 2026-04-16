import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Shield, MessageCircle } from 'lucide-react';
import { locations, getLocationBySlug } from '@/data';
import LeadCapture from '@/components/LeadCapture';

interface Props {
  params: {
    location: string;
  };
}

export async function generateStaticParams() {
  return locations.map((loc) => ({
    location: loc.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = getLocationBySlug(params.location);
  
  if (!data) return { title: 'Not Found' };

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: `/${data.slug}`
    },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `https://kanikahomeservice.in/${data.slug}`,
      siteName: 'Kanika Home Service',
      images: [
        {
          url: data.heroImage,
          width: 1200,
          height: 630,
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
  };
}

export default function LocationPage({ params }: Props) {
  const data = getLocationBySlug(params.location);

  if (!data) {
    notFound();
  }

  // Generate structured data
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: data.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const otherLocations = locations.filter(loc => loc.slug !== params.location);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data.schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="min-h-screen bg-brand-black">
        {/* Dynamic Hero Section - Updated with Premium Styling */}
        <section className="relative h-[75vh] md:h-[85vh] w-full flex items-center justify-center overflow-hidden border-b border-brand-burgundy/20">
          <div className="absolute inset-0 z-0">
            {data.heroVideo ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src={data.heroVideo} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={data.heroImage}
                alt={`Call girl in ${data.title}`}
                fill
                className="object-cover object-top"
                priority
              />
            )}
            
            {/* Soft Lighting Overlay - as requested: blur & soft lighting, not dark */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-[2px] z-10"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-brand-black/20 z-20"></div>
            
            {/* Ambient light glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/5 rounded-full blur-[120px] z-15 pointer-events-none"></div>
          </div>
          
          <div className="relative z-30 text-center px-4 max-w-5xl mx-auto mt-20">
            <span className="text-brand-gold text-sm tracking-[0.3em] uppercase mb-6 block flex items-center justify-center gap-3 font-medium opacity-0 animate-fade-in-up">
              <div className="w-8 h-px bg-brand-gold"></div>
              <MapPin size={16} className="text-brand-gold" /> Exclusive to {data.title.split(' in ')[1] || data.id}
              <div className="w-8 h-px bg-brand-gold"></div>
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-[1.1] drop-shadow-[0_4px_15px_rgba(0,0,0,0.5)] opacity-0 animate-fade-in-up animation-delay-300">
              {data.h1}
            </h1>
            
            {data.subtext && (
              <p className="text-xl md:text-2xl text-gray-200 font-light mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] opacity-0 animate-fade-in-up animation-delay-600">
                {data.subtext}
              </p>
            )}

            <div className="flex flex-col sm:flex-row justify-center gap-6 opacity-0 animate-fade-in-up animation-delay-900">
               <a href="tel:7303405072" className="bg-brand-burgundy hover:bg-red-900 text-white font-semibold px-10 py-5 rounded-full transition-all duration-500 shadow-[0_10px_30px_rgba(90,0,26,0.5)] active:scale-95 text-lg tracking-widest uppercase flex items-center justify-center gap-3">
                 <Phone size={22} /> Call Now
               </a>
               <a href="https://wa.me/917303405072" className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-semibold px-10 py-5 rounded-full transition-all duration-500 shadow-xl active:scale-95 text-lg tracking-widest uppercase flex items-center justify-center gap-3">
                 <MessageCircle size={22} className="text-green-400" /> WhatsApp Booking
               </a>
            </div>
          </div>
        </section>

        {/* Content Section & Sidebar */}
        <section className="py-24 bg-brand-black">
          <div className="container mx-auto px-4 md:px-8 max-w-7xl">
            <div className="flex flex-col lg:flex-row gap-20">
              
              {/* Main content */}
              <div className="lg:w-2/3">
                <div 
                  className="prose prose-invert prose-xl max-w-none text-gray-300 
                             prose-h2:text-4xl prose-h2:font-serif prose-h2:text-brand-gold prose-h2:mt-16 prose-h2:mb-8 prose-h2:tracking-wide
                             prose-p:leading-relaxed prose-p:font-light prose-p:mb-8
                             prose-ul:list-none prose-ul:pl-0 prose-ul:space-y-6
                             prose-li:flex prose-li:items-start prose-li:gap-4
                             prose-li:before:content-['\2713'] prose-li:before:text-brand-gold prose-li:before:font-bold prose-li:before:mt-1
                             prose-strong:text-brand-gold prose-strong:font-semibold"
                  dangerouslySetInnerHTML={{ __html: data.content }}
                />

                {/* Optional Image Gallery Section */}
                {data.galleryImages && (
                  <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {data.galleryImages.map((img: any, idx: number) => (
                      <div key={idx} className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl group border border-white/5">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Optional Video Block Section */}
                {data.sectionVideo && (
                  <div className="mt-20 rounded-3xl overflow-hidden border border-brand-burgundy/30 shadow-[0_0_50px_rgba(90,0,26,0.2)]">
                    <video
                      autoPlay
                      loop
                      muted
                      controls
                      playsInline
                      className="w-full aspect-video object-cover"
                    >
                      <source src={data.sectionVideo} type="video/mp4" />
                    </video>
                  </div>
                )}

                {/* FAQ Section */}
                <div className="mt-24 pt-20 border-t border-gray-800/50">
                  <h2 className="text-4xl md:text-5xl font-serif text-white mb-16 tracking-wide">
                    Common <span className="text-brand-gold italic">Enquiries</span>
                  </h2>
                  <div className="space-y-8">
                    {data.faqs.map((faq, index) => (
                      <div key={index} className="bg-[#0c0c0c] border border-gray-800/60 rounded-2xl p-8 hover:border-brand-burgundy/40 transition-all duration-500 group">
                        <h3 className="text-xl md:text-2xl text-brand-gold font-medium mb-4 flex items-center gap-4">
                          <span className="w-8 h-px bg-brand-burgundy/50 group-hover:w-12 transition-all"></span>
                          {faq.question}
                        </h3>
                        <p className="text-gray-400 font-light leading-loose text-lg pl-12">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:w-1/3">
                <div className="sticky top-32 space-y-12">
                  <div className="transform hover:scale-[1.02] transition-transform duration-500">
                    <LeadCapture />
                  </div>

                  <div className="bg-gradient-to-br from-gray-900/80 to-brand-black border border-gray-800 p-8 rounded-3xl shadow-xl">
                    <h4 className="text-2xl font-serif text-white mb-6 border-b border-gray-800 pb-4 tracking-wide">Elite Districts</h4>
                    <ul className="space-y-4">
                      {otherLocations.map(loc => (
                        <li key={loc.id}>
                          <Link href={`/${loc.slug}`} className="text-gray-400 hover:text-brand-gold text-lg flex items-center justify-between group transition-all">
                            <span className="font-light tracking-wide">{(loc.title.split(' in ')[1] || loc.id).replace('Ghaziabad', 'Ghaziabad NCR')}</span>
                            <span className="text-brand-burgundy opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all underline underline-offset-8 decoration-1">Visit</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-[#0a0505] border border-brand-burgundy/40 p-10 rounded-3xl text-center relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-burgundy to-transparent opacity-50"></div>
                    <Shield className="text-brand-gold mx-auto w-16 h-16 mb-6 opacity-80 group-hover:scale-110 transition-transform duration-500" />
                    <h4 className="text-white font-serif text-2xl mb-4 tracking-wide">Absolute Privacy</h4>
                    <p className="text-gray-400 text-lg font-light leading-relaxed">
                      We utilize encrypted channels and strict non-disclosure protocols to ensure your safety and total discretion.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </article>
    </>
  );
}
