import React, { useEffect, useState } from "react";
import HistoryList from "@/components/HistoryList";
import { DialogDelete } from "@/components/DialogDelete";

const History = () => {
  const [historyList, setHistoryList] = useState([]);
  const [OpenDelete, setOpenDelete] = useState(false)
  const [selectedId, setSelectedId ] = useState("");

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
  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <HistoryList
          historyList={historyList}
          handleDelete={handleDelete}
          openDeleteDialog={openDeleteDialog}
        />
      </div>
      <DialogDelete 
        openDelete={OpenDelete}
        openChange={setOpenDelete}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default History;
