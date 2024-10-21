import { FaBriefcase, FaEnvelopeOpen, FaHome, FaUser } from "react-icons/fa";
import monir from "../assets/images/Monirul.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex items-center justify-center gap-8 p-8 min-h-screen ">
      <div className=" w-[40%] rounded-2xl">
        <img className="rounded-2xl" src={monir} alt="" />
      </div>
      <div className="w-[60%] justify-center">
        <h2 className="uppercase text-5xl font-bold text-[#ffb400] text-center"> - i'm monirul hassan</h2>
        <h2 className="uppercase text-4xl font-bold text-center">front-end web developer</h2>
        <p className="text-justify w-3/4 mx-auto mt-8 ">
          I'm a motivated junior web developer looking to build responsive and
          user-friendly web applications. Skilled in front- end development,
          including but not limited to React, Express, and MongoDB. Experiences
          in building dynamic websites, API integrations. Eager to apply
          problem-solving skills and technical knowledge to innovative projects
          that contribute to further growth.
        </p>
      </div>
     
    </div>
  );
};

export default Home;
