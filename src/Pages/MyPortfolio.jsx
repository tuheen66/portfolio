import heartsync from "../assets/images/Heartsync.jpg";
import tourismo from "../assets/images/Tourismo.jpg";
import benevo from "../assets/images/Benevo.jpg";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const MyPortfolio = () => {
  return (
    <div className="w-[90%] mx-auto mb-12">
      <div>
        <h2 className="text-4xl md:text-5xl  lg:text-7xl font-bold text-white text-center uppercase my-12">
          my <span className="text-[#ffb400]">portfolio</span>
        </h2>
      </div>

      <section>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="border-2 border-gray-300 shadow-xl shadow-slate-400 p-4 rounded-xl h-fit">
            <h2 className="mb-4 text-center text-2xl ">Heartsync</h2>
            <div>
              <img className="rounded-xl" src={heartsync} alt="" />
            </div>
            <div className="mt-4 flex justify-center">
              <Link to="/heartsync">
                <button className="bg-[#ffb400] text-[#a9106b] px-4 py-2  flex items-center gap-4 rounded-lg font-bold">
                  Go to Heartsync page <FaArrowRight></FaArrowRight>{" "}
                </button>
              </Link>
            </div>
          </div>

          <div className="border-2 border-gray-300 shadow-xl shadow-slate-400 p-4 rounded-xl">
            <h2 className="mb-4 text-center text-2xl ">Tourismo</h2>
            <div>
              <img className="rounded-xl" src={tourismo} alt="" />
            </div>
            <div className="mt-4 flex justify-center">
              <Link to="/tourismo">
                <button className="bg-[#ffb400] text-[#a9106b] px-4 py-2  flex items-center gap-4 rounded-lg font-bold">
                  Go to Tourismo page <FaArrowRight></FaArrowRight>{" "}
                </button>
              </Link>
            </div>
          </div>

          <div className="border-2 border-gray-300 shadow-xl shadow-slate-400 p-4 rounded-xl h-fit">
            <h2 className="mb-4 text-center text-2xl ">Benevo</h2>
            <div>
              <img className="rounded-xl" src={benevo} alt="" />
            </div>
            <div className="mt-4 flex justify-center">
              <Link to="/benevo">
                <button className="bg-[#ffb400] text-[#a9106b] px-4 py-2  flex items-center gap-4 rounded-lg font-bold">
                  Go to Benevo page <FaArrowRight></FaArrowRight>{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MyPortfolio;
