import { HostingerData } from "@/data/hostinger";
import { BreadCrumbApp } from "./breadCrumbApp";

export type Plan = {
  id: number;
  title: string;
  priceOriginalTotal: string;
  discountOne: string;
  discountOneValue: string;
  referralDiscount: string;
  referralDiscountValue: string;
  price: string;
  description: { line: string }[];
  discountDescription: string;
  priceAndDiscount: string;
  discountSubDescription: { line: string }[];
  link: string;
};

export const HostingerPlans = () => {
  const transformAndCalculateAnnualPlan = (value: string) => {
    // Handle invalid inputs
    if (!value || typeof value !== "string" || value.trim() === "") {
      console.warn("Invalid or empty input:", value);
      return "0";
    }

    // Remove all non-numeric characters except dot and comma
    const cleanValue = value.replace(/[^\d,.]/g, "");
    console.log("Clean value:", cleanValue); // Log for debugging

    // Remove thousands separators (dots) and replace comma with dot for decimal
    const formattedValue = cleanValue.replace(/\./g, "").replace(",", ".");
    console.log("Formatted value:", formattedValue); // Log for debugging

    // Convert to float
    const valorFloat = parseFloat(formattedValue);

    // Check if the result is a valid number
    if (isNaN(valorFloat)) {
      console.warn("Cannot parse value:", value, "Formatted:", formattedValue);
      return "0";
    }

    // Divide by 24
    const resultado = valorFloat / 24;

    // Format result to string with 2 decimal places
    const resultadoString = resultado.toFixed(2);

    return resultadoString;
  };

  return (
    <>
      <BreadCrumbApp name="Planos Hostinger" page="/hostinger" />
      <h1 className="mb-10 font-bold text-2xl">
        💡 Adquira os planos da Hostinger e ajude o Canal a Crescer 🚀
      </h1>

      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {HostingerData.map((plan) => (
          <div
            key={plan.id}
            className="bg-gray-50 rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-purple-400 transition-shadow border border-purple-100"
          >
            <div>
              <h3 className="text-xl font-semibold text-purple-700 mb-2">
                {plan.title}
              </h3>
              <p className="text-2xl font-bold text-gray-800 mb-4">
                {transformAndCalculateAnnualPlan(plan.price)}/mês (24 meses)
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-4">
                {plan.description.map((desc: { line: string }, idx: number) => (
                  <li key={idx}>✅ {desc.line}</li>
                ))}
              </ul>
              <div
                className="text-sm text-gray-500 mb-2"
                dangerouslySetInnerHTML={{ __html: plan.discountDescription }}
              />
              <div className="text-lg text-green-600 font-semibold mb-2">
                {plan.referralDiscountValue}
              </div>
              {plan.discountSubDescription.map(
                (d: { line: string }, i: number) => (
                  <div key={i} className="text-xs text-gray-400">
                    {d.line}
                  </div>
                )
              )}
            </div>
            <a
              href={plan.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-purple-600 text-white font-medium py-2 px-4 rounded-xl text-center hover:bg-purple-700 transition"
            >
              Abrir Link
            </a>
          </div>
        ))}
      </div>
    </>
  );
};
