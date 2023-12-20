import React, { useEffect, useState } from "react";
import EastIcon from "@mui/icons-material/East";
import axios from "axios";
import { base, updateUser } from "../../../hooks/api";
import { ToastError, ToastSuccess } from "../../../hooks/others";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const [info, setInfo] = useState();
  const [user, setUser]=useState()
    useEffect(() => {
      const newuser = JSON.parse(localStorage.getItem("user"));
     
      if (newuser) {
       setUser(newuser)
       setInfo({email:newuser?.email, password:newuser?.password})
      }
    }, []);

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



    const handleChange = (e) => {
      setInfo({ ...info, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();


      const res=updateUser(user?._id, info)
      if(res){
        console.log("res", res );
        ToastSuccess("Successfully updated user data")
        axios.get(`${base}/user/${user?._id}`)
        .then(data=>{

          localStorage.setItem("user", JSON.stringify(data?.data));
          setInfo({email:data?.data?.email, password:data?.data?.password})
        })
        .catch(err=>{
          console.log("err", err );
        })
      }
      else{
        ToastError("Failed to update user data")
      }

    };

  return (
    <div>
      {/* <div className="mt-12 md:mt-2  flex items-center gap-3 mb-2">
        <h3 className="font-bold text-xl uppercase ">Update Your profile </h3>
        <span>
          <EastIcon style={{ color: "blue" }} />
        </span>
      </div> */}

      <form
        action=""
        onSubmit={handleSubmit}
        className="mt-12 text-black formDiv w-[90%] sm:w-[500px]  "
        style={{}}
      >

        <h3 className="font-bold text-center mb-10  text-xl uppercase ">Update Your profile </h3>
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
            type="text"
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

export default Profile;
