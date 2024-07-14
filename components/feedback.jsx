import React from "react";

export default function FeedbackSection() {
  return (
    <div>
      <div>
        <div className="flex flex-col items-center justify-center pt-4">
          <h1
            style={{
              color: "#FF3147",
            }}
            className="mt-4 mb-4 uppercase"
          >
            {"client's feedback"}
          </h1>
          <h1 className="font-bold text-3xl pb-4 uppercase">
            {"people say's about us !"}
          </h1>
          <div className="flex flex-col justify-start">
          <p className="p-4 text-xs">
            Jannat Tumpa The standard chunk of Lorem Ipsum used since the 1500s
            is <br /> reproduced below for those interested. Sections Bonorum et
            Malorum original.
          </p>
          <div className="uppercase flex flex-row pl-3 text-xs">
            <h4
              style={{
                color: "#FF3147",
              }}
              className="font-bold"
            >
              JANNAT TUMPA
            </h4>
            <h4 className="text-slate-400">- COO, AMERIMAR ENTERPRISES, INC.</h4>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
