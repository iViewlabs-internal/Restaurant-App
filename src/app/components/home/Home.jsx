import Footer from "../footer/Footer";
import PropTypes from "prop-types";
import LoginModal from "../../modals/LoginModal";
import RegisterModal from "../../modals/RegisterModal";

const Home = (props) => {
  Home.propTypes = {
    loggedIn: PropTypes.func.isRequired,
    login: PropTypes.bool.isRequired,
  };

  const fetchedUrl =
    "https://images.pexels.com/photos/1237073/pexels-photo-1237073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <div>
      <div
        className="bg-fixed bg-no-repeat bg-cover -z-50 flex flex-col justify-between h-screen"
        style={{ backgroundImage: `url(${fetchedUrl})`, opacity: "revert" }}
      >
        <div className="flex justify-between  pb-4 container mx-auto px-14">
          <div className="pt-5">
            <h2
              className="text-lime-500 lg:text-2xl md:text-xl font-bold"
              style={{ textShadow: "1px 1px black" }}
            >
              <span className="text-[#f2ffed]">My</span> RESTAU
              <span className="text-[#f2ffed]">RANTs!</span>
            </h2>
          </div>
          <ul className="flex justify-end pt-5">
            <li
              className="text-white text-xl font-bold text-center w-24 h-10 pt-1 hover:cursor-pointer hover:bg-green-500 hover:text-black hover:rounded-lg"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Login
            </li>
            <li
              className="text-white text-xl font-bold text-center w-24 h-10 pt-1 hover:cursor-pointer hover:bg-green-500 hover:text-black hover:rounded-lg"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop2"
            >
              Register
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-between">
          <div className="text-center">
            <h1 className="text-[#f2ffed] text-center lg:text-2xl md:text-xl text-opacity-100 z-50 font-bold">
              Want To Find A RESTAURANT Near You ?{" "}
              <span className="bg-black rounded-lg px-2 py-1">
                My <span className="font-bold text-lime-500">RESTAU</span>
                RANTs!
              </span>{" "}
              Can Help You !<br />
              <br />{" "}
              <span className="bg-black text-lime-600 rounded-lg px-4 py-1">
                Just Login and Explore the wonder you want !
              </span>
            </h1>
          </div>
        </div>
        <Footer />
      </div>

      {/* modal component for login */}

      <LoginModal loggedIn={props.loggedIn} login={props.login} />

      {/* modal code for register */}

      <RegisterModal />
    </div>
  );
};

export default Home;
