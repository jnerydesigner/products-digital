import { PlanGithub } from "@/components/planGithub";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos no GitHub | Portfólio de Jander Nery",
  description:
    "Explore os projetos de Jander Nery no GitHub. Soluções backend com Node.js, NestJS, TypeScript e arquiteturas escaláveis voltadas ao mercado de tecnologia.",
  keywords: [
    "projetos github dev",
    "portfólio backend github",
    "nodejs github",
    "nestjs github",
    "typescript projetos",
    "arquitetura de microsserviços",
    "github jander nery",
    "backend escalável open source",
  ],
  openGraph: {
    title: "Projetos no GitHub | Jander Nery Dev",
    description:
      "Veja projetos com NestJS, TypeScript, Docker e arquiteturas modernas. Código limpo, escalabilidade e boas práticas em destaque.",
    url: `${process.env.NEXT_PUBLIC_PAGE_URL}/github`,
    siteName: "Jander Nery Dev",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_PAGE_URL}/logo-jander-nery-dev-redondo.svg`,
        width: 1200,
        height: 630,
        alt: "Portfólio de projetos no GitHub",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Veja os Projetos de Jander Nery no GitHub",
    description:
      "Conheça soluções em Node.js, NestJS e TypeScript aplicadas no mercado. Portfólio real para desenvolvedores e empresas.",
    images: [
      `${process.env.NEXT_PUBLIC_PAGE_URL}/logo-jander-nery-dev-redondo.svg`,
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_PAGE_URL}/github`,
  },
};

export default function Github() {
  return (
    <>
      <div className="md:max-w-5xl md:mx-auto p-6 flex justify-center items-center md:flex-row">
        <PlanGithub />
      </div>
    </>
  );
}
