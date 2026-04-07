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
        {
          name: "Home",
          id: "home",
        },
        {
          name: "Story",
          id: "about",
        },
        {
          name: "Collection",
          id: "collection",
        },
        {
          name: "Visit Us",
          id: "contact",
        },
      ]}
      brandName="Butik Aleta"
    />
  </div>

  <div id="home" data-section="home">
      <HeroSplitDualMedia
      background={{
        variant: "radial-gradient",
      }}
      title="Clothing You Won’t Find Anywhere Else"
      description="Carefully selected pieces in beautiful materials, colors, and silhouettes. Curated with care for women who want something no one else has."
      tag="Luxury Boutique"
      buttons={[
        {
          text: "Discover Collection",
          href: "#collection",
        },
        {
          text: "Visit Boutique",
          href: "#contact",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/pretty-young-woman-with-wet-hair-posing-studio-wearing-black-oversize-blazer-shiny-necklace_343596-7120.jpg",
          imageAlt: "Luxury fashion editorial 1",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/pretty-young-woman-with-wet-hair-posing-studio-wearing-black-oversize-blazer-shiny-necklace_343596-7120.jpg",
          imageAlt: "Luxury fashion editorial 2",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/pretty-young-woman-with-wet-hair-posing-studio-wearing-black-oversize-blazer-shiny-necklace_343596-7120.jpg",
          imageAlt: "Luxury fashion editorial 3",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/pretty-young-woman-with-wet-hair-posing-studio-wearing-black-oversize-blazer-shiny-necklace_343596-7120.jpg",
          imageAlt: "Luxury fashion editorial 4",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/pretty-young-woman-with-wet-hair-posing-studio-wearing-black-oversize-blazer-shiny-necklace_343596-7120.jpg",
          imageAlt: "Luxury fashion editorial 5",
        },
      ]}
      mediaAnimation="blur-reveal"
      rating={5}
      ratingText="Loved by our local community"
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="Our Story"
      title="A Personal Boutique"
      description="Butik Aleta is built on a love for unique clothing and thoughtful details. Each piece is carefully chosen for its quality, texture, and expression."
      subdescription="Curated with care by Frida."
      imageSrc="http://img.b2bpic.net/free-photo/woman-working-with-dried-flowers_52683-91337.jpg"
      imageAlt="Boutique interior details"
      icon={Sparkles}
    />
  </div>

  <div id="collection" data-section="collection">
      <FeatureCardEight
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          title: "Unique Pieces",
          description: "Styles you won’t see everywhere else.",
          imageSrc: "http://img.b2bpic.net/free-photo/vertical-closeup-shot-female-wearing-brown-dress-metallic-leaf-shaped-ring_181624-23911.jpg",
        },
        {
          title: "Quality Materials",
          description: "Fabrics that feel as good as they look.",
          imageSrc: "http://img.b2bpic.net/free-photo/trendy-color-swatches-with-different-elements_23-2150169906.jpg",
        },
        {
          title: "Colors & Textures",
          description: "Carefully selected tones, prints, and details.",
          imageSrc: "http://img.b2bpic.net/free-photo/view-hawaiian-shirts-with-floral-print_23-2149366022.jpg",
        },
      ]}
      title="The Collection"
      description="Discover pieces curated for those who value individuality and quality."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Mette H.",
          handle: "@metteh",
          testimonial: "Beautiful, unique quality pieces ❤️",
          imageSrc: "http://img.b2bpic.net/free-photo/pretty-young-woman-with-wet-hair-posing-studio-wearing-black-oversize-blazer-shiny-necklace_343596-7120.jpg",
          imageAlt: "minimal luxury fashion woman editorial",
        },
        {
          id: "2",
          name: "Sofie L.",
          handle: "@sofiel",
          testimonial: "Clothes in lovely materials and stunning colors and patterns.",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-working-with-dried-flowers_52683-91337.jpg",
          imageAlt: "curated boutique interior luxury detail",
        },
        {
          id: "3",
          name: "Anne K.",
          handle: "@annek",
          testimonial: "A cozy shop with great service and atmosphere.",
          imageSrc: "http://img.b2bpic.net/free-photo/vertical-closeup-shot-female-wearing-brown-dress-metallic-leaf-shaped-ring_181624-23911.jpg",
          imageAlt: "unique clothing piece detail fabric",
        },
        {
          id: "4",
          name: "Pernille V.",
          handle: "@pernille",
          testimonial: "Finally a boutique in Aalborg with soul.",
          imageSrc: "http://img.b2bpic.net/free-photo/trendy-color-swatches-with-different-elements_23-2150169906.jpg",
          imageAlt: "curated color palette fashion tones",
        },
        {
          id: "5",
          name: "Christina B.",
          handle: "@cb",
          testimonial: "The best selection of unique designs.",
          imageSrc: "http://img.b2bpic.net/free-photo/view-hawaiian-shirts-with-floral-print_23-2149366022.jpg",
          imageAlt: "artisan clothing print detail",
        },
      ]}
      title="Words from our clients"
      description="Why our community loves Butik Aleta."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      tag="Visit Us"
      title="Visit Butik Aleta"
      description="Danmarksgade 35b, 9000 Aalborg. Come visit us for a calm, welcoming experience where you can explore our curated selection at your own pace."
      imageSrc="http://img.b2bpic.net/free-photo/business-woman-leather-skirt-talking-phone_158595-929.jpg"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Shop",
              href: "#collection",
            },
            {
              label: "About",
              href: "#about",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          items: [
            {
              label: "Instagram",
              href: "#",
            },
            {
              label: "Facebook",
              href: "#",
            },
            {
              label: "Privacy Policy",
              href: "#",
            },
          ],
        },
      ]}
      logoText="Butik Aleta"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
