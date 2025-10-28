import React, { useState } from "react";
import BlogEditor from "@/components/BlogEditor";
import PreviewContent from "@/components/PreviewContent";
import { GoogleGenerativeAI } from "@google/generative-ai";

const Editor = () => {
  const [inputValue, setInputValue] = useState("");
  const [contentBlog, setContentBlog] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [copying, setCopying] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const handleCreateBlog = async (inputValue) => {
    try {
      setIsLoading(true);
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_AI_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      const prompt = "Tạo một bài blog về: " + inputValue;
      const result = await model.generateContent(prompt);
      const response = result.response.candidates[0].content.parts[0].text;
      setContentBlog(response);
      const blog = {
        id: Date.now(),
        title: inputValue,
        content: response,
        createdAt: new Date().toISOString(),
      };
      const historyList = JSON.parse(localStorage.getItem("history")) || [];
      const updatedList = [...historyList, blog];
      localStorage.setItem("history", JSON.stringify(updatedList));
    } catch (error) {
      console.error("Lỗi khi tạo blog:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = () => {
    if (!contentBlog) return;
    setCopying(true);
    navigator.clipboard.writeText(contentBlog);
    setTimeout(() => setCopying(false), 700);
  };

  const handleDownload = () => {
    if (!contentBlog) return;
    setDownloading(true);

    const blob = new Blob([contentBlog], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${inputValue || "blog"}.txt`;
    a.click();
    URL.revokeObjectURL(url);
    setTimeout(() => setDownloading(false), 700);
  };

  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <BlogEditor
          inputValue={inputValue}
          handleCreateBlog={handleCreateBlog}
          setInputValue={setInputValue}
          isLoading={isLoading}
        />
      </div>
      <div className=" w-full text-card-foreground gap-6 justify-between rounded-xl  bg-card border shadow-sm p-6">
        <PreviewContent
          contentBlog={contentBlog}
          handleCopy={handleCopy}
          handleDownload={handleDownload}
          copying={copying}
          downloading={downloading}
        />
      </div>
    </>
  );
};

export default Editor;
