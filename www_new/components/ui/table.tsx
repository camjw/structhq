import { Checkbox } from "@/components/ui/checkbox";

import { cn } from "@/lib/utils";

type TableCheckboxCellProps = {
  onCheckedChanged: (checked: boolean) => void;
  checked: boolean;
};

export function TableCheckboxCell({
  checked,
  onCheckedChanged,
}: TableCheckboxCellProps) {
  return (
    <div
      className="w-8 h-12 group flex items-center justify-center"
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <Checkbox
        className={cn(checked ? "" : "opacity-0 group-hover:opacity-100")}
        variant="default"
        size={"sm"}
        checked={checked}
        onCheckedChange={onCheckedChanged}
      />
    </div>
  );
}
