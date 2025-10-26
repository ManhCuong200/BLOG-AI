import React from "react";
import FeatureCard from "@/components/FeatureCard";
import HeroSection from "@/components/HeroSection";

const Home = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <HeroSection />
        <FeatureCard />
      </div>
    </>
  );
};

export default Home;
