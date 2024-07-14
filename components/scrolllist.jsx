import Image from "next/image";
import Link from "next/link";
export default function ScrollList() {
  return (
    <div
      className="mt-16"
      style={{
        width: "80dvw",
        //   background: "red",
      }}
    >
      <div
        style={{
          scrollbarWidth: "none",
        }}
        className=" p-4 flex flex-row justify-evenly overflow-x-scroll overflow-y-hidden "
      >
        <FlipCard img={"1.png"} />
        <FlipCard img={"2.png"} />
        <FlipCard img={"3.png"} />
        <FlipCard img={"1.png"} />
      </div>
    </div>
  );
}

function CardFront({ img }) {
  return (
    <div>
      <div style={{ height: "404px", width: "290px" }}>
        <Image src={`/img/${img}`} alt="image" width={500} height={300} />
      </div>
    </div>
  );
}

function CardBack() {
  return (
    <div
      className="p-4 flex flex-col justify-center items-center"
      style={{ background: "#FF3147", height: "404px" }}
    >
      <div className="flex flex-col justify-center items-center text-white">
        <Image
          className="mt-4 mb-4"
          src="/img/web.png"
          alt="image"
          width={50}
          height={50}
        />
        <h3>WEB DEVELOPMENT</h3>
        <p className="text-xs p-2">
          Morbi sed lacus nec risus finibus feugiat <br /> et fermentum nibh.
          Pellentesque
        </p>
        <Link
          href={"#"}
          className="bg-white p-2 pl-4 pr-4 mt-12 mb-12 flex flex-row justify-center items-center"
        >
          <h3 className="pr-2" style={{ color: "#FF3147" }}>
            READ MORE
          </h3>
          <Image
            style={{ width: "30px", height: "8px" }}
            src="/img/arrow.png"
            alt="image"
            width={150}
            height={100}
          />
        </Link>
      </div>
    </div>
  );
}

function FlipCard({ img }) {
  return (
    <>
      <div className="m-4">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <CardFront img={img} />
            </div>
            <div class="flip-card-back">
              <CardBack />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
