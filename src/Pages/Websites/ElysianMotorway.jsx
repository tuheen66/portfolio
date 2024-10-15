import elysian from "../../assets/images/Elysian.jpg";
import { Link } from "react-router-dom";

const ElysianMotorway = () => {
  return (
    <div className="mx-4 mt-12 lg:w-[80%] lg:mx-auto">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-2/3">
          <div className="max-w-4xl mx-auto p-6 space-y-6 text-gray-700">
            <h1 className="text-4xl font-bold text-center text-gray-600 space-x-2">
              Elysian Motorway
            </h1>
            <p className="text-lg text-center">
              An online shop for branded cars.
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
              <h2 className="text-2xl font-semibold text-gray-800">
                Main Features:
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Home page showcases all the brands the shop has to offer.
                  Clicking on the card will take the user to the specific car's
                  page where different models of the brand are displayed.
                </li>
                <li>
                  User needs to be registered and logged in to add a new
                  product, view details of the model, update any model details
                  or add model to cart.
                </li>
                <li>
                  Logged in user can add product to his/her cart and all cart
                  items are displayed in cart page for logged in user only.
                  Items can be removed from cart as well.
                </li>
              </ul>
            </div>

            <div className="space-x-4">
              <Link to="/">
                <button className="bg-orange-600 text-white px-4 py-2 rounded-lg mt-8">
                  Home
                </button>
              </Link>

              <Link
                to="https://brand-management-client.web.app/"
                target="_blank"
              >
                <button className="bg-orange-600 text-white px-4 py-2 rounded-lg mt-8">
                  Go to Website Live Link
                </button>
              </Link>
            </div>
          </div>

          
        </div>

      <div className="lg:w-1/3">
        <img src={elysian} alt="" />
      </div>
      </div>
      <div className="my-12">
            <h2 className="font-bold mb-4">Other Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:w-2/3">
              <Link to="/heart-sync">
                <h2 className=" bg-orange-600 text-white rounded-lg text-center py-2 font-bold ">
                  Heartsync
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
              <Link to="/colorful-canvas">
                <h2 className=" bg-orange-600 text-white rounded-lg text-center py-2 font-bold ">
                  Colorful Canvas
                </h2>
              </Link>
            </div>
          </div>
    </div>
  );
};

export default ElysianMotorway;
