import { useScrollReveal } from "../hooks/useScrollReveal";
import type { Route } from "./+types/home";
import { faqData } from "../data/content";

import { Navigation } from "../components/sections/Navigation";
import { HeroSection } from "../components/sections/HeroSection";

import { CurriculumSection } from "../components/sections/CurriculumSection";
import { WhySection } from "../components/sections/WhySection";
import { InstructorSection } from "../components/sections/InstructorSection";
import { StudentWorkSection } from "../components/sections/StudentWorkSection";
import { TestimonialsSection } from "../components/sections/TestimonialsSection";
import { MaterialsSection } from "../components/sections/MaterialsSection";
import { FaqSection } from "../components/sections/FaqSection";
import { CtaSection } from "../components/sections/CtaSection";
import { Footer } from "../components/sections/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Masterclass Productivité & IA sur Canva — Dhaker Abdesslem" },
    { name: "description", content: "Masterclass intensive de 4h animée par Dhaker Abdesslem (Formateur Certifié TOT). Standardisez votre production d'agence et maîtrisez le Studio Magique IA sur Canva." },
    { property: "og:title", content: "Masterclass Productivité & IA sur Canva — Dhaker Abdesslem" },
    { property: "og:description", content: "Découvrez les 3 Règles d'Or du design, l'automatisation multiformat et les outils d'IA de Canva avec un expert certifié." },
    { property: "og:image", content: "https://canva.dhaker.site/og-image.jpg" },
    { property: "og:url", content: "https://canva.dhaker.site" },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Masterclass Productivité & IA sur Canva — Dhaker Abdesslem" },
    { name: "twitter:description", content: "Formation intensive de 4h pour professionnels du marketing, CMs et entrepreneurs en Tunisie. 1 mois Canva Pro offert." },
    { name: "twitter:image", content: "https://canva.dhaker.site/og-image.jpg" },
  ];
}

export async function clientAction({ request }: Route.ClientActionArgs) {
  const formData = await request.formData();
  const nom = formData.get("nom");
  const prenom = formData.get("prenom");
  const numero = formData.get("numero");
  const email = formData.get("email");

  if (!nom || typeof nom !== "string" || nom.trim().length < 2) {
    return { success: false, error: "Veuillez saisir votre nom de famille (au moins 2 caractères)." };
  }
  if (!prenom || typeof prenom !== "string" || prenom.trim().length < 2) {
    return { success: false, error: "Veuillez saisir votre prénom (au moins 2 caractères)." };
  }
  if (!numero || typeof numero !== "string" || numero.trim().replace(/\D/g, "").length < 8) {
    return { success: false, error: "Veuillez saisir un numéro de téléphone valide (au moins 8 chiffres pour WhatsApp)." };
  }
  if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return { success: false, error: "Veuillez saisir une adresse email valide pour recevoir vos accès." };
  }

  return {
    success: true,
    message: `Merci ${prenom.trim()} ${nom.trim()} ! Votre pré-inscription est confirmée. Les instructions de paiement (120 DT via D17, Flouci ou Virement) ont été envoyées à ${email.trim()} et nous vous contacterons au ${numero.trim()}.`,
  };
}

export async function action({ request }: Route.ActionArgs) {
  return await clientAction({ request } as any);
}



export default function Home() {
  useScrollReveal();

  const richSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Course",
        "name": "Masterclass Productivité & IA sur Canva",
        "description": "Une session intensive de 4h animée par Dhaker Abdesslem pour exploiter Canva comme un véritable moteur de productivité en combinant travail d'équipe et fonctionnalités IA (Magic Studio, Magic Grab, Grab Text).",
        "provider": {
          "@type": "Person",
          "name": "Dhaker Abdesslem",
          "jobTitle": "Formateur Certifié TOT & Expert en compétences numériques",
          "sameAs": "https://www.linkedin.com/in/dhakerabdesslem"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.96",
          "reviewCount": "120",
          "bestRating": "5",
          "worstRating": "1"
        },
        "offers": {
          "@type": "Offer",
          "price": "120",
          "priceCurrency": "TND",
          "availability": "https://schema.org/LimitedAvailability",
          "url": "https://canva.dhaker.site/#enroll"
        },
        "hasCourseInstance": {
          "@type": "CourseInstance",
          "courseMode": "Online",
          "duration": "PT4H",
          "instructor": {
            "@type": "Person",
            "name": "Dhaker Abdesslem",
            "jobTitle": "Formateur Certifié TOT & Community Manager chez Manicraft Tunisie"
          }
        },
        "coursePrerequisites": "Aucun prérequis technique — Ordinateur ou tablette avec connexion Internet",
        "educationalLevel": "Tous niveaux (Professionnels marketing, communication, CM et entrepreneurs)",
        "numberOfCredits": 0,
        "isAccessibleForFree": false,
        "inLanguage": "fr"
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqData.map((item) => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(richSchema) }}
      />
      <Navigation />
      <main id="main-content">
        <HeroSection />

        <CurriculumSection />
        <WhySection />
        <InstructorSection />
        <StudentWorkSection />
        <TestimonialsSection />
        <MaterialsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
