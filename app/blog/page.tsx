import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { blogs } from '@/data';

export const metadata: Metadata = {
  title: 'Luxury Lifestyle Blog | Kanika Elite',
  description: 'Read the latest updates, guides, and thoughts on luxury entertainment, elite private parties, and VIP lifestyles across Delhi NCR.',
};

export default function BlogIndex() {
  return (
    <article className="min-h-screen bg-brand-black pb-24">
      <div className="relative h-[40vh] w-full flex flex-col items-center justify-center bg-gradient-to-b from-[#110005] to-brand-black">
         <h1 className="text-4xl md:text-6xl font-serif text-brand-gold font-bold mb-4">Luxury Insights</h1>
         <p className="text-gray-400 font-light max-w-2xl text-center px-4">Guides, event ideas, and luxury aesthetics from the Kanika Elite team.</p>
      </div>

      <div className="container mx-auto px-4 max-w-5xl mt-12">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogs.map((blog) => (
               <Link href={`/blog/${blog.slug}`} key={blog.id} className="group block bg-[#0a0a0a] border border-brand-burgundy/20 rounded-xl overflow-hidden hover:border-brand-gold/50 transition duration-500 shadow-xl">
                  <div className="relative h-64 w-full overflow-hidden">
                     <Image src={blog.heroImage} alt={blog.title} fill className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                  </div>
                  <div className="p-6">
                     <div className="text-xs text-brand-gold mb-3 uppercase tracking-widest">
                        {blog.date ? new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : 'Recently Published'}
                     </div>
                     <h2 className="text-2xl font-serif text-gray-200 group-hover:text-brand-gold transition duration-300 mb-3 line-clamp-2">{blog.h1}</h2>
                     <p className="text-gray-400 font-light line-clamp-3 mb-6">{blog.metaDescription}</p>
                     <span className="text-sm border-b border-brand-gold text-brand-gold pb-1 font-semibold uppercase tracking-wide">Read Article</span>
                  </div>
               </Link>
            ))}
         </div>
      </div>
    </article>
  );
}
