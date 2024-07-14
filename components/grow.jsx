import Image from "next/image";
export default function Growth() {
  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center">
          <h1
            style={{
              color: "#FF3147",
            }}
            className="mt-4 mb-4 uppercase"
          >
            Experts growts
          </h1>
          <h1 className="font-bold text-3xl pb-4 uppercase">
            Our Company Growth
          </h1>
        </div>
      </div>
      <div className="flex flex-row p-4 justify-evenly">
        <Card head={"199 +"} img={"heart.png"} sub={"Staticfied Customers"} />
        <Card head={"1591+"} img={"clock.png"} sub={"Days Of Operation"} />
        <Card head={"283 +"} img={"tik.png"} sub={"Complete Project"} />
        <Card head={"75+"} img={"trop.png"} sub={"Win Awards"} />
      </div>
    </>
  );
}

function Card({ head, sub, img }) {
  return (
    <>
      <div style={{width:"160px", background:"white"}} className="flex flex-col justify-center items-center p-4 pt-4 m-10 hover:shadow-xl">
        <Image
          className="mb-2"
          src={`/img/${img}`}
          alt="image"
          width={20}
          height={20}
        />
        <h3 className="font-normal text-3xl p-1">{head}</h3>
        <p className="text-xs p-1">{sub}</p>
      </div>
    </>
  );
}
