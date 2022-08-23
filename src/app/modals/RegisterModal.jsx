import React from "react";
import Register from "../pages/Register";

const RegisterModal = () => {
  return (
    <div
      className="modal fade"
      id="staticBackdrop2"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="font-bold text-lg">Register</h1>
            <button
              type="button"
              className="btn-close bg-black pb-5 w-8"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              &#10006;
            </button>
          </div>
          <div className="modal-body">
            <Register />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
