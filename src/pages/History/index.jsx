import React, { useEffect, useState } from "react";
import HistoryList from "@/components/HistoryList";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Copy, Download } from "lucide-react";

const History = () => {
  const [historyList, setHistoryList] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [copying, setCopying] = useState(false);
  const [downloading, setDownloading] = useState(false);

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem("history")) || [];
    setHistoryList(history);
  }, []);

  const handleDelete = (id) => {
    const updateHistoryList = historyList.filter((item) => item.id !== id);
    localStorage.setItem("history", JSON.stringify(updateHistoryList));
    setHistoryList(updateHistoryList);
  };
  const handleView = (id) => {
    const blog = historyList.find((item) => item.id === id);
    if (blog) {
      setSelectedBlog(blog);
      setIsDialogOpen(true);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedBlog.content);
    setCopying(true);
    setTimeout(() => setDownloading(false), 700);
  };
  const handleDowloand = () => {
    const blob = new Blob([selectedBlog.content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${selectedBlog.title || "blog"}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <HistoryList
          historyList={historyList}
          handleDelete={handleDelete}
          handleView={handleView}
        />
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-4xl overflow-y-auto max-h-[90vh] p-0">
            {selectedBlog && (
              <div className="w-full text-card-foreground rounded-xl">
                <div className="flex flex-col gap-2 md:flex-row justify-between items-start mb-8 p-6 border-b pb-6">
                  <h2 className="text-2xl font-bold">Xem trước & Xuất</h2>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleCopy}
                      enbled={copying}
                      className="flex items-center gap-1.5"
                    >
                      <Copy className="h-4 w-4" />
                      {copying ? "Đã sao chép" : "Sao chép"}
                    </Button>

                    <Button
                      variant="default"
                      size="sm"
                      onClick={() => handleDowloand()}
                      enbled={downloading}
                      className="flex items-center gap-1.5"
                    >
                      <Download className="h-4 w-4" />
                      {downloading ? "Đang tải…" : "Tải xuống"}
                    </Button>
                  </div>
                </div>

                <div className="px-6">
                  <h1 className="text-[28px] font-bold mb-6 leading-snug">
                    {selectedBlog.title}
                  </h1>
                </div>
                <div
                  className="px-6 pb-10 prose prose-lg max-w-none
                        prose-headings:font-bold
                        prose-h1:text-3xl prose-h2:text-2xl
                        prose-p:leading-relaxed prose-strong:font-semibold
                        prose-ul:list-disc prose-ol:list-decimal
                        prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded-md"
                >
                  <div className="px-6 pb-10 space-y-4 leading-relaxed whitespace-pre-wrap">
                    {selectedBlog.content}
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default History;
