import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-4xl font-bold text-foreground">
            AI Blog Generator
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your ideas into compelling blog posts with AI assistance.
            Generate outlines, write content, and export beautiful articles.
          </p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
