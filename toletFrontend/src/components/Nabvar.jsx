import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRootContext } from "../context";

const Nabvar = () => {
  const { filters, setFilters } = useRootContext();
  const navigate = useNavigate();
  const [user, setUser] = useState();
  useEffect(() => {
    const newuser = JSON.parse(localStorage.getItem("user"));
    if (newuser) {
      setUser(newuser);
    }
  }, []);
  const handleLink = (data) => {
    setFilters({ ...filters, category: data });
    navigate("/rooms");
  };

  const handleLink2 = () => {
    setFilters({
      category: "",
      roomID: "",
      address: "",
    });
    navigate("/rooms");
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="mt-3">
                <button
                  className="font-semibold border-0 p-0 m-0 hover:text-blue-500  hover:bg-transparent "
                  onClick={handleLink2}
                >
                  All Rents
                </button>
              </li>
              <li className="mt-3">
                <button
                  className="font-semibold border-0 p-0 m-0 hover:text-blue-500  hover:bg-transparent "
                  onClick={() => handleLink("appartment")}
                >
                  Appartment
                </button>
              </li>
              <li className="mt-3">
                <button
                  className="font-semibold border-0 p-0 m-0 hover:text-blue-500  hover:bg-transparent "
                  onClick={() => handleLink("sublet")}
                >
                  Sublets
                </button>
              </li>
              <li className="mt-3">
                <button
                  className="font-semibold border-0 p-0 m-0 hover:text-blue-500  hover:bg-transparent "
                  onClick={() => handleLink("building")}
                >
                  Building
                </button>
              </li>
              <li className="mt-3">
                <button
                  className="font-semibold border-0 p-0 m-0 hover:text-blue-500  hover:bg-transparent "
                  onClick={() => handleLink("tin-shade")}
                >
                  Tin-shade
                </button>
              </li>
              <li className="mt-3">
                <button
                  className="font-semibold border-0 p-0 m-0 hover:text-blue-500  hover:bg-transparent "
                  onClick={() => handleLink("garage")}
                >
                  Garage
                </button>
              </li>
            </ul>
          </div>
          {/* <a className="btn btn-ghost text-xl font-semibold">ToLet</a>  */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/assets/logo3.png"
              alt=""
              className="hidden md:block  md:w-11 h-auto "
            />
            <div>
              <h3 className="font-semibold text-large text-blue-500 mb-0 whitespace-nowrap    md:leading-3 mt-2">
                TOLET SERVICE
              </h3>
              <small className="leading-tight text-xs hidden md:block  ">
                Get the best home
              </small>
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="flex items-center justify-center mx-4">
              <button
                className="font-semibold border-0 p-0 m-0 hover:text-blue-500  hover:bg-transparent "
                onClick={handleLink2}
              >
                All Rents
              </button>
            </li>
            <li className="flex items-center justify-center mx-4">
              <button
                className="font-semibold border-0 p-0 m-0 hover:text-blue-500  hover:bg-transparent "
                onClick={() => handleLink("Appartment")}
              >
                Appartment
              </button>
            </li>
            <li className="flex items-center justify-center mx-4">
              <button
                className="font-semibold border-0 p-0 m-0 hover:text-blue-500  hover:bg-transparent "
                onClick={() => handleLink("sublet")}
              >
                Sublet
              </button>
            </li>
            <li className="flex items-center justify-center mx-4">
              <button
                className="font-semibold border-0 p-0 m-0 hover:text-blue-500  hover:bg-transparent "
                onClick={() => handleLink("Building")}
              >
                Building
              </button>
            </li>
            <li className="flex items-center justify-center mx-4">
              <button
                className="font-semibold border-0 p-0 m-0 hover:text-blue-500  hover:bg-transparent "
                onClick={() => handleLink("Tin-shade")}
              >
                Tin-shade
              </button>
            </li>
            <li className="flex items-center justify-center mx-4">
              <button
                className="font-semibold border-0 p-0 m-0 hover:text-blue-500  hover:bg-transparent "
                onClick={() => handleLink("Garage")}
              >
                Garage
              </button>
            </li>
            {/* <li>
              <a className="font-semibold uppercase ">Building</a>
            </li>
            <li>
              <a className="font-semibold uppercase ">Tin-shade</a>
            </li> */}
          </ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <a href="/admin" className="">
              <img
                className="w-10 h-10 rounded-[50%]"
                src={`https://ui-avatars.com/api/?name=${user?.email}&background=9935F9&color=fff`}
                alt=""
              />
            </a>
          ) : (
            <a href="/login" className="btn">
              Admin Login
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nabvar;
