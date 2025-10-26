import React from "react";
import { Link } from "react-router-dom";

const FeatureCard = () => {
  return (
    <>
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <div className="bg-card text-card-foreground flex flex-col gap-2 px-6 rounded-xl border border-border py-6 shadow-sm">
          <h3 className="text-[18px] font-bold text-foreground">AI-Powered</h3>
          <p className="text-muted-foreground text-[14px]">
            Generate blog outlines and content suggestions using advanced AI
          </p>
        </div>
        <div className="bg-card text-card-foreground flex flex-col gap-2 px-6 rounded-xl border border-border py-6 shadow-sm">
          <h3 className="text-[18px] font-bold text-foreground">Rich Editor</h3>
          <p className="text-muted-foreground text-[14px]">
            Full-featured text editor with formatting tools and live preview
          </p>
        </div>
        <div className="bg-card text-card-foreground flex flex-col gap-2 px-6 rounded-xl border border-border py-6 shadow-sm">
          <h3 className="text-[18px] font-bold text-foreground">
            Export Ready
          </h3>
          <p className="text-muted-foreground text-[14px]">
            Export your finished articles in multiple formats
          </p>
        </div>
      </div>
      <div className="p-8">
        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 has-[&gt;svg]:px-3">
          <Link to="/editor">Start Writing</Link>
        </button>
      </div>
    </>
  );
};

export default FeatureCard;
