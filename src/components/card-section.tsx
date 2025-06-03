import Image from "next/image";
import Link from "next/link";

const CardsSection = () => {
  const cards = [
    {
      id: 1,
      title: "Quer Ajudar o Canal",
      description:
        "Se você quiser ajudar o canal, Saiba que esse Canal é nosso, clique em saiba mais.",
      img: "/logo-jander-nery-dev-redondo.svg",
      linkAffiliate: "",
      linkLearnMore: "/pix",
    },
    {
      id: 2,
      title: "Conecte-se em nosso Linkedin",
      description:
        "Conectando-se poderemos aumentar a comunidade de programação",
      img: "/linkedin.svg",
      linkAffiliate: "",
      linkLearnMore: "/linkedin",
    },
    {
      id: 3,
      title: "Mentoria",
      description:
        "Orientação especializada para seu projeto, posso tentar te ajudar.",
      img: "/consult.svg",
      linkAffiliate: "",
      linkLearnMore: "/consult",
    },
    {
      id: 4,
      title: "Planos VPS Hostinger",
      description: "Hospedagem de Sites com mais potência e recursos",
      img: "/hostinger-logo.svg",
      linkAffiliate: "",
      linkLearnMore: "/hostinger-site",
    },
  ];

  return (
    <>
      <div className="w-full md:w-full px-[10px] md:mt-30px">
        <div className="flex flex-wrap justify-center gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className="w-[300px] p-4 rounded-lg shadow-md hover:shadow-lg transition-all bg-gray-50"
            >
              <div className="flex items-center space-x-2">
                <div className="h-11 w-11 rounded-full flex items-center justify-center">
                  <Image
                    src={card.img}
                    alt={card.title}
                    className="h-[100%]"
                    title={card.title}
                    width="500"
                    height="500"
                    loading="eager"
                  />
                </div>
                <span className="font-semibold text-lg text-gray-800">
                  {card.title}
                </span>
              </div>
              <p className="text-sm text-gray-600 mt-2">{card.description}</p>
              <Link
                href={card.linkLearnMore}
                className="mt-4 inline-block text-green-600 hover:underline"
              >
                Saiba mais
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CardsSection;
