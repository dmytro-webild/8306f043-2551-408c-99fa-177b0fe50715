"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import { Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="reveal-blur"
        borderRadius="rounded"
        contentWidth="smallMedium"
        sizing="mediumLargeSizeMediumTitles"
        background="aurora"
        cardStyle="layered-gradient"
        primaryButtonStyle="flat"
        secondaryButtonStyle="glass"
        headingFontWeight="extrabold"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarStyleFullscreen
            navItems={[
              { name: "Forside", id: "home" },
              { name: "Historie", id: "about" },
              { name: "Kollektion", id: "collection" },
              { name: "Besøg os", id: "contact" },
            ]}
            brandName="Butik Aleta"
          />
        </div>

        <div id="home" data-section="home">
          <HeroSplitDualMedia
            background={{ variant: "radial-gradient" }}
            title="Tøj du ikke finder andre steder"
            description="Nøje udvalgte styles i smukke materialer, farver og silhuetter. Kurateret med kærlighed til kvinder, der ønsker noget unikt."
            tag="Luksus Boutique"
            buttons={[
              { text: "Se kollektionen", href: "#collection" },
              { text: "Besøg butikken", href: "#contact" },
            ]}
            mediaItems={[
              {
                imageSrc: "http://img.b2bpic.net/free-photo/pretty-young-woman-with-wet-hair-posing-studio-wearing-black-oversize-blazer-shiny-necklace_343596-7120.jpg?_wi=1",                imageAlt: "Luksus mode editorial 1"},
              {
                imageSrc: "http://img.b2bpic.net/free-photo/pretty-young-woman-with-wet-hair-posing-studio-wearing-black-oversize-blazer-shiny-necklace_343596-7120.jpg?_wi=2",                imageAlt: "Luksus mode editorial 2"}
            ]}
            mediaAnimation="blur-reveal"
            rating={5}
            ratingText="Elsket af vores lokale community"
          />
        </div>

        <div id="about" data-section="about">
          <TestimonialAboutCard
            useInvertedBackground={false}
            tag="Vores historie"
            title="En personlig boutique"
            description="Butik Aleta er bygget på kærligheden til unikt tøj og gennemtænkte detaljer. Hver style er nøje udvalgt for sin kvalitet, tekstur og udtryk."
            subdescription="Kurateret med kærlighed af Frida."
            imageSrc="http://img.b2bpic.net/free-photo/woman-working-with-dried-flowers_52683-91337.jpg?_wi=1"
            imageAlt="Boutique interiør detaljer"
            icon={Sparkles}
          />
        </div>

        <div id="collection" data-section="collection">
          <FeatureCardEight
            textboxLayout="split"
            useInvertedBackground={true}
            buttons={[{ text: "Se hele udvalget", href: "#contact" }]}
            features={[
              {
                title: "Unikke styles",                description: "Styles du ikke ser alle andre steder.",                imageSrc: "http://img.b2bpic.net/free-photo/vertical-closeup-shot-female-wearing-brown-dress-metallic-leaf-shaped-ring_181624-23911.jpg?_wi=1"},
              {
                title: "Kvalitetsmaterialer",                description: "Tekstiler der føles lige så gode, som de ser ud.",                imageSrc: "http://img.b2bpic.net/free-photo/trendy-color-swatches-with-different-elements_23-2150169906.jpg?_wi=1"},
              {
                title: "Farver & teksturer",                description: "Nøje udvalgte nuancer, prints og detaljer.",                imageSrc: "http://img.b2bpic.net/free-photo/view-hawaiian-shirts-with-floral-print_23-2149366022.jpg?_wi=1"},
            ]}
            title="Kollektionen"
            description="Find styles der fremhæver din personlighed og sikrer høj kvalitet."
          />
        </div>

        <div id="testimonials" data-section="testimonials">
          <TestimonialCardSix
            animationType="slide-up"
            textboxLayout="default"
            useInvertedBackground={false}
            testimonials={[
              { id: "1", name: "Mette H.", handle: "@metteh", testimonial: "Smukke, unikke kvalitetsprodukter ❤️", imageSrc: "http://img.b2bpic.net/free-photo/pretty-young-woman-with-wet-hair-posing-studio-wearing-black-oversize-blazer-shiny-necklace_343596-7120.jpg?_wi=3", imageAlt: "minimalistisk luksus mode kvinde" },
              { id: "2", name: "Sofie L.", handle: "@sofiel", testimonial: "Tøj i lækre materialer og fantastiske farver og mønstre.", imageSrc: "http://img.b2bpic.net/free-photo/woman-working-with-dried-flowers_52683-91337.jpg?_wi=2", imageAlt: "kurateret boutique interiør luksus detalje" },
              { id: "3", name: "Anne K.", handle: "@annek", testimonial: "En hyggelig butik med fantastisk service og atmosfære.", imageSrc: "http://img.b2bpic.net/free-photo/vertical-closeup-shot-female-wearing-brown-dress-metallic-leaf-shaped-ring_181624-23911.jpg?_wi=2", imageAlt: "unik beklædnings detalje" },
              { id: "4", name: "Pernille V.", handle: "@pernille", testimonial: "Endelig en boutique i Aalborg med sjæl.", imageSrc: "http://img.b2bpic.net/free-photo/trendy-color-swatches-with-different-elements_23-2150169906.jpg?_wi=2", imageAlt: "kurateret farvepalette mode" },
              { id: "5", name: "Christina B.", handle: "@cb", testimonial: "Det bedste udvalg af unikke designs.", imageSrc: "http://img.b2bpic.net/free-photo/view-hawaiian-shirts-with-floral-print_23-2149366022.jpg?_wi=2", imageAlt: "artisan tøj print detalje" },
            ]}
            title="Ord fra vores kunder"
            description="Hvorfor vores community elsker Butik Aleta."
          />
        </div>

        <div id="contact" data-section="contact">
          <ContactSplit
            useInvertedBackground={true}
            background={{ variant: "plain" }}
            tag="Besøg os"
            title="Besøg Butik Aleta"
            description="Danmarksgade 35b, 9000 Aalborg. Kom og besøg os til en rolig, imødekommende oplevelse, hvor du kan udforske vores udvalg i dit eget tempo. Åbningstider: Man-Fre 10-17."
            imageSrc="http://img.b2bpic.net/free-photo/business-woman-leather-skirt-talking-phone_158595-929.jpg"
            mediaAnimation="slide-up"
            buttonText="Hør mere"
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterLogoEmphasis
            columns={[
              { items: [{ label: "Butik", href: "#collection" }, { label: "Om os", href: "#about" }, { label: "Kontakt", href: "#contact" }] },
              { items: [{ label: "Instagram", href: "https://www.instagram.com/butik.aleta/" }, { label: "Facebook", href: "#" }, { label: "Privatlivspolitik", href: "#" }] },
            ]}
            logoText="Butik Aleta"
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
