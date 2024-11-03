import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="py-2 px-6 bg-transparent hover:bg-gray-100 border border-gray-50 text-sm  text-white/70  hover:text-[#232323] duration-800 transition-all font-bold rounded-xl"
    >
      {text}
    </button>
  );
};

export default Button;
