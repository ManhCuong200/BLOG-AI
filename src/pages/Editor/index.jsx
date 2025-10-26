import React, { useEffect, useState } from "react";
import BlogEditor from "@/components/BlogEditor";
import PreviewContent from "@/components/PreviewContent";
import { GoogleGenerativeAI } from "@google/generative-ai";

const Editor = () => {
  const [inputValue, setInputValue] = useState("");
  const [contentBlog, setContentBlog] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (contentBlog && inputValue) {
      const blog = {
        id: Date.now(),
        ip: localStorage.getItem("ip") || null,
        title: inputValue,
        content: contentBlog,
        createdAt: new Date().toISOString(),
      };
      const blogList = JSON.parse(localStorage.getItem("blogList")) || [];
      const updatedList = [...blogList, blog];
      localStorage.setItem("blogList", JSON.stringify(updatedList));
    }
  }, [contentBlog]);

  const handleCreateBlog = async (inputValue) => {
    try {
      setIsLoading(true);
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_AI_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      const prompt = "Tạo một bài blog về: " + inputValue;
      const result = await model.generateContent(prompt);
      const response = result.response.candidates[0].content.parts[0].text;
      setContentBlog(response);
    } catch (error) {
      console.error("Lỗi khi tạo blog:", error);
    } finally {
      setIsLoading(false);
    }
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
        <PreviewContent contentBlog={contentBlog} />
      </div>
    </>
  );
};

export default Editor;
