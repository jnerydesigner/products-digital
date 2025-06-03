export const Seo: SeoType[] = [
  {
    titleReading: "Mentoria para lhe auxiliar em seus estudos",
    name: "consult",
    viewport: true,
    charSet: "UTF-8",
    canonical: "canonical",
    metaName: "description",
    href: "/consult",
    title: "Mentoria para o crescimento profissional",
    content:
      "Página para contratar uma consultoria especializada de Jander Nery Dev, focada em soluções inovadoras, desenvolvimento de software e otimização de processos tecnológicos.",
  },
];

export type SeoType = {
  titleReading: string;
  name: string;
  title: string;
  canonical: string;
  metaName: string;
  content: string;
  href: string;
  viewport: boolean;
  charSet: string;
};
