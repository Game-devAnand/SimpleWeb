"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const cardData = [
  {
    head: "Genderless Kei – Japan’s Hot",
    sub: `Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of`,
    img: "/img/game.jpg",
  },
  {
    head: "Better Strategy & Quality",
    sub: `Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of.`,
    img: "/img/image.png",
  },
  {
    head: "Genderless Kei – Japan’s Hot",
    sub: `Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of.`,
    img: "/img/ai.jpg",
  },
];

export default function OurProjects() {
  return (
    <div>
      <div>
        <div className="flex flex-col items-center justify-center">
          <h1
            style={{
              color: "#FF3147",
            }}
            className="mt-4 mb-4 uppercase"
          >
            Our project
          </h1>
          <h1 className="font-bold text-3xl pb-4 uppercase">Why We Are Best</h1>
        </div>
        <div>
          <SelectionCard />
        </div>
      </div>
    </div>
  );
}

function SelectionCard() {
  const [selectedImage, setSelectedImage] = useState("/img/image.png"); // Initial selected image

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="flex flex-row justify-center">
      <div
        style={{ width: "550px", height: "400px", overflow: "hidden" }}
        className="mr-4 flex justify-center"
      >
        <Image
          className={`object-cover ${
            "hover:opacity-75" // Adjust opacity for hover effect on other images
          }`}
          src={selectedImage}
          alt="image"
          width={550}
          height={400}
        />
      </div>
      <div
        style={{ width: "250px", height: "400px", background: "#F6F6F6" }}
        className="mr-4"
      >
        {cardData.map((card, index) => (
          <button
            key={index}
            className={`text-left hover:bg-[#FF3147] hover:text-white ${
              card.img === selectedImage ? "bg-[#FF3147] text-white" : "" // Apply hover color permanently for selected image
            }`}
            onClick={() => handleClick(card.img)}
          >
            <Card1 data={card} />
          </button>
        ))}
      </div>
    </div>
  );
}

function Card1({ data }) {
  return (
    <>
      <div
        className="flex flex-col justify-start p-2 pl-2" // Remove hover styles as they are handled in buttons
        style={{ width: "240px", height: "130px" }}
      >
        <h3 className="font-semibold text-sm p-1">{data.head}</h3>
        <p className="text-xs p-1 text-left">{data.sub}</p>
      </div>
    </>
  );
}
