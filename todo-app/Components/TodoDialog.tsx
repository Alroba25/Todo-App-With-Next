import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
interface TodoDialogProps {
  title: string;
  description: string;
  completed: boolean;
  open: boolean;
  setOpen: (open: boolean) => void;
}
export default function TodoDialog({
  title,
  description,
  completed,
  open,
  setOpen,
}: TodoDialogProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            {completed ? "Completed" : "Not Completed"}
          </DialogDescription>
        </DialogHeader>
        <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4">
          <p className="mb-4 leading-normal">{description}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
