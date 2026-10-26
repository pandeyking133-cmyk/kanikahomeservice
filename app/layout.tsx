import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
// import FloatingButtons from "@/components/FloatingButtons"; // Uncomment when created

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: {
    template: '%s | Kanika Home Service',
    default: 'Premium Call Girls in Delhi NCR | Kanika Home Service',
  },
  description: "Experience the ultimate in premium luxury entertainment across Delhi NCR. Hand-picked Call Girls and VIP companionship.",
  metadataBase: new URL('https://www.kanikahomeservice.in'),
  openGraph: {
    siteName: "Kanika Home Service",
    images: [{ url: "https://www.kanikahomeservice.in/images/home1.png", width: 1200, height: 630, alt: "Kanika Home Service" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.kanikahomeservice.in/images/home1.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-brand-black text-gray-200 overflow-x-hidden min-h-screen flex flex-col antialiased selection:bg-brand-burgundy selection:text-white`}>
        <Navbar />
        <main className="flex-grow pt-24">
          {children}
        </main>
        <Footer />
        {/* <FloatingButtons /> */}
      </body>
    </html>
  );
}
