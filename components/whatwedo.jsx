import React from "react";
import ScrollList from "./scrolllist";

export default function WhatWeDoSection() {
  return (
    <div>
      <div className="flex flex-row items-center">
        <div className="mt-14">
          <h1
            style={{
              color: "#FF3147",
              // font: "normal normal 600 30px/110px Cormorant SC",
            }}
            className="mt-4 mb-4"
          >
            WHAT WE DO
          </h1>
          <h1
            style={
              {
                // font: "normal normal bold 60px/80px Cormorant SC"
              }
            }
            className="font-bold text-3xl"
          >
            SERVICES PROVIDE <br /> FOR YOU
          </h1>
        </div>
        <div>
          <p className="mt-28 mb-4 pl-4 ml-16 text-xs">
            Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
            Pellentesque <br /> vitae ante at elit fringilla ac at purus, Morbi
            sed lacus nec risus finibus <br /> feugiat et fermentum
          </p>
        </div>
      </div>
      <ScrollList />
    </div>
  );
}
