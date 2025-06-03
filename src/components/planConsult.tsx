import Image from "next/image";
import { BreadCrumbApp } from "./breadCrumbApp";

export const PlanConsult = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <BreadCrumbApp name="Consultoria" page="/consult" />
      <h1 className="text-2xl font-bold text-gray-900 border-b-2 border-blue-500 pb-2">
        Mentoria para você deslanchar nas suas conquistas
      </h1>

      <h2 className="text-xl font-semibold text-blue-600 mt-4">Tecnologias</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {[
          {
            id: 1,
            title: "Node.js",
            desc: "Back-end performático e escalável.",
          },
          {
            id: 2,
            title: "NestJS",
            desc: "APIs robustas e arquitetura modular.",
          },
          { id: 3, title: "Java", desc: "Aplicações robustas com Java 11+." },
          { id: 4, title: "Spring Boot", desc: "Soluções ágeis e seguras." },
        ].map((tech) => (
          <div
            key={tech.id}
            className="p-4 border-l-4 border-blue-500 bg-gray-100 rounded-md"
          >
            <h3 className="font-semibold text-gray-900">{tech.title}</h3>
            <p className="text-gray-700">{tech.desc}</p>
          </div>
        ))}
      </div>

      <h4 className="text-xl font-semibold text-blue-600 mt-6">Serviços</h4>
      <ul className="mt-2 list-disc list-inside text-gray-800">
        <li>Code Review</li>
        <li>Arquitetura de Software</li>
        <li>Mentoria</li>
        <li>Otimização de Performance</li>
        <li>Resolução de Problemas</li>
      </ul>

      <p className="mt-4 text-gray-900">
        Entre em contato e leve seu conhecimento para o próximo nível! 🚀
      </p>
      <div className="w-full h-[140px] flex justify-center items-center">
        <Image
          src="/qrcode_whatsapp.svg"
          alt="WhatsApp de Jander Nery"
          title="WhatsApp de Jander Nery"
          className="h-full"
          width={300}
          height={300}
          loading="eager"
        />
      </div>
    </div>
  );
};
