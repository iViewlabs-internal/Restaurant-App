import React from "react";
import ViewMore from "../../modals/ViewMore";
import PropTypes from "prop-types";
import { day } from "../../utils";

const SingalItem = (props) => {
  SingalItem.propTypes = {
    item: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
  };

  return (
    <div className="h-auto max-w-2xl border bg-[#97878c] border-black rounded-lg flex flex-col">
      <div className="flex p-4 bg-white pl-8">
        <img
          src={props.item.logo}
          alt={props.item.name}
          className="h-24 w-24 rounded-full"
        />
        <div className="flex flex-col ml-9 mt-4">
          <h1>
            <b>Name:</b> {props.item.name}
          </h1>
          <h1>
            <b>Type:</b> <span className="text-red-700">{props.item.type}</span>
          </h1>
        </div>
      </div>
      <hr />
      <div className="pt-6 pl-2 pr-1">
        <p>
          <b>Description:-</b> {`${props.item.description}`.slice(0, 180)}.....
        </p>
        <button
          type="button"
          className="btn text-white bg-green-500 hover:bg-green-700 my-3"
          data-bs-toggle="modal"
          data-bs-target={`#exampleModal${props.index}`}
        >
          View More
        </button>
      </div>
      {/* modal component for view more button */}
      <ViewMore
        index={props.index}
        logo={props.item.logo}
        name={props.item.name}
        review={props.item.review}
        opens_at={props.item.hours[day].opens_at}
        closes_at={props.item.hours[day].closes_at}
        is_closed={props.item.hours[day].is_closed}
      />
    </div>
  );
};

export default SingalItem;