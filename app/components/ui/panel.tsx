import { cn } from "@/lib/utils";

export function Panel({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col space-y-10 items-center w-full bg-white rounded-lg shadow-lg px-6 py-7 border border-gray-2",
        className,
      )}
    >
      {children}
    </div>
  );
}
