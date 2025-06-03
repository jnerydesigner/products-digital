import { PlanGrid } from "@/components/planGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hospedagem de Sites KVS | Planos com Desconto Especial",
  description:
    "Conheça os melhores planos de hospedagem da Hostinger com suporte, performance e preço acessível. Ideal para desenvolvedores, freelancers e criadores de conteúdo.",
  keywords: [
    "hospedagem de sites",
    "hostinger planos",
    "desconto hostinger",
    "hospedagem barata",
    "melhor hospedagem 2025",
    "plano de hospedagem para desenvolvedores",
    "hospedagem WordPress",
    "hostinger Brasil",
  ],
  openGraph: {
    title: "Hospedagem de Sites KVS",
    description:
      "Veja os planos recomendados da Hostinger para colocar seu projeto no ar com alta performance e preço justo.",
    url: `${process.env.NEXT_PUBLIC_PAGE_URL}/hostinger`,
    siteName: "Jander Nery Dev",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_PAGE_URL}/logo-jander-nery-dev-redondo.svg`,
        width: 1200,
        height: 630,
        alt: "Planos Hostinger com desconto para devs",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hospedagem de Sites KVS",
    description:
      "Planos de hospedagem acessíveis e confiáveis com suporte para desenvolvedores e empreendedores.",
    images: [
      `${process.env.NEXT_PUBLIC_PAGE_URL}/logo-jander-nery-dev-redondo.svg`,
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_PAGE_URL}/hostinger`,
  },
};

export default function HostingerSite() {
  return (
    <>
      <PlanGrid />
    </>
  );
}
