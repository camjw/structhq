import Link from "next/link";

export const a = Link;
export { Button } from "@/components/ui/button";
export { CodeGroup, Code as code, Pre as pre } from "@/components/code";

export function wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex-auto">{children}</div>
    </div>
  );
}
