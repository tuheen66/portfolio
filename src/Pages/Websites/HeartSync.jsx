import React from "react";
import heart_sync from "../../assets/images/Heartsync.jpg";
import { Link } from "react-router-dom";

const HeartSync = () => {
  return (
    <div className="flex mt-12 w-[80%] mx-auto">
      <div className="w-2/3">
        <div className="max-w-4xl mx-auto p-6 space-y-6 text-gray-700">
          <h1 className="text-4xl font-bold text-center text-[#a9106b] space-x-2">
            Heartsync
          </h1>
          <p className="text-lg text-center">
            An online portal for matchmaking and matrimony
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
                <strong>Plugins & Dependencies:</strong> Tailwind CSS, Flowbite
                css, react-awesome-reveal, axios, React/TanStack Query,
                react-simple-typewriter, sweetalert2, Helmet, swiper, react
                icons, Vite
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              Main Features:
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Users can browse and view existing biodatas. However,
                registration and login are required to view detailed biodata.
              </li>
              <li>
                Logged in users cannot see the contact details in the biodata
                uless he/she is premium member. It is required to pay a $5.00
                fee to view the contact details in the biodata for any regular
                users. Once $5.00 fee is paid and admin approves the payment
                regular logged in user can view contact details. he/she can also
                make any biodata as favorite with a click of a button.
              </li>

              <li>
                Any registered user can request to make his/her biodata to be
                premium for free and Admin can see the request in the admin
                Dashboard panel and approves biodata to be premium. Similarly
                registered users can request to become premium member and Admin
                can see the request in the Admin panel and approves to become
                premium member with a click of a button. Admin can make any user
                Admin with a click of a button
              </li>
              <li>
                Logged in user can upload or edit his/her biodata from user
                panel in dashboard. He/she can view his/her own biodata, contact
                request/approved and favorite biodata in user panel in dashboard
              </li>
              <li>
                <li>
                  Total biodata page has pagination functionality. Moreover
                  biodata can be filtered/ searched according to age, gender and
                  permanent address.
                </li>
              </li>
            </ul>
          </div>

          <div className="space-x-4">
            <Link to="/">
              <button className="bg-orange-600 text-white px-4 py-2 rounded-lg mt-8">
                Home
              </button>
            </Link>
            <Link to="https://heartsync-5b928.web.app/" target="_blank">
              <button className="bg-orange-600 text-white px-4 py-2 rounded-lg mt-8">
                Go to Website Live Link
              </button>
            </Link>
          </div>

          <div className="">
            <h2 className="font-bold mb-4">Other Projects</h2>
            <div className="grid grid-cols-3 gap-8">
            <Link to="/travel-geek">
            <h2 className=" bg-orange-600 text-white rounded-lg text-center py-2 font-bold w-48">
              The Travel Geek
            </h2>
          </Link>
              <Link to="/benevo">
                <h2 className=" bg-orange-600 text-white rounded-lg text-center py-2 font-bold w-48">
                  Benevo
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
        <img src={heart_sync} alt="" />
      </div>
    </div>
  );
};

export default HeartSync;
