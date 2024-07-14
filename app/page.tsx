import Image from "next/image";
import HomeSection from "./../components/home";
import WhatWeDoSection from "./../components/whatwedo";
import WhyChoose from "./../components/whychoose";
import Growth from "../components/grow"

export default function Home() {
  return (
    <main>
      <>
        <div className="flex min-h-screen flex-col items-center justify-between p-24">
          <HomeSection />
        </div>
        <div
          style={{ background: "#FAFAFA" }}
          className="flex flex-col items-center justify-between pl-28"
        >
          <WhatWeDoSection />
        </div>
        <div className="flex flex-col items-center justify-between p-24 pt-3">
          <WhyChoose />
        </div>
        <div style={{ background: "#FAFAFA" }} className="flex flex-col items-center justify-between p-24 pt-3">
          <Growth />
        </div>
      </>
    </main>
  );
}
