import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { DM_Sans } from "next/font/google";
import { Inter_Tight } from "next/font/google";



export const metadata: Metadata = {
  title: 'Butik Aleta | Curated Scandinavian Fashion',
  description: 'Discover Butik Aleta in Aalborg. A curated boutique for women looking for unique clothing, high-quality materials, and a personal shopping experience.',
  openGraph: {
    "title": "Butik Aleta | Curated Scandinavian Fashion",
    "description": "Discover Butik Aleta in Aalborg.",
    "siteName": "Butik Aleta",
    "type": "website"
  },
};


const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${interTight.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
