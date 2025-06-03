import { HostingerPlans } from "./hostingerPlans";

export const PlanGrid = () => {
  return (
    <div className="w-full md:max-w-6xl md:mx-auto md:p-4 h-auto">
      <div className="flex justify-center items-center flex-col h-auto">
        <HostingerPlans />
      </div>
    </div>
  );
};
