import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";
import PropTypes from "prop-types";
import Loader from "./Loader";
import ViewMore from "../modals/ViewMore";

const Search = (props) => {
  const [input, setInput] = useState("");
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  const d = new Date();
  const day = days[d.getDay()];
  // console.log(day)

  Search.propTypes = {
    logout: PropTypes.func.isRequired,
  };

  const fetchApi = () => {
    fetch(
      "https://random-data-api.com/api/restaurant/random_restaurant?size=100"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        let apidata = data;
        setLoading(false);
        setApiData(apidata);
      });
  };

  useEffect(() => {
    const timerStorage =
      sessionStorage.getItem("timer") === null
        ? 5000
        : sessionStorage.getItem("timer");
    const intervalId = setInterval(() => {
      fetchApi();
      console.log(day);
    }, timerStorage);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="h-14 bg-neutral-700 flex justify-between">
        <div>
          <h2 className="text-yellow-400 text-2xl ml-4 pt-2 font-bold">
            <span className="text-white">My</span> RESTAU
            <span className="text-white">RANTs!</span>
          </h2>
        </div>
        <div className="flex">
          <Link to="/settings">
            <button className="bg-white text-black font-bold h-9 w-20 mt-[2vh] mr-9 rounded-md hover:bg-black hover:text-white">
              Settings
            </button>
          </Link>
          <Link to="/">
            <button
              className="bg-white text-black font-bold h-9 w-20 mt-[2vh] mr-4 rounded-md hover:bg-black hover:text-white"
              onClick={props.logout}
            >
              LogOut
            </button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center bg-[#6e6766] h-72 relative">
        <h2 className="text-2xl font-bold text-yellow-300 pb-10 font-serif">
          Search The Type of The Restaurant And See The Matches One By One !
        </h2>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="Search The Type of The Restaurant"
          className="h-12 w-[45%] border rounded-lg border-slate-800 placeholder:pl-3 text-lg"
        ></input>
      </div>

      <div className="bg-neutral-700 pb-5">
        <div className="grid grid-cols-3 gap-x-5 gap-y-5 mx-8 pt-14">
          {loading === true ? (
            <Loader />
          ) : (
            apiData &&
            apiData
              .filter((val) => {
                const typeVal = val.type.toString();
                if (input === "") {
                  return val;
                } else if (
                  typeVal.toLowerCase().includes(input.toLowerCase())
                ) {
                  return val;
                }
              })
              .map((item, index) => {
                return (
                  <div
                    className="h-auto max-w-2xl  border bg-rose-300 border-black rounded flex flex-col"
                    key={index}
                  >
                    <div className="flex p-4 bg-white pl-8">
                      <img
                        src={item.logo}
                        alt={item.name}
                        className="h-24 w-24 rounded-full"
                      />
                      <div className="flex flex-col ml-9 mt-4">
                        <h1>
                          <b>Name:</b> {item.name}
                        </h1>
                        <h1>
                          <b>Type:</b>{" "}
                          <span className="text-red-700">{item.type}</span>
                        </h1>
                      </div>
                    </div>
                    <hr />
                    <div className="pt-6 pl-2 pr-1">
                      <p>
                        <b>Description:-</b>{" "}
                        {`${item.description}`.slice(0, 180)}.....
                      </p>
                      <button
                        type="button"
                        className="btn text-white bg-orange-400 hover:bg-black my-3"
                        data-bs-toggle="modal"
                        data-bs-target={`#exampleModal${index}`}
                      >
                        View More
                      </button>
                    </div>
                    {/* modal component for view more button */}
                    <ViewMore
                      index={index}
                      logo={item.logo}
                      name={item.name}
                      review={item.review}
                      opens_at={item.hours[day].opens_at}
                      closes_at={item.hours[day].closes_at}
                      is_closed={item.hours[day].is_closed}
                    />
                  </div>
                );
              })
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Search;
