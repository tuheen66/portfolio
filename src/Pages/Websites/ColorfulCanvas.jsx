import React from "react";
import canvas from "../../assets/images/screen_shot/Colorful_Canvas.jpg";
import { Link } from "react-router-dom";

const ColorfulCanvas = () => {
  return (
    <div className="mx-4 mt-12 lg:w-[80%] lg:mx-auto">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-2/3">
          <div className="max-w-4xl mx-auto p-6 space-y-6 text-gray-400">
            <h1 className="text-4xl font-bold text-center text-indigo-600 space-x-2">
              <span className="text-red-500">Colorful</span>
              <span className="text-green-600">Canvas</span>
            </h1>
            <p className="text-lg text-center">
              A vibrant online shop for paintings and sketches with 6 unique
              categories.
            </p>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-400">
                Technologies Used:
              </h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Frontend:</strong> React JS, Firebase Authentication,
                  React Router
                </li>
                <li>
                  <strong>Backend:</strong> Node JS, Express, MongoDB
                </li>
                <li>
                  <strong>Plugins & Dependencies:</strong> Tailwind CSS, Daisy
                  UI, react-awesome-reveal, react-simple-typewriter,
                  sweetalert2, swiper, react icons, Vite
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-400">
                Main Features:
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Users can browse and view existing paintings and sketches.
                  However, registration and login are required to view detailed
                  craft item information.
                </li>
                <li>
                  The homepage includes sections for each category, with a brief
                  description for each. Clicking a category card redirects users
                  to a page displaying all crafts within that category.
                </li>
                <li>
                  Users need to register to add new craft items. Registration
                  options include email/password, Google sign-in, or GitHub
                  sign-in.
                </li>
                <li>
                  Registered users can upload and edit their own craft items.
                  They can also view their uploaded items but are restricted
                  from seeing others' items.
                </li>
              </ul>
            </div>

            <div className="space-x-4">
              <Link to="/">
                <button className="bg-orange-600 text-white px-4 py-2 rounded-lg mt-8">
                  Home
                </button>
              </Link>

              <Link to="https://colorful-canvas-e0d1e.web.app/" target="_blank">
                <button className="bg-orange-600 text-white px-4 py-2 rounded-lg mt-8">
                  Go to Website Live Link
                </button>
              </Link>
            </div>

            
          </div>
        </div>
        <div className="lg:w-1/3">
          <img src={canvas} alt="" />
        </div>
      </div>
      <div className="my-12">
              <h2 className="font-bold mb-4">Other Projects</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:w-2/3">
                <Link to="/heartsync">
                  <h2 className=" bg-orange-600 text-white rounded-lg text-center py-2 font-bold ">
                    Heartsync
                  </h2>
                </Link>
                <Link to="/tourismo">
            <h2 className=" bg-orange-600 text-white rounded-lg text-center py-2 font-bold ">
              Tourismo
            </h2>
          </Link>
                <Link to="/travel-geek">
                  <h2 className=" bg-orange-600 text-white rounded-lg text-center py-2 font-bold ">
                    The Travel Geek
                  </h2>
                </Link>
                <Link to="/benevo">
                  <h2 className=" bg-orange-600 text-white rounded-lg text-center py-2 font-bold ">
                    Benevo
                  </h2>
                </Link>
                <Link to="/elysian">
                  <h2 className=" bg-orange-600 text-white rounded-lg text-center py-2 font-bold ">
                    Elysian Motorway
                  </h2>
                </Link>
              </div>
            </div>
    </div>
  );
};

export default ColorfulCanvas;
