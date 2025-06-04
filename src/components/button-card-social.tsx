import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Slot } from "@radix-ui/react-slot";
import { AnchorHTMLAttributes } from "react";

interface ButtonCardSocialOwnProps {
  className?: string;
  bgColor?: string;
  asChild?: boolean;
}

// ⛔️ 'asChild' não deve ser herdado para <a>, então removemos da tipagem
type ButtonCardSocialProps = ButtonCardSocialOwnProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "asChild">;

export function ButtonCardSocial({
  className,
  children,
  bgColor = "#181717",
  asChild = false,
}: ButtonCardSocialProps) {
  const isTailwindColor = bgColor.startsWith("bg-");
  const backgroundClass = isTailwindColor ? bgColor : "";
  const inlineStyle = !isTailwindColor ? { backgroundColor: bgColor } : {};

  return (
    <Button
      className={cn(
        "w-full cursor-pointer h-12 text-white font-bold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-101 hover:bg-opacity-90",
        backgroundClass,
        className
      )}
      style={inlineStyle}
      asChild={asChild}
    >
      <Slot>{children}</Slot>
    </Button>
  );
}
