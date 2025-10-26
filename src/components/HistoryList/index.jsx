import React from "react";

const HistoryList = () => {
  return (
    <div className="grid gap-6">
      <h1 className="text-3xl font-bold">Hi, here is your history</h1>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
        <div className="col-span-2 grid justify-center items-center">
          <div className="w-64 h-64">
            <div className="text-center text-lg text-muted-foreground">
              No history found
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryList;
