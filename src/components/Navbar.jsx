// import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt=""
          />
          <img
            onClick={() => navigate(1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt=""
          />
        </div>
        <div className="flex items-center gap-4">
        
          <p className="bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer">
            Skarleth
          </p>
          <p className="bg-green-500 text-black w-7 h-7 rounded-full flex items-center justify-center">
            S
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">
          Todas
        </p>
        <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">Musica</p>
        <p className="bg-black px-4 py-1 rounded-2xl cursor-pointer">Podcast</p>
      </div>
    </>
  );
};

export default Navbar;
