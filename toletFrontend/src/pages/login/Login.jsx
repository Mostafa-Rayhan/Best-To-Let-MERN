import React, { useEffect, useState } from "react";
import { ToastError, ToastSuccess } from "../../hooks/others";
import { base, uploadRoomData } from "../../hooks/api";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      navigate("/admin");
    }
  }, [navigate]);

  const important = (
    <span
      className=""
      style={{
        position: "absolute",
        color: "red",
        right: "-15px",
        top: "0px",
        fontSize: "1.2em",
      }}
    >
      *
    </span>
  );
  const [info, setInfo] = useState();


  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .get(`${base}/user`)
      .then((data) => {
        const users = data?.data;
        const getuser = users?.find(
          (u) => u.email == info.email && u.password == info.password
        );
        if (getuser) {
          localStorage.setItem("user", JSON.stringify(getuser));
          navigate("/admin");
        } else {
          ToastError("User not found");
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  return (
    <div className="mt-20 w-full flex items-center justify-center ">
      <form
        action=""
        onSubmit={handleSubmit}
        className="mt-3 text-black formDiv w-[90%] mx-auto sm:w-[500px]  "
        style={{}}
      >
        <h3 className="text-2xl font-bold text-center mb-10 ">Login </h3>
        <div className=" mb-5 inputDiv3">
          <label htmlFor="" style={{ position: "relative" }}>
            <span>Email : </span>
            {important}
          </label>{" "}
          <br />
          <input
            onChange={handleChange}
            type="email"
            name="email"
            value={info?.email || ""}
            className="newsInput  py-2 "
            style={{
              margin: "0px 0px ",
              borderRadius: "5px ",
              height: "1.7em",
            }}
          />
        </div>
        <div className=" mb-5 inputDiv3">
          <label htmlFor="" style={{ position: "relative" }}>
            <span>Password : </span>
            {important}
          </label>{" "}
          <br />
          <input
            onChange={handleChange}
            type="password"
            name="password"
            value={info?.password || ""}
            className="newsInput"
            style={{
              margin: "0px 0px ",
              borderRadius: "5px ",
              height: "1.7em",
            }}
          />
        </div>

        <button
          type="submit"
          className="col-span-2 about-one__btn thm-btn w-full submitBtnNews border-2 bg-accent rounded-md text-white "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
