"use client";
import React from "react";
import { useState } from "react";

export default function ContactUs() {
  const [agree, setAgree] = useState(false);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "fname":
        setFname(value);
        break;
      case "lname":
        setLname(value);
        break;
      case "message":
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (agree) {
      alert(`Email: ${email}, FName: ${fname}, LName: ${lname}`);
    } else {
      alert("Agree checkbox not filled");
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between mt-6">
      <div className="shadow-lg p-16">
        <h3 className="text-3xl font-bold pt-12">Talk to us</h3>
        <form action="https://getform.io/f/bmdpklma" method="POST">
          <div className="flex flex-row justify-start pt-12 border-b border-blue-gray-200 bg-transparent">
            <input
              type="text"
              name="email"
              value={email}
              placeholder="Work email*"
              onChange={handleChange}
            />
          </div>
          <div className="pt-12">
            <input
              className=" border-b border-blue-gray-200 bg-transparent mr-1"
              type="text"
              name="fname"
              value={fname}
              placeholder="First name* "
              onChange={handleChange}
            />
            <input
              className=" border-b border-blue-gray-200 bg-transparent ml-1"
              type="text"
              name="lname"
              value={lname} // Assuming you want "name" for both first and last name (update if needed)
              placeholder="Last name*"
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-row justify-start items-center pt-12">
            <input
              className="p-2  w-4 h-4 border-2 border-[#FF3366] rounded-sm bg-white"
              type="checkbox"
              value={agree}
              checked={agree} // Check the state here for rendering
              onChange={() => setAgree(!agree)}
            />
            <p className="text-sm p-2 text-gray-500">
              I agree to{` Fyle's`} terms and conditions, and provide <br />{" "}
              consent to send me communication.
            </p>
          </div>

          <div className="flex flex-row justify-center bg-[#FF3366] p-4 mt-4">
            <button
              className=" text-white font-semibold text-lg"
              type="submit"
            //   onClick={onSubmit}
            >
              Contact Us
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
