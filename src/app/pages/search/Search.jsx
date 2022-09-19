import React, { useState, useEffect } from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Loader from "../../components/loader/Loader";
import SingalItem from "../../components/singleItem/SingalItem";
import "./search.css";

const Search = () => {
  const [input, setInput] = useState("");
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

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
      <Navbar />

      <div
        className="flex flex-col justify-center items-center bg-no-repeat bg-cover h-[58.4vh]"
        id="header-search-div"
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
          <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-y-4 gap-x-4 pt-10 pb-10 container mx-auto px-14">
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
                  return <SingalItem item={item} index={index} key={index} />;
                })}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Search;
