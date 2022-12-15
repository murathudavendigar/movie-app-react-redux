import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import defaultAvatar from "../assets/avatar.png";
import useAuthCalls from "../hooks/useAuthCalls";

const Navbar = () => {
  const { currentUser } = useSelector((state) => state.auth);

  const { logout } = useAuthCalls();

  return (
    <nav className="relative w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
      <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
        <div className="flex-grow items-center" id="navbarSupportedContent1">
          <Link
            className="text-md md:text-xl text-white pr-2 font-semibold"
            to="/">
            Movie App
          </Link>
        </div>

        <div className="flex items-center relative">
          <div className="dropdown relative">
            <Link
              className="dropdown-toggle flex items-center hidden-arrow"
              to="#"
              id="dropdownMenuButton2"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              <img
                src={currentUser?.photoURL || defaultAvatar}
                className="rounded-full"
                style={{ height: "25px", width: "25px" }}
                alt=""
                loading="lazy"
              />
            </Link>

            <ul
              className="dropdown-menu min-w-max absolute hidden bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1  m-0 bg-clip-padding border-none left-auto right-0"
              aria-labelledby="dropdownMenuButton2">
              {currentUser?.email ? (
                <li>
                  <span
                    className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100 cursor-pointer"
                    onClick={() => logout()}>
                    Logout
                  </span>
                </li>
              ) : (
                <>
                  <li>
                    <Link
                      className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                      to="/login">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                      to="/register">
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
