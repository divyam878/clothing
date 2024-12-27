import React from "react";

const Colors = () => {
  const colors = [
    "bg-orange-300",
    "bg-red-300",
    "bg-blue-300",
    "bg-green-300",
    "bg-purple-300",
    "bg-yellow-300",
  ];
  return (
    <div className="pb-10 pl-4 w-full flex font-oswald">
      <div className="space-y-4 ml-4 mr-10 py-4 flex flex-col items-center w-[5%]">
        {colors.map((color, index) => (
          <div key={index} className={`h-12 w-12 hover:scale-110 transition-all duration-300 rounded-full ${color}`}></div>
        ))}
      </div>
      <div className="w-[20%]">
        <h2 className="text-[2.8rem] text-[#919191] font-semibold w-full">
          COLORS THAT <span className="block">MATTER.</span>
        </h2>
        <p className="text-[#6b473b] text-[1.2rem] pt-4">PICK YOUR SHADE</p>
      </div>
      <div className="w-[75%]">
      <img
        src="https://res.cloudinary.com/dhdrwpgox/image/upload/v1735216721/chooseColors_ltz7xt.png"
        alt="Banner"
        className="h-full w-full"
      />
      </div>
    </div>
  );
};

export default Colors;
