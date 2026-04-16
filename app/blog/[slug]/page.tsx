import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import { blogs, getBlogBySlug } from '@/data';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = getBlogBySlug(params.slug);
  
  if (!data) return { title: 'Not Found' };

  return {
    title: data.metaTitle,
    description: data.metaDescription,
    alternates: {
      canonical: `/blog/${data.slug}`
    },
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `https://www.kanikahomeservice.in/blog/${data.slug}`,
      siteName: 'Kanika Home Service',
      images: [
        {
          url: data.heroImage,
          width: 1200,
          height: 630,
        },
      ],
      locale: 'en_IN',
      type: 'article',
      publishedTime: data.date || undefined,
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const data = getBlogBySlug(params.slug);

  if (!data) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data.schema) }}
      />

      <article className="min-h-screen bg-brand-black pb-20">
        {/* Dynamic Hero Section */}
        <div className="relative h-[50vh] md:h-[60vh] w-full flex items-center justify-center overflow-hidden">
          <Image
            src={data.heroImage}
            alt={data.h1}
            fill
            className="object-cover object-center opacity-50"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-brand-black/40 to-brand-black"></div>
          
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
            <h1 className="text-3xl md:text-5xl font-serif text-brand-gold font-bold tracking-wide mb-4 leading-tight">
              {data.h1}
            </h1>
            <div className="flex items-center justify-center gap-4 text-gray-400 font-light text-sm tracking-wide">
               <span>Published: {data.date ? new Date(data.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }) : 'Recently'}</span>
               <span className="w-1.5 h-1.5 bg-brand-burgundy rounded-full"></span>
               <span>VIP Lifestyle</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <section className="pt-16">
          <div className="container mx-auto px-4 md:px-8 max-w-3xl">
            <div 
              className="prose prose-invert prose-lg max-w-none text-gray-300 space-y-6 
                         prose-h2:text-3xl prose-h2:font-serif prose-h2:text-brand-gold prose-h2:mt-12 prose-h2:mb-6
                         prose-h3:text-2xl prose-h3:font-serif prose-h3:text-white prose-h3:mt-8 prose-h3:mb-4
                         prose-p:leading-relaxed prose-p:font-light
                         prose-a:text-brand-gold prose-a:no-underline hover:prose-a:underline hover:prose-a:text-[#f7e18b]
                         prose-strong:text-white prose-strong:font-medium"
              dangerouslySetInnerHTML={{ __html: data.content }}
            />
          </div>
        </section>

        {/* Call to action */}
        <section className="mt-20">
           <div className="container mx-auto max-w-3xl px-4">
              <div className="bg-gradient-to-r from-[#0a0a0a] via-[#120005] to-[#0a0a0a] border border-brand-burgundy/30 rounded-xl p-8 md:p-12 text-center shadow-2xl">
                 <h3 className="text-2xl font-serif text-brand-gold mb-4">Ready to Elevate Your Experience?</h3>
                 <p className="text-gray-400 mb-8 font-light">Contact our dedicated concierge today to secure the finest elite entertainment in Delhi NCR.</p>
                 <a href="tel:7303405072" className="inline-block bg-brand-burgundy hover:bg-red-900 text-white font-medium px-8 py-3 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(90,0,26,0.5)] tracking-wide uppercase">
                    Connect Now
                 </a>
              </div>
           </div>
        </section>
      </article>
    </>
  );
}
