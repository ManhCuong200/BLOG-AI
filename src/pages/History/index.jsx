import React, { useEffect, useState } from "react";
import HistoryList from "@/components/HistoryList";
import { DialogDelete } from "@/components/DialogDelete";
import { DialogConfirm } from "@/components/DialogConfirm";
import { toast } from "react-hot-toast";

const History = () => {
  const [historyList, setHistoryList] = useState([]);
  const [OpenDelete, setOpenDelete] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [OpenView, setOpenView] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [copying, setCopying] = useState(false);

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem("history")) || [];
    setHistoryList(history);
  }, []);

  const openDeleteDialog = (id) => {
    setSelectedId(id);
    setOpenDelete(true);
  };

  const handleDelete = (id) => {
    const updateHistoryList = historyList.filter(
      (item) => item.id !== selectedId
    );
    localStorage.setItem("history", JSON.stringify(updateHistoryList));
    setHistoryList(updateHistoryList);
    setOpenDelete(false);
  };

  const openViewDialog = (id) => {
    setSelectedId(id);
    const item = historyList.find((item) => item.id === id);
    setSelectedItem(item);
    setOpenView(true);
  };

  const handleCopy = () => {
    if (!selectedItem?.content) return;
    setCopying(true);
    navigator.clipboard.writeText(selectedItem.content);
    setTimeout(() => setCopying(false), 700);
    toast.success("Nội dung đã được sao chép!");
  };

  const handleDownload = () => {
    if (!selectedItem?.content) return;
    const blob = new Blob([selectedItem.content], {
      type: "text/plain;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${selectedItem?.title || "blog"}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast.success("Nội dung đã được tải xuống!");
  };
  return (
    <>
      <div className="max-w-3xl px-4 py-12">
        <HistoryList
          historyList={historyList}
          handleDelete={handleDelete}
          openDeleteDialog={openDeleteDialog}
          openViewDialog={openViewDialog}
        />
      </div>
      <DialogDelete
        openDelete={OpenDelete}
        openChange={setOpenDelete}
        handleDelete={handleDelete}
      />
      <DialogConfirm
        openConfirm={OpenView}
        openChange={setOpenView}
        selectedItem={selectedItem}
        handleCopy={handleCopy}
        handleDownload={handleDownload}
        copying={copying}
      />
    </>
  );
};

export default History;
