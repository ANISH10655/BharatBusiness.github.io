import React from 'react'
import Last from '../components/Last'
import { Link } from "react-router-dom";
const Help = () => {
  return (
    <div>
      <div className="bg-cyan-900 relative h-[650px]">
        <div>
          <form
            action="https://formspree.io/f/mleynyob"
            method="POST"
            className="flex flex-col gap-4 justify-center py-6 px-9 rounded-lg animate__animated wow animate__slideInUp"
          >
            <label className="flex flex-col gap-1 mt-44">
              <p className="text-[40px] text-white -mt-20">Contact Us</p>
              <p className="text-[1rem] text-white mb-1 leading-[1.375rem] ml-4 font-serif">
                Name<sup className="text-red-800">*</sup>
              </p>

              <input
                required
                type="text"
                placeholder="Enter your name"
                name="name"
                autoComplete="off"
                className="bg-white rounded-[0.5rem] ml-3 text-black w-[40%] p-[12px] border-2 border-black"
              />
            </label>

            <label className="flex flex-col gap-1">
              <p className="text-[1rem] text-white mb-1 leading-[1.375rem] ml-4 font-serif">
                Mobile no<sup className="text-red-800">*</sup>
              </p>

              <input
                required
                type="text"
                pattern="[789][0-9]{9}"
                autoComplete="off"
                title="Please enter valid phone number"
                placeholder="Enter your Mobile Number"
                name="tel"
                className="bg-white rounded-[0.5rem] ml-3 text-black w-[40%] p-[12px] border-2 border-black"
              />
            </label>

            <label className="flex flex-col gap-1">
              <p className="text-[1rem] text-white mb-1 leading-[1.375rem] ml-4 font-serif">
                Email<sup className="text-red-800">*</sup>
              </p>

              <input
                required
                type="email"
                placeholder="Enter your email"
                name="email"
                autoComplete="off"
                className="bg-white rounded-[0.5rem] ml-3 text-black w-[40%] p-[12px] border-2 border-black"
              />
            </label>
            <label className="flex flex-col gap-1">
              <p className="text-[1rem] text-white mb-1 leading-[1.375rem] ml-4 font-serif">
                Ask your query
              </p>
              <textarea
                placeholder="Enter your message"
                name="textarea"
                autoComplete="off"
                className="bg-white rounded-[0.5rem] ml-3 text-black w-[40%] py-4 border-2 border-black"
              />
            </label>

            <div>
              <button className="bg-yellow-400 rounded-[8px] w-[20%] h-10 font-medium px-6 py-2 -mt-2 ml-7  text-black text-xl text-center ">
                Send Message
              </button>

              <Link to="/chatbot">
                <button className="bg-yellow-400 rounded-[8px] w-[20%] h-10 font-medium px-6 py-2 -mt-2 ml-7  text-black text-xl text-center ">
                  Chat With Us
                </button>
              </Link>

              
            </div>
          </form>
        </div>
      </div>

      

      <Last></Last>
    </div>
  );
}

export default Help
