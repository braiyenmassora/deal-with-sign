import React from "react";

const UnderMaintenance: React.FC = () => {
  const instagramUrl = "https://www.instagram.com/dealwithsign/"; // Replace with your Instagram URL

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white font-body font-aunthentic">
      <h1 className="text-7xl md:text-5xl lg:text-6xl font-bold mb-4">
        Looks like your lost 
      </h1>
      <p className="text-lg md:text-xl text-center max-w-xl mb-8">
        Don t worry, DealWithSign.com is currently undergoing some magical enhancements.
        
      </p>
      <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
        <button className="bg-white hover:bg-gray-200 text-black font-bold py-3 px-8 rounded">
          Follow the Enchanting Journey on Instagram
        </button>
      </a>
    </div>
  );
};

export default UnderMaintenance;
