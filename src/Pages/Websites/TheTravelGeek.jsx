import { Link } from "react-router-dom";
import travel_geek from "../../assets/images/Travel_geek.jpg";

const TheTravelGeek = () => {
  return (
    <div className="flex mt-12 w-[80%] mx-auto">
      <div className="w-2/3">
        <div className="max-w-4xl mx-auto p-6 space-y-6 text-gray-700">
          <h1 className="text-4xl font-bold text-center uppercase">
            The Travel Geek
          </h1>
          <p className="text-lg text-center">An online travel blog site</p>

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
                Users can browse and view existing blog cards. However,
                registration and login are required to view blog details.
              </li>
              <li>
                Logged in user can view details of the blog and and add the blog
                in their wish list. All wishlist blogs are displayed in the wishlist link and logged in user can view only his/her own wishlist items.
              </li>

              <li>
                In the blog detail page user can make comments on the blog. However user cannot make comment on his/her own blog.
              </li>
              <li>
               Logged in user can add his/her own blog in add blog page.
              </li>
              
            </ul>
          </div>

          <div className="space-x-4">
            <Link to="/">
              <button className="bg-orange-600 text-white px-4 py-2 rounded-lg mt-8">
                Home
              </button>
            </Link>
            <Link to="https://blog-website-366b7.web.app/" target="_blank">
              <button className="bg-orange-600 text-white px-4 py-2 rounded-lg mt-8">
                Go to Website Live Link
              </button>
            </Link>
          </div>

          <div className="">
            <h2 className="font-bold mb-4">Other Projects</h2>
            <div className="grid grid-cols-3">
              <Link to="/heart-sync">
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
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/3">
        <img src={travel_geek} alt="" />
      </div>
    </div>
  );
};

export default TheTravelGeek;
