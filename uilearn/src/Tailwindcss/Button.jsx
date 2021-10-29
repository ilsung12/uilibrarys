import React, { useState } from "react";
import "./button.css";

export default function Button() {
  const [isGreen, setIsGreen] = useState(false);

  return (
    <div>
      <button className="btn-blue transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 ">
        Hover me
      </button>
      <br />
      <button className="py-7 px-2 bg-green-500 text-black font-thin rounded shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
        Click me
      </button>
      <br />
      <br />
      <button
        className={`py-7 px-2 bg-${
          isGreen ? "green" : "purple"
        }-500 text-white font-semibold rounded-lg shadow-md hover:bg-${
          isGreen ? "green" : "purple"
        }-700 focus:outline-none focus:ring-2 focus:ring-${
          isGreen ? "green" : "purple"
        }-400 focus:ring-opacity-75`}
        onClick={() => setIsGreen((prev) => !prev)}
      >
        Click me
      </button>
      <br />
      <br />
      <button className="btn-blue">Click me</button>
      <br />
    </div>
  );
}
