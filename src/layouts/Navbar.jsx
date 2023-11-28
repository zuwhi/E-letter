import { faBackwardStep } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";

export default function Navbar({ to, page }) {
  return (
    <>
      <div className="navbar bg-base-100 h-16 fixed z-10">
        <div className="navbar-start flex">
          <div className="">
            {" "}
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost rounded-xl">
                <FontAwesomeIcon icon={faBars} className="text-pallete text-lg font-bol" />
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/option">Option</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="navbar-center"> <h1 className="md:text-2xl text-pallete font-semibold">{page}</h1></div>
        <div className="navbar-end ">
          {/* <ul className="steps scale-90">
            <li className="step step-info">Isi Form</li>
            <li className="step ">Preview</li>
            <li className="step " data-content="3">
              Download
            </li>
          </ul> */}
          {to == "OnLandingPage" ? (
            ""
          ) : (
            <Link to={to}>
              <button className="btn bg-pallete text-white ">
                <FontAwesomeIcon icon={faBackwardStep} />
                Back
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
