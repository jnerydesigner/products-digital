import { BreadCrumbApp } from "@/components/breadCrumbApp";
import { PlanPix } from "@/components/planPix";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ajude o Canal a Crescer | Apoie com PIX",
  description:
    "Contribua com o crescimento do canal e incentive a produção de conteúdos educativos para desenvolvedores. Faça parte dessa jornada!",
  keywords: [
    "ajuda canal dev",
    "contribuição com pix",
    "apoio canal youtube",
    "doação para criador de conteúdo",
    "ajudar criadores tech",
    "contribuir com desenvolvedor",
    "incentivo produção de conteúdo",
    "pix para canal dev",
  ],
  openGraph: {
    title: "Ajude o Canal a Crescer | Apoie com PIX",
    description:
      "Sua contribuição faz a diferença! Ajude o canal a produzir mais conteúdos para devs com uma doação via PIX.",
    url: `${process.env.NEXT_PUBLIC_PAGE_URL}/pix`,
    siteName: "Jander Nery Dev",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_PAGE_URL}/logo-jander-nery-dev-redondo.svg`,
        width: 1200,
        height: 630,
        alt: "Apoie o canal com PIX",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ajude o Canal a Crescer | PIX para Desenvolvedores",
    description:
      "Contribua com o projeto e incentive a criação de conteúdos de qualidade para a comunidade dev.",
    images: [
      `${process.env.NEXT_PUBLIC_PAGE_URL}/logo-jander-nery-dev-redondo.svg`,
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_PAGE_URL}/pix`,
  },
};

export default function Pix() {
  return (
    <>
      <main className="max-w-5xl mx-auto p-6 flex justify-center items-center flex-col">
        <BreadCrumbApp name="Ajude o Canal" page="/pix" />
        <PlanPix />
      </main>
    </>
  );
}
