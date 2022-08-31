import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Loader from "./Loader";
import ViewMore from "../modals/ViewMore";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

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
    }, timerStorage);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <Navbar logout={props.logout} />

      <div
        className="flex flex-col justify-center items-center bg-no-repeat bg-cover h-[58.4vh]"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/1603901/pexels-photo-1603901.jpeg?auto=compress&cs=tinysrgb&w=600")`,
          backgroundPosition: "left",
          backgroundBlendMode: "darken",
          backgroundColor: "#b5a7a7",
        }}
      >
        <h2 className="lg:text-2xl md:text-xl sm:text-sm font-bold text-[#f2ffed] pb-10 font-serif  z-50">
          Search The Type of The Restaurant And See The Matches One By One !
        </h2>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="Search The Type of The Restaurant"
          className="h-12 w-[45%] border rounded-lg border-slate-800 lg:text-lg sm:text-sm pl-5"
        ></input>
      </div>

      <div className="bg-[#5d625b]">
        {loading === true ? (
          <Loader />
        ) : (
          <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-y-4 gap-x-4 pt-10 pb-10 container">
            {apiData &&
              apiData
                .filter((val) => {
                  const typeVal = val.type.toString();
                  if (input === "") {
                    return val;
                  } else if (
                    typeVal.toLowerCase().includes(input.toLowerCase())
                  ) {
                    return val;
                  } else {
                    return;
                  }
                })

                .map((item, index) => {
                  return (
                    <div
                      className="h-auto max-w-2xl border bg-[#97878c] border-black rounded-lg flex flex-col"
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
                          className="btn text-white bg-green-500 hover:bg-green-700 my-3"
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
                })}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Search;
