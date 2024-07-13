import Image from "next/image";
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
        // style={{
        //   display: "flex",
        //   flexDirection: "row",
        //   overflowX: "scroll",
        //   width: "60dvw",
        // }}
        className="flex flex-row overflow-x-auto"
      >
        <ScrollCard />
        <ScrollCard />
        <ScrollCard />
        <ScrollCard />
      </div>
    </div>
  );
}

function ScrollCard() {
  return (
    <div style={{ height: "500px", width: "300px" }}>
      <div className="pr-4">
        <Image src="/img/1.png" alt="image" width={500} height={300} />
      </div>
    </div>
  );
}
