import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Lottie from "lottie-react";
import Trash from "../../assets/giff/trash.json";

export function DialogDelete({ openDelete, openChange, handleDelete }) {
  return (
    <Dialog open={openDelete} onOpenChange={openChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <div className="flex items-center justify-center">
            <Lottie animationData={Trash} className="w-50 h-50 " />
          </div>
          <DialogTitle className="text-center font-bold text-2xl">Confirm Delete</DialogTitle>
          <DialogDescription className="text-center">
            Are you sure you want to delete this item? This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="w-full flex justify-center gap-4 !mt-4">
          <DialogClose asChild>
            <Button className="w-[180px] bg-white text-black border-zinc-500 px-6 py-2 cursor-pointer">Cancel</Button>
          </DialogClose>
          <Button
            className="w-[180px] bg-red-600 cursor-pointer text-white"
            onClick={() => handleDelete()}
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
