import React from "react";

const FeatureHero = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      {/* Replace grid items with flex containers */}
      <div className="relative flex justify-center items-center">
        <div className="absolute top-[50%] left-[50%] z-10 translate-x-[-50%] translate-y-[-50%] p-2">
          <p className="transform -r [writing-mode:vertical-lr] [text-orientation:upright]">
            Rubber keychains
          </p>
        </div>
        <div className="flex items-center justify-center p-4 bg-[#FFD1DC] rounded-lg relative h-full w-full">
          <img
            alt="Keychain"
            className="absolute inset-0 w-full h-full object-cover filter blur-lg"
            src="/metal1.jpg"
          />
        </div>
      </div>
      {/* Repeat for other items */}
    </div>
  );
};

export default FeatureHero;
