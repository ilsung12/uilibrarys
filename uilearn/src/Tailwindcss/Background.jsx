import React from "react";

export default function Background() {
  return (
    <div className="bg-red-500" style={{ height: "1000px" }}>
      <div style={{ height: "100px" }}>
        <div
          style={{ height: "inherit" }}
          className="bg-purple-600 bg-opacity-100 ..."
        ></div>
        <div
          style={{ height: "inherit" }}
          className="bg-purple-600 bg-opacity-75 "
        ></div>
        <div
          style={{ height: "inherit" }}
          className="bg-purple-600 bg-opacity-50 "
        ></div>
        <div
          style={{ height: "inherit" }}
          className="bg-purple-600 bg-opacity-25 "
        ></div>
        <div
          style={{ height: "inherit" }}
          className="bg-purple-600 bg-opacity-10 "
        ></div>
      </div>
    </div>
  );
}
