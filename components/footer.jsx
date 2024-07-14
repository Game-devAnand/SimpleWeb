import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div style={{ background: "#FF3147", width: "100dhv", height:"180px"}} className="p-16 flex justify-center pmt-4">
      <dir style={{width:"800px", height:"20px"}}>
      <Image src={`/img/footer.png`} alt="image" width={800} height={10} />
      </dir>
    </div>
  );
}
