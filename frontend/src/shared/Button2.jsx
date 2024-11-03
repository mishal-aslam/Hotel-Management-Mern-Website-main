// AnchorButton.js
import React from "react";

const Button2 = ({ text, href, className }) => {
  return (
    <a
      href={href}
      className={`py-2 px-6 bg-red-600 hover:bg-red-700 text-sm  text-white/70  font-bold rounded-xl transition duration-200 ${className}`}
    >
      {text}
    </a>
  );
};

export default Button2;
