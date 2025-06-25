import CardsSection from "@/components/card-section";
import SocialMedias from "@/components/socialMedias";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Consultoria Jander Nery | Apoio Técnico e Estratégico para Devs",
    template: "%s | Consultoria Jander Nery",
  },
  description:
    "Consultoria especializada para desenvolvedores: mentoria técnica, carreira, arquitetura de software, produtividade e muito mais com Jander Nery.",
  keywords: [
    "consultoria para desenvolvedores",
    "mentoria para programadores",
    "jander nery",
    "carreira tech",
    "desenvolvedor backend",
    "frontend dev",
    "consultor de software",
    "ajuda para devs",
  ],
  openGraph: {
    title: "Consultoria Jander Nery | Mentoria para Desenvolvedores",
    description:
      "Receba orientação estratégica e técnica com quem entende do mercado dev. Potencialize sua carreira!",
    url: `${process.env.NEXT_PUBLIC_PAGE_URL}/`,
    siteName: "Consultoria Jander Nery",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_PAGE_URL}/logo-jander-nery-dev-redondo.svg`,
        width: 1200,
        height: 630,
        alt: "Consultoria Jander Nery para devs",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Consultoria Jander Nery | Para Devs em Evolução",
    description:
      "Impulsione sua carreira em tecnologia com acompanhamento personalizado e foco em resultados.",
    images: [
      `${process.env.NEXT_PUBLIC_PAGE_URL}/logo-jander-nery-dev-redondo.svg`,
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_PAGE_URL}/`,
  },
};

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col">
      <SocialMedias />
      <CardsSection />
    </div>
  );
}
