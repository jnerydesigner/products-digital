import Image from "next/image";
import React from "react";
import { v4 as UuidV4 } from "uuid";

const productsAmazon = [
  {
    id: UuidV4(),
    name: "FIFINE Gaming PC Microfone USB, Microfone Condensador para Podcast",
    price: 268.59,
    productUrl: "https://amzn.to/4eRnbYq",
    imageUrl: "https://m.media-amazon.com/images/I/811EMBB42AL._AC_SX679_.jpg",
  },
  {
    id: UuidV4(),
    name: 'Notebook Gamer Dell G15-i1300-A25P 15.6" FHD 13ª Geração Intel Core i5 8GB 512GB SSD NVIDIA RTX 3050 Windows 11',
    price: 5499,
    productUrl: "https://amzn.to/46d7bOh",
    imageUrl: "https://m.media-amazon.com/images/I/61NR1TjDpgL._AC_SX679_.jpg",
  },
  {
    id: UuidV4(),
    name: "Mouse Gamer Redragon Cobra Pro RGB, Wireless, Sem Fio, 16000DPI, 8 Botões Programáveis, USB 2.4G - M711 Pro",
    price: 186,
    productUrl: "https://amzn.to/3U7q0ea",
    imageUrl: "https://m.media-amazon.com/images/I/51JmbHCiqQL._AC_SX679_.jpg",
  },
];

export function CardProductAmazon() {
  return (
    <section className="p-4 flex justify-center items-center flex-col max-w-6xl w-full bg-slate-50 rounded-xl">
      <h1 className="text-center text-xl font-bold mb-4 w-full">
        Produtos Que eu Uso
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {productsAmazon.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition text-sm"
          >
            <Image
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-40 object-contain p-2 bg-gray-50"
              width={300}
              height={300}
            />
            <div className="p-3 flex flex-col gap-2">
              <h2 className="font-medium line-clamp-2">{product.name}</h2>
              <span className="text-green-600 font-semibold">
                R${" "}
                {product.price.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                })}
              </span>
              <a
                href={product.productUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-center text-white bg-yellow-500 hover:bg-yellow-600 transition rounded-md py-1 text-sm"
              >
                Ver na Amazon
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
