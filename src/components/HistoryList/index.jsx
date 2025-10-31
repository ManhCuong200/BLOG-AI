import React from "react";
import { Eye, Trash } from "lucide-react";
import Lottie from "lottie-react";
import notFound from "../../assets/giff/notFound.json";

const HistoryList = ({ historyList, openDeleteDialog }) => {
  if (!historyList || historyList.length === 0) {
    return (
      <div>
        <h1 className="text-3xl font-bold ">Hi, here is your history</h1>
        <Lottie
          className="w-64 h-64 mx-auto"
          animationData={notFound}
          loop={true}
        />
        <p className="text-lg text-muted-foreground mt-2 text-center">No history found</p>
      </div>
    );
  }

  return (
    <>
      {historyList.map((item) => (
        <div
          key={item.id}
          className="bg-card rounded-xl border p-6 shadow-sm mb-4"
        >
          <h2 className="text-2xl font-bold mb-3 break-words">{item.title}</h2>

          <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3 break-words">
            {item.content}
          </p>

          <div className="flex gap-3">
            <button
              className="inline-flex items-center gap-2 text-sm font-medium bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90"
            >
              <Eye size={18} />
            </button>

            <button
              onClick={() => openDeleteDialog(item.id)}
              className="inline-flex items-center gap-2 text-sm font-medium bg-destructive text-white px-4 py-2 rounded-md hover:bg-destructive/90 cursor-pointer"
            >
              <Trash size={18} />
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default HistoryList;
