import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomeSection() {
  return (
    <div className="flex flex-row">
      <div className="mt-14">
        <h1
          style={{
            color: "#FF3147",
            // font: "normal normal 600 30px/110px Cormorant SC",
          }}
          className="mt-4 mb-4"
        >
          AWARD WINNING
        </h1>
        <h1
          style={
            {
              // font: "normal normal bold 60px/80px Cormorant SC"
            }
          }
          className="font-bold text-4xl"
        >
          DIGITAL MARKETING <br /> AGENCY
        </h1>
        <p className="mt-7 mb-4 pr-4 mr-4 text-sm">
          Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
          Pellentesque <br /> vitae ante at elit fringilla ac at purus, Morbi
          sed lacus nec risus finibus <br /> feugiat et fermentum
        </p>
        <div className="mt-12 h-10 w-36 flex">
          <div style={{ background: "#FF3147"}}>
            <Link href="#">
              <p className="p-2 text-white">CONTACT US</p>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <Image
          src="/img/hero.png"
          alt="image"
          width={300}
          height={1500}
        ></Image>
      </div>
    </div>
  );
}
