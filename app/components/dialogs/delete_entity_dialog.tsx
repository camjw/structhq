import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type DeleteEntityDialogProps = {
  isOpen: boolean;
  title?: string;
  description?: string;
  actionButtonText?: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  onDelete: () => void;
};

const DEFAULT_TITLE = "Are you absolutely sure?";
const DEFAULT_DESCRIPTION = "This action cannot be undone.";
const DEFAULT_ACTION_BUTTON_TEXT = "Delete";

export default function DeleteEntityDialog({
  isOpen,
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  actionButtonText = DEFAULT_ACTION_BUTTON_TEXT,
  setOpen,
  onDelete,
}: DeleteEntityDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader className="pb-4">
          <DialogTitle className="text-xl font-medium">{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={() => setOpen(false)} variant={"outline"}>
            Cancel
          </Button>
          <Button
            onClick={() => {
              onDelete();
              setOpen(false);
            }}
            variant="destructive"
          >
            {actionButtonText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
