import {
  FaCss3Alt,
  FaGraduationCap,
  FaHome,
  FaHtml5,
  FaNodeJs,
  FaPhoneSquare,
} from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { IoIosBriefcase, IoLogoJavascript } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { RiFirebaseFill, RiReactjsLine } from "react-icons/ri";
import { SiExpress, SiMongodb } from "react-icons/si";

const About = () => {
  return (
    <div className="w-[90%] mx-auto ">
      <section className="mt-12 ">
        <div>
          <h2 className="text-7xl font-bold text-white text-center ">
            ABOUT <span className="text-[#ffb400]">ME</span>
          </h2>
        </div>

        <div className="mt-12 flex gap-8">
          <div className="flex flex-1 gap-12">
            <div className="space-y-4">
              <h2 className="font-bold text-3xl  text-white">Monirul Hassan</h2>
              <p className="text-xl">Front-end Web Developer</p>

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

            <div className="flex flex-col gap-12">
              <button className="bg-[#ffb400] text-[#a9106b] px-4 py-2 rounded-lg font-bold">
                Github
              </button>
              <button className="bg-[#ffb400] text-[#a9106b] px-4 py-2 rounded-lg font-bold">
                LinkedIn
              </button>
              <a
                href="/MONIRUL_HASSAN.pdf"
                download
                className="bg-[#ffb400] text-[#a9106b] px-4 py-2 rounded-lg font-bold"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className=" flex-1 grid grid-cols-2 gap-8 ">
            <div className="border-2 border-gray-600 p-4 rounded-xl">
              <h2 className="text-[#ffb400] text-xl flex ">
                <span className="text-5xl font-bold">2</span>+
              </h2>
              <p className="uppercase mt-4">
                - Years of Web devleopment Experience
              </p>
            </div>

            <div className="border-2 border-gray-600 p-4 rounded-xl ">
              <h2 className="text-[#ffb400] text-xl flex ">
                <span className="text-5xl font-bold">24</span>+
              </h2>
              <p className="uppercase mt-4">- complete projects</p>
            </div>

            <div className="border-2 border-gray-600 p-4 rounded-xl">
              <h2 className="text-[#ffb400] text-xl flex ">
                <span className="text-5xl font-bold">65</span>+
              </h2>
              <p className="uppercase mt-4">-github repositories</p>
            </div>

            <div className="border-2 border-gray-600 p-4 rounded-xl">
              <h2 className="text-[#ffb400] text-xl flex ">
                <span className="text-5xl font-bold">28</span>+
              </h2>
              <p className="uppercase mt-4">
                - Years of professional experience
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="my-12">
        <h2 className="text-5xl font-bold uppercase text-center mb-12">
          My Skills
        </h2>
        <div className=" flex flex-wrap gap-20 justify-center">
          <div className="flex flex-col items-center text-xl border-2 border-gray-300 w-32 h-32 justify-center rounded-full ">
            <FaHtml5 className="text-4xl"></FaHtml5>
            <p>Html5</p>
          </div>

          <div className="flex flex-col items-center text-xl border-2 border-gray-300 w-32 h-32 justify-center rounded-full ">
            <FaCss3Alt className="text-4xl"></FaCss3Alt>
            <p>CSS3</p>
          </div>

          <div className="flex flex-col items-center text-xl border-2 border-gray-300 w-32 h-32 justify-center rounded-full ">
            <IoLogoJavascript className="text-4xl"></IoLogoJavascript>
            <p>JavaScript</p>
          </div>

          <div className="flex flex-col items-center text-xl border-2 border-gray-300 w-32 h-32 justify-center rounded-full ">
            <RiReactjsLine className="text-4xl"></RiReactjsLine>
            <p>React Js</p>
          </div>

          <div className="flex flex-col items-center text-xl border-2 border-gray-300 w-32 h-32 justify-center rounded-full ">
            <FaNodeJs className="text-4xl"></FaNodeJs>
            <p>Node Js</p>
          </div>

          <div className="flex flex-col items-center text-xl border-2 border-gray-300 w-32 h-32 justify-center rounded-full ">
            <SiExpress className="text-4xl"></SiExpress>
            <p>Express</p>
          </div>

          <div className="flex flex-col items-center text-xl border-2 border-gray-300 w-32 h-32 justify-center rounded-full ">
            <RiFirebaseFill className="text-4xl"></RiFirebaseFill>
            <p>Firebase</p>
          </div>

          <div className="flex flex-col items-center text-xl border-2 border-gray-300 w-32 h-32 justify-center rounded-full ">
            <SiMongodb className="text-4xl"></SiMongodb>
            <p>Mongodb</p>
          </div>
        </div>
      </section>

      <hr />

      <section className="my-12">
        <h2 className="uppercase text-center font-bold text-5xl mb-12">
          Experience & Education
        </h2>
        <div className="flex gap-32">
          {/* experience */}
          <div className="flex flex-col flex-1 ">
            {/* 1 */}
            <div className="flex gap-4 mb-20">
              <div className="bg-[#ffb400]  rounded-full text-[#a9106b] text-2xl w-fit h-fit p-4">
                <IoIosBriefcase></IoIosBriefcase>
              </div>

              <div>
                <p className="bg-gray-800 p-1 rounded-lg w-fit">
                  July 1, 2017 - February 29, 2020
                </p>
                <h2 className="font-bold">
                  Merchandising Manager - TexElegant{" "}
                </h2>
                <p> Swedish Readymade Garments trading company. </p>
              </div>
            </div>

            {/* 2 */}
            <div className="flex gap-4 mb-20">
              <div className="bg-[#ffb400]  rounded-full text-[#a9106b] text-2xl w-fit h-fit p-4">
                <IoIosBriefcase></IoIosBriefcase>
              </div>

              <div>
                <p className="bg-gray-800 p-1 rounded-lg w-fit">
                  May 1, 2015 - June 30, 2017
                </p>
                <h2 className="font-bold">
                  Merchandising Manager - Dessin Wear{" "}
                </h2>
                <p>
                  {" "}
                  Export Oriented Sweater (Flat Knit) manufacturer / exporter.{" "}
                </p>
              </div>
            </div>
            <div className="flex gap-4 mb-20">
              <div className="bg-[#ffb400]  rounded-full text-[#a9106b] text-2xl w-fit h-fit p-4">
                <IoIosBriefcase></IoIosBriefcase>
              </div>

              {/* 3 */}
              <div>
                <p className="bg-gray-800 p-1 rounded-lg w-fit">
                  January 1, 2010 - April 30, 2015
                </p>
                <h2 className="font-bold">
                  Manager - J-Tex bangladesh Liaison Office{" "}
                </h2>
                <p>
                  {" "}
                  Service oriented readymade garments buying house acts as the
                  agents of various Dutch importers / retailers.{" "}
                </p>
              </div>
            </div>
          </div>


          {/* education */}
          <div className="flex flex-col flex-1">
            {/* 1 */}
            <div className="flex gap-4 mb-20">
              <div className="bg-[#ffb400]  rounded-full text-[#a9106b] text-2xl w-fit h-fit p-4">
                <FaGraduationCap></FaGraduationCap>
              </div>

              <div>
                <p className="bg-gray-800 p-1 rounded-lg w-fit">1989</p>
                <h2 className="font-bold">
                  Master of Commerce (M. Com) - Accounting
                </h2>
                <p> University of Dhaka</p>
              </div>
            </div>

            <div className="flex gap-4 mb-20">
              <div className="bg-[#ffb400]  rounded-full text-[#a9106b] text-2xl w-fit h-fit p-4">
                <FaGraduationCap></FaGraduationCap>
              </div>

              <div>
                <p className="bg-gray-800 p-1 rounded-lg w-fit">1988</p>
                <h2 className="font-bold">
                Bachelor of Commerce (B.Com)    - Accounting
                </h2>
                <p> University of Dhaka</p>
              </div>
            </div>

            <div className="flex gap-4 mb-20">
              <div className="bg-[#ffb400]  rounded-full text-[#a9106b] text-2xl w-fit h-fit p-4">
                <FaGraduationCap></FaGraduationCap>
              </div>

              <div>
                <p className="bg-gray-800 p-1 rounded-lg w-fit">2024</p>
                <h2 className="font-bold">
                Front-End Web Developer
                </h2>
                <p> Programming Hero</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
