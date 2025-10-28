import React from "react";
import { Eye, Trash } from "lucide-react";

const HistoryList = ({ historyList, handleDelete, handleView }) => {
  return (
    <div className="grid gap-6">
      <h1 className="text-3xl font-bold mb-6">Hi, here is your history</h1>
      {historyList.length > 0 ? (
        historyList.map((item) => (
          <div
            key={item.id}
            className="bg-card rounded-xl border p-6 shadow-sm"
          >
            <h2 className="text-2xl font-bold mb-3 break-words">
              {item.title}
            </h2>

            <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3 break-words">
              {item.content}
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => handleView(item.id)}
                className="inline-flex items-center gap-2 text-sm font-medium bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90"
              >
                <Eye size={18} />
              </button>

              <button
                onClick={() => handleDelete(item.id)}
                className="inline-flex items-center gap-2 text-sm font-medium bg-destructive text-white px-4 py-2 rounded-md hover:bg-destructive/90"
              >
                <Trash size={18} />
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center text-lg text-muted-foreground">
          No history found
        </div>
      )}
    </div>
  );
};

export default HistoryList;
