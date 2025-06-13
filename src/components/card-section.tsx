import { cardsData } from "@/data/cards";
import Image from "next/image";
import Link from "next/link";

const CardsSection = () => {
  return (
    <>
      <div className="w-full md:w-full px-[10px]">
        <div className="flex flex-wrap justify-center gap-6 md:mt-30px md:flex md:flex-row md:justify-center md:items-center p-2 md:gap-4">
          {cardsData.map((card) => (
            <div
              key={card.id}
              className="w-90 h-40 p-4 rounded-lg shadow-md hover:shadow-lg transition-all bg-gray-50 hover:bg-gray-100"
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
