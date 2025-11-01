import React from "react";
import { Copy, Download } from "lucide-react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { toast } from "react-hot-toast";

const PreviewContent = ({
  contentBlog,
  handleCopy,
  handleDownload,
  copying,
}) => {
  return (
    <>
      <div className="flex flex-col gap-2 md:flex-row justify-between items-start mb-8 border-b pb-6">
        <div className="text-2xl mb-0 font-bold flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          Xem trước & Xuất
        </div>
        <div className="flex gap-2 justify-start md:justify-end">
          <button
            onClick={() => handleCopy()}
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 cursor-pointer"
            type="button"
          >
            <Copy className="w-4 h-4" />
            {copying ? "Đã sao chép" : "Sao chép"}
          </button>
          <button
            onClick={() => handleDownload()}
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 cursor-pointer"
            type="button"
          >
            <Download className="w-4 h-4" />
            Tải xuống
          </button>
        </div>
      </div>
      <div className="grid gap-8 min-h-28">
        {contentBlog ? (
          <div className="prose prose-sm prose-a:text-primary prose-img:rounded-lg prose-td:border prose-th:border prose-th:px-4 prose-th:text-left max-w-none">
            <Markdown remarkPlugins={[remarkGfm]}>{contentBlog}</Markdown>
          </div>
        ) : (
          <p className="text-center text-muted-foreground">
            Chưa có nội dung để hiển thị.
          </p>
        )}
      </div>
    </>
  );
};

export { DialogConfirm } from "../DialogConfirm";

export default PreviewContent;
