import React from "react";
import { Link } from "react-router-dom";
import benevo from "../../assets/images/Benevo.jpg";

const Benevo = () => {
  return (
    <div className="flex mt-12 w-[80%] mx-auto">
      <div className="w-2/3">
        <div className="max-w-4xl mx-auto p-6 space-y-6 text-gray-700">
          <h1 className="text-4xl font-bold text-center uppercase">Benevo</h1>
          <p className="text-lg text-center">
            An online portal for volunteer program management
          </p>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Technologies Used:
            </h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                <strong>Frontend:</strong> React JS, Firebase Authentication,
                React Router
              </li>
              <li>
                <strong>Backend:</strong> Node JS, Express, MongoDB, JSON web
                Token
              </li>
              <li>
                <strong>Plugins & Dependencies:</strong> Tailwind CSS, Daisy UI,
                sweetalert2, Helmet, react icons, Vite
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Main Features:
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Users can browse and view existing volunteer programs. However,
                registration and login are required to view program details.
              </li>
              <li>
                Logged in user can view the details an can request to be a
                volunteer. However user cannot request to become volunteer in
                his/her own program. Logged in user can upload a volunteer
                program. Both his/her volunteer programs and request to become
                volunteer can be viewed under My Profile link.
              </li>

              <li>
                My Profile has Add Volunteer link where user can add volunteer
                program. User can go to Manage Post where there are two tabs.
                Uploaded volunteer programs in one tab and request to be
                volunteer in other tab.
              </li>
              <li>
                Need volunteer link has all the volunteer programs listed in two
                different ways. One in grid as cards and the other as table in
                rows. In both tabs programs can be search by name.
              </li>
              <li>The website also has light and dark theme options.</li>
            </ul>
          </div>

          <div className="space-x-4">
            <Link to="/">
              <button className="bg-orange-600 text-white px-4 py-2 rounded-lg mt-8">
                Home
              </button>
            </Link>
            <Link to="https://benevo-8b9b0.web.app/" target="_blank">
              <button className="bg-orange-600 text-white px-4 py-2 rounded-lg mt-8">
                Go to Website Live Link
              </button>
            </Link>
          </div>

          <div className="">
            <h2 className="font-bold mb-4">Other Projects</h2>
            <div className="grid grid-cols-3 gap-8">
              <Link to="/heart-sync">
                <h2 className=" bg-orange-600 text-white rounded-lg text-center py-2 font-bold w-48">
                  Heartsync
                </h2>
              </Link>
              <Link to="/travel-geek">
                <h2 className=" bg-orange-600 text-white rounded-lg text-center py-2 font-bold w-48">
                  The Travel Geek
                </h2>
              </Link>
              <Link to="/colorful-canvas">
                <h2 className=" bg-orange-600 text-white rounded-lg text-center py-2 font-bold w-48">
                  Colorful Canvas
                </h2>
              </Link>
              <Link to="/elysian">
            <h2 className=" bg-orange-600 text-white rounded-lg text-center py-2 font-bold w-48">
              Elysian Motorway
            </h2>
          </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/3">
        <img src={benevo} alt="" />
      </div>
    </div>
  );
};

export default Benevo;
