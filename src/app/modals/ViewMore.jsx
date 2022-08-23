import React from "react";
import PropTypes from "prop-types";

const ViewMore = (props) => {
  ViewMore.propTypes = {
    index: PropTypes.number.isRequired,
    logo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    review: PropTypes.string.isRequired,
    opens_at: PropTypes.number.isRequired,
    closes_at: PropTypes.number.isRequired,
    is_closed: PropTypes.bool.isRequired,
  };
  return (
    <div
      className="modal fade"
      id={`exampleModal${props.index}`}
      tabIndex="-1"
      key={props.index}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content w-[45vw]">
          <div className="p-0 m-0 relative">
            <img src={props.logo} alt={props.name} className="w-[45vw] h-72" />
            <button
              type="button"
              className="text-white opacity-100 bg-opacity-100 font-bold bg-black absolute -top-4 -right-5 h-6 w-8 btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              &#10006;
            </button>
          </div>
          <div className="modal-body">
            <h2>
              <b>Review: </b>
              {props.review}
            </h2>
            <br />
            <h2>
              <b>Opening Hours for Today: </b>
              {props.opens_at} To {props.closes_at}{" "}
              {props.is_closed === true ? (
                <span className="text-red-500 font-bold">Closed</span>
              ) : (
                <span className="text-green-600 font-bold">Open</span>
              )}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewMore;
