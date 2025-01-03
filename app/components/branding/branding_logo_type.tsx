import { COMPANY_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function BrandingLogoType() {
  return (
    <h3
      className={cn(
        "text-2xl tracking-tighter font-display font-semibold text-black",
      )}
    >
      {COMPANY_NAME}
    </h3>
  );
}
