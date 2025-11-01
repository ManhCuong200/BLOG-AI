import React from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import PreviewContent from "@/components/PreviewContent";

export function DialogConfirm({
  openConfirm,
  openChange,
  selectedItem,
  handleCopy,
  handleDownload,
  copying,
}) {
  return (
    <Dialog open={openConfirm} onOpenChange={openChange}>
      <DialogContent
        className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto"
        showCloseButton={false}
      >
        <PreviewContent
          contentBlog={selectedItem?.content}
          handleCopy={handleCopy}
          handleDownload={handleDownload}
          copying={copying}
        />
      </DialogContent>
    </Dialog>
  );
}
