import tourismo from "../../assets/images/Tourismo.jpg";
import { Link } from "react-router-dom";

const Tourismo = () => {
  return (
    <div className="mx-4 mt-12 lg:w-[80%] lg:mx-auto mb-12 ">
      <div className="flex  flex-col lg:flex-row ">
        <div className="lg:w-2/3">
          <div className="max-w-4xl mx-auto p-6 space-y-6 text-gray-700">
            <h1 className="text-4xl font-bold text-center text-[#792753] space-x-2">
              Tourismo
            </h1>
            <p className="text-lg text-center text-gray-400">
              An online tourism site for tour program and tour guide management
            </p>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-400">
                Technologies Used:
              </h2>
              <ul className="list-disc pl-6 space-y-1 text-gray-400">
                <li>
                  <strong>Frontend:</strong> React JS, Firebase Authentication,
                  React Router
                </li>
                <li>
                  <strong>Backend:</strong> Node JS, Express, MongoDB, JSON web
                  Token
                </li>
                <li>
                  <strong>Plugins & Dependencies:</strong> Tailwind CSS,
                  Flowbite css, axios, React/TanStack Query, sweetalert2,
                  swiper, react icons, Vite
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-400">
                Main Features:
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-gray-400">
                <li>
                  <strong> Admin email : </strong>
                  hassan.monirul@gmail.com <br />{" "}
                  <strong>Admin password : </strong> 123456
                </li>
                <li>
                  Users can browse and view available tour packages as card
                  form. They can also view available tour guides. However,
                  registration and login are required to view detailed tour
                  packages and guide details.
                </li>

                <li>
                  Logged in users can view package details and guide details.
                  Logged in users can also book a tour and choose their desired
                  tour guide for the tour.
                </li>
                <li>
                  Once the tour package and the tour guide is booked the guide
                  can seed the booked tour in his dashboard. He can accept or
                  reject the tour. when guide accepts the tour the tourist will
                  see th list of tours in his/her dashboard with a button "Pay"
                  to pay for the tour. Until the tour is accepted tourist will
                  see booking status "In Review" and a"Cancel" button in the my
                  booking link in the tourist dashboard.
                </li>
                <li>
                  There are bunch of tour types listed in the home page where
                  user can click to view the specific tour type page.
                </li>
                <li>
                  Logged in user can click on the heart sight on tour card to
                  make it listed in his/her wish list.
                </li>
                <li>
                  Logged in tourists can write reviews and the review will be
                  displayed in the hme page review section.
                </li>
                <li>
                  Admin can make an user admin or guide. A registered user can
                  request to become guide and update his/her profile in guide
                  dashboard.
                </li>
              </ul>
            </div>

            <div className="space-x-4">
              <Link to="/">
                <button className="bg-orange-600 text-white px-4 py-2 rounded-lg mt-8">
                  Home
                </button>
              </Link>
              <Link to="https://tourismo-53356.web.app/" target="_blank">
                <button className="bg-orange-600 text-white px-4 py-2 rounded-lg mt-8">
                  Go to Website Live Link
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="lg:w-1/3">
          <img src={tourismo} alt="" />
        </div>
      </div>

      <div className="">
        <h2 className="font-bold my-4">Other Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:w-2/3">
          <Link to="/heartsync">
            <h2 className=" bg-orange-600 text-white rounded-lg text-center py-2 font-bold ">
              Heartsync
            </h2>
          </Link>
         
          <Link to="/benevo">
            <h2 className=" bg-orange-600 text-white rounded-lg text-center py-2 font-bold ">
              Benevo
            </h2>
          </Link>
          
        </div>
      </div>
    </div>
  );
};

export default Tourismo;
