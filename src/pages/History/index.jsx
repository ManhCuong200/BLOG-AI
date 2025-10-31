import React, { useEffect, useState } from "react";
import HistoryList from "@/components/HistoryList";
import { DialogDelete } from "@/components/DialogDelete";
import {DialogConfirm} from "@/components/DialogConfirm"

const History = () => {
  const [historyList, setHistoryList] = useState([]);
  const [OpenDelete, setOpenDelete] = useState(false)
  const [selectedId, setSelectedId ] = useState("");
  const [OpenView, setOpenView] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)

  useEffect(() => {
    const history = JSON.parse(localStorage.getItem("history")) || [];
    setHistoryList(history);
  }, []);

  const openDeleteDialog = (id) => {
    setSelectedId(id);
    setOpenDelete(true);
  };

  const handleDelete = (id) => {
    const updateHistoryList = historyList.filter((item) => item.id !== selectedId);
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
      />
    </>
  );
};

export default History;
