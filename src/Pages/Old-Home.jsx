import React from "react";
import { Link } from "react-router-dom";
import monir from "../assets/images/Monirul.jpg";
import { FaHome, FaPhoneSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Home = () => {
  return (
    <div className="mx-4 lg:w-[60%] lg:mx-auto">
      <div className="p-6 rounded-lg my-12 flex flex-col-reverse md:flex-row items-center justify-between bg-gradient-to-l from-slate-100 to-slate-300 shadow-lg shadow-blue-400">
        <div className="space-y-2">
          <h2 className="font-bold text-3xl text-gray-700">Monirul Hassan</h2>

          <p className="flex  items-center ">
            <span className="font-semibold text-2xl mr-2 text-blue-400">
              {" "}
              <FaPhoneSquare></FaPhoneSquare>{" "}
            </span>{" "}
            +8801711591602
          </p>

          <p className="flex items-center ">
            <span className="font-semibold text-2xl mr-2 text-green-600">
              {" "}
              <FaSquareWhatsapp></FaSquareWhatsapp>{" "}
            </span>{" "}
            +8801711591602
          </p>
          <p className="flex items-center ">
            <span className="font-semibold text-2xl mr-2 text-gray-500">
              {" "}
              <MdEmail></MdEmail>{" "}
            </span>{" "}
            hassan.monirul@gmail.com
          </p>
          <p className="flex items-center ">
            <span className="font-semibold text-2xl mr-2 text-orange-900">
              {" "}
              <FaHome></FaHome>{" "}
            </span>{" "}
            672 / A, BaraMaghbazar, Dhaka - 1217
          </p>
        </div>

        <div className="w-64">
          <img className="rounded-full" src={monir} alt="" />
        </div>
      </div>

      <div className="p-6 space-y-12 rounded-lg mb-4 bg-gradient-to-r from-slate-100 to-slate-300 border-2 border-slate-400 shadow-lg shadow-blue-400">
        <h2 className=" font-bold text-2xl mb-4 ">
          Knowledge in Web Development
        </h2>

        <p className="text-lg text-gray-700">
          Recently completed the{" "}
          <span class="font-semibold">Complete Web Development Course</span>{" "}
          from
          <span className="font-semibold">Programming Hero</span>, an online web
          development learning platform run by
          <span class="font-semibold"> Mr. Jhanker Mahbub</span>.
        </p>
        <p className="text-gray-700">
          During the course, I have gone through an intensive learning process
          to get detailed knowledge on web development applications. A list of
          all the apps and tools that we learned to use during the course is
          given below:
        </p>

        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>
            <span className="font-medium">HTML5</span>
          </li>
          <li>
            <span className="font-medium">CSS3</span> (Tailwind CSS, daisyUI,
            flowbite UI)
          </li>
          <li>
            <span className="font-medium">JavaScript</span> (fundamentals to
            advanced topics)
          </li>
          <li>
            <span className="font-medium">React JS</span> (React Router,
            Firebase Authentication, Node JS, Express, MongoDB, JSON Web Token,
            and usage of various plugins to make web development faster and
            easier)
          </li>
        </ul>
      </div>

      <div className=" my-12">
        <h2 className=" font-bold text-2xl mb-4 ">Project Links</h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <Link to="/heart-sync">
            <h2 className=" bg-orange-600 text-white rounded-lg text-center py-2 font-bold ">
              Heartsync
            </h2>
          </Link>
          <Link to="/tourismo">
            <h2 className=" bg-orange-600 text-white rounded-lg text-center py-2 font-bold ">
              Tourismo
            </h2>
          </Link>
          <Link to="/benevo">
            <h2 className=" bg-orange-600 text-white rounded-lg text-center py-2 font-bold ">
              Benevo
            </h2>
          </Link>
          <Link to="/travel-geek">
            <h2 className=" bg-orange-600 text-white rounded-lg text-center py-2 font-bold ">
              The Travel Geek
            </h2>
          </Link>
          <Link to="/colorful-canvas">
            <h2 className=" bg-orange-600 text-white rounded-lg text-center py-2 font-bold ">
              Colorful Canvas
            </h2>
          </Link>
          <Link to="/elysian">
            <h2 className=" bg-orange-600 text-white rounded-lg text-center py-2 font-bold ">
              Elysian Motorway
            </h2>
          </Link>
        </div>
      </div>

      <div className="space-y-6 p-12 border-2 border-slate-400 bg-gradient-to-t from-slate-100 to-slate-300 rounded-lg shadow-lg shadow-blue-400">
        <h2 class="text-2xl font-bold text-gray-800">Past Employment:</h2>

        <div class="space-y-4">
          <div>
            <h3 class="text-lg font-semibold text-gray-700">
              1. Merchandising Manager (July 1, 2017 – February 29, 2020)
            </h3>
            <p class="text-gray-600">
              Company: TexElegant – Swedish Readymade Garments trading company.
            </p>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-gray-700">
              2. Merchandising Manager (May 1, 2015 - June 30, 2017)
            </h3>
            <p class="text-gray-600">
              Company: Dessin Wear – Export Oriented Sweater (Flat Knit)
              manufacturer / exporter.
            </p>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-gray-700">
              3. Manager (January 1, 2010 - April 30, 2015)
            </h3>
            <p class="text-gray-600">
              Company: J-Tex Bangladesh Liaison Office – Service oriented
              readymade garments buying house acts as the agents of various
              Dutch importers / retailers.
            </p>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-gray-700">
              4. Manager (November 1, 2006 - December 31, 2009)
            </h3>
            <p class="text-gray-600">
              Company: Wing Fat Enterprise Ltd, BD Liaison Office – Bangladesh
              purchase office for French conglomerate AGORA, buying for their
              own brands – TATI, GIGA, and FABIO LUCI.
            </p>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-gray-700">
              5. Senior Merchandiser (February 1, 1999 - October 31, 2006)
            </h3>
            <p class="text-gray-600">
              Company: Lindex Bangladesh Liaison Office – One of the leading
              Swedish readymade garments retail chain specialized in Ladies
              Lingerie, Ladies Fashion and Casual outfits, and Children
              garments.
            </p>
          </div>

          <div>
            <h3 class="text-lg font-semibold text-gray-700">
              6. Merchandiser (April 1, 1994 - January 31, 1999)
            </h3>
            <p class="text-gray-600">
              Company: Jibtex Limited – Dutch buying agents for importers and
              retailers.
            </p>
          </div>
        </div>
      </div>

      <div className=" mt-8 p-6 space-y-12 rounded-lg mb-4 bg-gradient-to-r from-slate-100 to-slate-300 border-2 border-slate-400 shadow-lg shadow-blue-400">
        <h2 class="text-2xl font-bold text-gray-800">
          Academic Qualification:
        </h2>

        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Exam Title</th>
                <th>Concentration/Major</th>
                <th>Institute</th>
                <th>Pass Year</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>Master of Commerce (M. Com)</th>
                <td>Accounting</td>
                <td>University of Dhaka</td>
                <td>1989</td>
              </tr>
              {/* row 2 */}

              <tr>
                <th>Bachelor of Commerce (B.Com)</th>
                <td>Accounting</td>
                <td>University of Dhaka</td>
                <td>1988</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="h-12 bg-gradient-to-l from-slate-100 to-slate-300 my-8 rounded-lg"></div>
    </div>
  );
};

export default Home;
