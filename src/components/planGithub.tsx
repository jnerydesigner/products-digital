import Image from "next/image";
import Link from "next/link";
import { BreadCrumbApp } from "./breadCrumbApp";
import { ButtonCardSocial } from "./button-card-social";

export const PlanGithub = () => {
  return (
    <div className="md:max-w-6xl p-4 gap-4 h-[1100px] md:h-auto md:flex md:justify-center md:items-center md:flex-col md:rounded-[8px]">
      <BreadCrumbApp name="Github" page="/github" />
      <section className="grid grid-cols-1 md:grid-cols-2 md:gap-2 max-h-[80vh] my-auto gap-4 mb-[50px] md:mb-4 md:mt-2.5 md:w-full">
        <a
          href="https://github.com/jnerydesigner"
          target="_blank"
          className="flex justify-center items-center"
        >
          <div className="h-full md:w-[300px] bg-white p-20 rounded-xl shadow-md border-2 border-gray-200 overflow-y-auto flex justify-center items-center">
            <Image
              src="/github.svg"
              alt="Logo do GitHub"
              title="Logo do GitHub"
              width={800}
              height={800}
              className="transition duration-300 transform hover:scale-140"
              loading="eager"
            />
          </div>
        </a>

        <div className="bg-white rounded-xl shadow-md p-6 border-2 border-gray-200 overflow-y-auto">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            👨‍💻 Explore meus projetos no GitHub!
          </h1>

          <div className="space-y-4 text-gray-700">
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>
                  Repositórios com exemplos de arquiteturas como{" "}
                  <strong>Hexagonal</strong>, <strong>DDD</strong> e{" "}
                  <strong>Event-Driven</strong>.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>
                  Aplicações backend com <strong>NestJS</strong>,{" "}
                  <strong>TypeScript</strong>, <strong>Kafka</strong>,{" "}
                  <strong>PostgreSQL</strong> e <strong>Redis</strong>.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>
                  Projetos com deploy automatizado usando{" "}
                  <strong>Docker</strong>, <strong>Kubernetes</strong> e{" "}
                  <strong>AWS</strong>.
                </span>
              </li>
            </ul>

            <div className="pt-4">
              <ButtonCardSocial
                className="hover:bg-[#3d3b3b]"
                bgColor="bg-[#181717]"
                asChild
              >
                <Link href="https://github.com/jnerydesigner" target="_blank">
                  Visite meu GitHub
                </Link>
              </ButtonCardSocial>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
