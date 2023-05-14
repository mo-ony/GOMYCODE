import React from "react";
import "../../../scss/styles.scss";
import "bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <div className="d-flex align-items-center justify-content-center w-100">
      <form>
        <h3 className="text-center">Sign In</h3>
        <div className={"form-outline mb-2"}>
          <input
            type="email"
            id="form2Example1"
            placeholder="Email address"
            className={"form-control"}
          />
        </div>

        <div className={"form-outline mb-2"}>
          <input
            type="password"
            id="form2Example2"
            className={"form-control"}
            placeholder="Password"
          />
        </div>

        <div className={"row mb-2"}>
          <div className={"col d-flex justify-content-center"}>
            <div className={"form-check"}>
              <input
                className={"form-check-input"}
                type="checkbox"
                value=""
                id="form2Example31"
              />
              <label className={"form-check-label"} htmlFor="form2Example31">
                {" "}
                Remember me{" "}
              </label>
            </div>
          </div>

          <div className={"col"}>
            <a href="#!">Forgot password?</a>
          </div>
        </div>

        <button
          type="button"
          className={"btn btn-primary btn-block mb-2 w-100"}
        >
          Sign in
        </button>

        <div className={"text-center"}>
          <p>
            Not a member? <a href="#!">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Home;
