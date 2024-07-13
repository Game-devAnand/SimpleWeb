import Image from "next/image";
export default function WhyChoose() {
  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center">
          <h1
            style={{
              color: "#FF3147",
            }}
            className="mt-4 mb-4"
          >
            WHY CHOOSE US
          </h1>
          <h1 className="font-bold text-3xl pb-4">WHY WE ARE BEST</h1>
        </div>
      </div>
      <div className="flex flex-row p-4 justify-evenly">
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
      </div>
    </>
  );
}

function Card1() {
  return (
    <>
      <div className="flex flex-col justify-start p-2">
        <Image className="mb-2"src="/img/aim.png" alt="image" width={60} height={50} />
        <h3 className="font-bold p-1">Clarified Vision & Target</h3>
        <p className="text-xs p-1">
          Lorem ipsum dolor sit amet,
          <br /> consetetur sadipscing elitr, sed <br />
          diam nonumy.
        </p>
      </div>
    </>
  );
}

function Card2() {
  return (
    <>
      <div className="flex flex-col justify-start p-2">
        <Image className="mb-2" src="/img/speed.png" alt="image" width={60} height={50} />
        <h3 className="font-bold p-1">High Performance</h3>
        <p className="text-xs p-1">
          Lorem ipsum dolor sit amet,
          <br /> consetetur sadipscing elitr, sed <br />
          diam nonumy.
        </p>
      </div>
    </>
  );
}

function Card3() {
  return (
    <>
      <div className="flex flex-col justify-start p-2">
        <Image className="mb-2" src="/img/shl.png" alt="image" width={50} height={40} />
        <h3 className="font-bold p-1">Maintain Security</h3>
        <p className="text-xs p-1">
          Lorem ipsum dolor sit amet,
          <br /> consetetur sadipscing elitr, sed <br />
          diam nonumy.
        </p>
      </div>
    </>
  );
}

function Card4() {
  return (
    <>
      <div className="flex flex-col justify-start p-2">
        <Image className="mb-2" src="/img/heal.png" alt="image" width={52} height={52} />
        <h3 className="font-bold p-1">Better Strategy & Quality</h3>
        <p className="text-xs p-1">
          Lorem ipsum dolor sit amet,
          <br /> consetetur sadipscing elitr, sed <br />
          diam nonumy.
        </p>
      </div>
    </>
  );
}
