import React from "react";
import Login from "../pages/Login";
import PropTypes from "prop-types";

const LoginModal = (props) => {
  LoginModal.propTypes = {
    loggedIn: PropTypes.func.isRequired,
    login: PropTypes.bool.isRequired,
  };
  return (
    <div
      className="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="font-bold text-lg">Login</h5>
            <button
              type="button"
              className="btn-close bg-black w-8 pb-5"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              &#10006;
            </button>
          </div>
          <div className="modal-body">
            <Login oggedIn={props.loggedIn} login={props.login} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
