import React from "react";
import { FaEnvelope, FaHome, FaPhoneSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="w-[90%] mx-auto">

      <div className="my-12 flex flex-col lg:flex-row gap-8 justify-between items-center">
        <div className="space-y-12">
          <div className="flex items-center gap-4">
            <FaHome className="text-3xl text-orange-900" />
            <div>
              <p className="font-semibold">
                Monirul Hasan
              </p>
              <p>672/A, Baramaghbazar, Dhaka-1217</p>{" "}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <FaPhoneSquare className="text-3xl text-blue-400" />
            <p>+8801711591602</p>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-3xl text-gray-500" />
            hassan.monirul@gmail.com
          </div>
        </div>

        <div className="lg:w-1/2">
          <h2 className="mb-4 font-bold text-3xl">Contact Me</h2>

          <section className="p-6 dark:bg-gray-200 rounded-xl">
            <form className="container">
              <div className="space-y-12">
                <div className="col-span-full sm:col-span-3 space-y-2">
                  <label htmlFor="name" className=" font-semibold  ">
                    Your name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2"
                  />
                </div>

                <div className="col-span-full sm:col-span-3 space-y-2">
                  <label htmlFor="email" className="font-semibold ">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2"
                  />
                </div>
                <div className="col-span-full space-y-2">
                  <label htmlFor="textarea" className="font-semibold ">
                    Write to us
                  </label>
                  <textarea
                    id="textarea"
                    type="text"
                    placeholder="Write to us"
                    className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300 p-2"
                  />
                </div>
                <button className="bg-[#ffb400] text-[#a9106b] px-4 py-2  flex items-center gap-4 rounded-lg font-bold">
                  Submit
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
