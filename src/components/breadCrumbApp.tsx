"use client";

import { Slash } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

type Props = {
  page: string;
  name: string;
};

export const BreadCrumbApp: React.FC<Props> = ({ name, page }) => {
  const pathname = usePathname();

  return (
    <div className="w-[300px] h-12 ml-3 flex justify-center items-center">
      {pathname === "/" ? null : (
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <Slash />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink
                className={
                  pathname === page ? "text-blue-600" : "text-amber-700"
                }
                href={page}
              >
                {name}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      )}
    </div>
  );
};
