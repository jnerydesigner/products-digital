import { PlanGithub } from "@/components/planGithub";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Otimização de Perfil no LinkedIn | Impulsione Sua Carreira Dev",
  description:
    "Aprenda a destacar seu perfil no LinkedIn, gerar oportunidades e conquistar vagas na área de tecnologia. Dicas práticas para devs e profissionais de TI.",
  keywords: [
    "linkedin para desenvolvedores",
    "otimizar perfil linkedin",
    "perfil profissional tech",
    "carreira em tecnologia",
    "linkedin dev",
    "como melhorar o linkedin",
    "branding pessoal para programadores",
    "linkedin programador",
  ],
  openGraph: {
    title: "Otimização de Perfil no LinkedIn",
    description:
      "Aumente sua visibilidade no LinkedIn com dicas de posicionamento, networking e autoridade na comunidade dev.",
    url: `${process.env.NEXT_PUBLIC_PAGE_URL}/linkedin`,
    siteName: "Jander Nery Dev",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_PAGE_URL}/logo-jander-nery-dev-redondo.svg`,
        width: 1200,
        height: 630,
        alt: "LinkedIn para desenvolvedores",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Otimização de Perfil no LinkedIn | Devs em Destaque",
    description:
      "Melhore sua presença no LinkedIn e gere mais oportunidades na área de tecnologia.",
    images: [
      `${process.env.NEXT_PUBLIC_PAGE_URL}/logo-jander-nery-dev-redondo.svg`,
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_PAGE_URL}/linkedin`,
  },
};

export default function Linkedin() {
  return (
    <>
      <div className="md:max-w-5xl md:mx-auto p-6 flex justify-center items-center md:flex-row">
        <PlanGithub />
      </div>
    </>
  );
}
