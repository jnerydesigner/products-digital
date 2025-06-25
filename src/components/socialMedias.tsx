import Link from "next/link";
import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa6";

export const SocialData = [
  {
    id: 1,
    name: "Youtube",
    icon: (
      <FaYoutube className="text-[#c4302b] w-5 h-5 group-hover:scale-110 transition-transform" />
    ),
    url: "https://www.youtube.com/@jandernery",
    color: "#c4302b",
  },
  {
    id: 2,
    name: "GitHub",
    icon: (
      <FaGithub className="text-[#181717] w-5 h-5 group-hover:scale-110 transition-transform" />
    ),
    url: "https://github.com/jnerydesigner",
    color: "#181717",
  },
  {
    id: 3,
    name: "LinkedIn",
    icon: (
      <FaLinkedin className="text-[#0077B5] w-5 h-5 group-hover:scale-110 transition-transform" />
    ),
    url: "https://www.linkedin.com/in/jander-nery",
    color: "#0077B5",
  },
];

export default function SocialSection() {
  return (
    <section className="w-full max-w-md mx-auto py-8 px-4">
      <h2 className="text-2xl font-bold text-center mb-6 text-zinc-800 dark:text-white">
        Minhas Redes
      </h2>

      <ul className="flex flex-col md:flex-row justify-center items-center gap-4">
        {SocialData.map((social) => (
          <li key={social.id} className="w-full md:w-auto">
            <Link
              href={social.url}
              target="_blank"
              title={`Acessar o ${social.name}`}
              className={`group w-full md:w-[180px] flex justify-center items-center gap-2 px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 border`}
              style={{
                backgroundColor: `${social.color}10`,
                borderColor: social.color,
              }}
            >
              <span>{social.icon}</span>
              <p className="text-base font-medium text-zinc-800 dark:text-white">
                {social.name}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
