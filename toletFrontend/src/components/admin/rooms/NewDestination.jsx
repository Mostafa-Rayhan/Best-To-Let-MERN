import { ToastError, ToastSuccess } from "../../../hooks/others";
import { base, uploadRoomData } from "../../../hooks/api";
import React, { useEffect, useState } from "react";

const NewDestination2 = () => {
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
  const [info, setInfo] = useState({belcony:"yes", garage:"yes",category:"sublet",roomID:Math.floor(100000 + Math.random() * 900000)});
  const [cTime, setCTime] = useState(); 
  const [image, setImage] = useState();

  useEffect(() => {
    const now = new Date();
    // Get the local date
    const localDate = now.toLocaleDateString();
    setCTime(localDate);
  }, []);

  console.log("math", Math.floor(100000 + Math.random() * 900000));
  const handleImgChange = (e) => {
    const selectedImage = e.target.files[0];

    // Update the state with the selected file
    setImage(selectedImage);
  };

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("working",info, image);

    if (!image || image == undefined || image == null) {
      ToastError("Image is required");
      return;
    }

    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "ml_default");
    data.append("cloud_name", "dkb4jw0i5");

    fetch("http://api.cloudinary.com/v1_1/dkb4jw0i5/image/upload", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data2) => {
        console.log("url", data2?.url);
        const body = {
          ...info,
          date: cTime,
          image: data2?.url,


        };

        const tourRes = uploadRoomData(body);
        if (tourRes) {
          ToastSuccess("Uploaded to database");
        }
      })
      .catch((err) => {
        console.log("err", err);
        ToastError("Image upload failed");
      });
  };

  return (
    <div>
      <h3 className="text-left mt-5">Add New Tour</h3>
      <form
        action=""
        onSubmit={handleSubmit}
        className="mt-3 text-black formDiv grid grid-cols-2 "
        style={{}}
      >
        <div className=" mb-2 inputDiv">
          <label htmlFor="" style={{ position: "relative" }}>
            <span>Name : </span>
            {important}
          </label>{" "}
          <br />
          <input
            onChange={handleChange}
            type="text"
            name="name"
            value={info?.name || ""}
            className="newsInput"
            style={{
              margin: "0px 0px ",
              borderRadius: "5px ",
              height: "1.7em",
            }}
          />
        </div>
        <div className=" mb-2 inputDiv">
          <label htmlFor="" style={{ position: "relative" }}>
            <span>Category: </span>
            {important}
          </label>{" "}
          <br />
          <select
            onChange={handleChange}
            name="category"
            className="newsInput w-[70%] "
            style={{
              margin: "0px 0px ",
              borderRadius: "5px ",
              height: "1.7em",
            }}
          >
            <option selected value="sublet">Sublet</option>
              <option value="appartment">Appartment</option>
              <option value="building">Building</option>
              <option value="tin-shade">Tin-shade</option>
              <option value="garage">Garage</option>
          </select>
        </div>
        <div className=" mb-2 inputDiv">
          <label htmlFor="" style={{ position: "relative" }}>
            <span>Phone No : </span>
            {important}
          </label>{" "}
          <br />
          <input
            onChange={handleChange}
            type="text"
            name="phone"
            value={info?.phone || ""}
            className="newsInput"
            style={{
              margin: "0px 0px ",
              borderRadius: "5px ",
              height: "1.7em",
            }}
          />
        </div>
        <div className=" mb-2 inputDiv">
          <label htmlFor="" style={{ position: "relative" }}>
            <span>Building Name : </span>
            {/* {important} */}
          </label>{" "}
          <br />
          <input
            onChange={handleChange}
            type="text"
            name="buildingName"
            value={info?.buildingName || ""}
            className="newsInput"
            style={{
              margin: "0px 0px ",
              borderRadius: "5px ",
              height: "1.7em",
            }}
          />
        </div>
        <div className=" mb-2 inputDiv">
          <label htmlFor="" style={{ position: "relative" }}>
            <span>Address : </span>
            {important}
          </label>{" "}
          <br />
          <input
            onChange={handleChange}
            type="text"
            name="address"
            value={info?.address || ""}
            className="newsInput"
            style={{
              margin: "0px 0px ",
              borderRadius: "5px ",
              height: "1.7em",
            }}
          />
        </div>
        <div className=" mb-2 inputDiv">
          <label htmlFor="" style={{ position: "relative" }}>
            <span>Total Size : </span>
            {important}
          </label>{" "}
          <br />
          <input
            onChange={handleChange}
            type="number"
            name="totalSize"
            value={info?.totalSize || ""}
            className="newsInput"
            style={{
              margin: "0px 0px ",
              borderRadius: "5px ",
              height: "1.7em",
            }}
          />
        </div>
        <div className=" mb-2 inputDiv">
          <label htmlFor="" style={{ position: "relative" }}>
            <span>Master Badroom : </span>
            {important}
          </label>{" "}
          <br />
          <input
            onChange={handleChange}
            type="number"
            name="masterBadRoom"
            value={info?.masterBadRoom || ""}
            className="newsInput"
            style={{
              margin: "0px 0px ",
              borderRadius: "5px ",
              height: "1.7em",
            }}
          />
        </div>
        <div className=" mb-2 inputDiv">
          <label htmlFor="" style={{ position: "relative" }}>
            <span>Bedroom : </span>
            {important}
          </label>{" "}
          <br />
          <input
            onChange={handleChange}
            type="number"
            name="bedroom"
            value={info?.bedroom || ""}
            className="newsInput"
            style={{
              margin: "0px 0px ",
              borderRadius: "5px ",
              height: "1.7em",
            }}
          />
        </div>
        <div className=" mb-2 inputDiv">
          <label htmlFor="" style={{ position: "relative" }}>
            <span>Bathroom : </span>
            {important}
          </label>{" "}
          <br />
          <input
            onChange={handleChange}
            type="number"
            name="bathroom"
            value={info?.bathroom || ""}
            className="newsInput"
            style={{
              margin: "0px 0px ",
              borderRadius: "5px ",
              height: "1.7em",
            }}
          />
        </div>
        <div className=" mb-2 inputDiv">
          <label htmlFor="" style={{ position: "relative" }}>
            <span>Rent Amount : </span>
            {important}
          </label>{" "}
          <br />
          <input
            onChange={handleChange}
            type="number"
            name="rent"
            value={info?.rent || ""}
            className="newsInput"
            style={{
              margin: "0px 0px ",
              borderRadius: "5px ",
              height: "1.7em",
            }}
          />
        </div>

        <div className=" mb-2 inputDiv">
          <label htmlFor="" style={{ position: "relative" }}>
            <span>Garage: </span>
            {important}
          </label>{" "}
          <br />
          <select
            onChange={handleChange}
            name="garage"
            className="newsInput w-[70%] "
            style={{
              margin: "0px 0px ",
              borderRadius: "5px ",
              height: "1.7em",
            }}
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <div className=" mb-2 inputDiv">
          <label htmlFor="" style={{ position: "relative" }}>
            <span>Belcony: </span>
            {important}
          </label>{" "}
          <br />
          <select
            onChange={handleChange}
            name="belcony"
            className="newsInput w-[70%] "
            style={{
              margin: "0px 0px ",
              borderRadius: "5px ",
              height: "1.7em",
            }}
          >
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        <div className=" mb-2 inputDiv">
          <label htmlFor="" style={{ position: "relative" }}>
            <span>Unit Per Floor: </span>
            {important}
          </label>{" "}
          <br />
          <input
            onChange={handleChange}
            type="number"
            name="unitperfloor"
            value={info?.unitperfloor || ""}
            className="newsInput"
            style={{
              margin: "0px 0px ",
              borderRadius: "5px ",
              height: "1.7em",
            }}
          />
        </div>

        <div className=" mb-2 inputDiv">
          <label htmlFor="" style={{ position: "relative" }}>
            <span>Gass Close Time: </span>
            {important}
          </label>{" "}
          <br />
          <input
            onChange={handleChange}
            type="text"
            name="gasclose"
            value={info?.gasclose || ""}
            className="newsInput"
            style={{
              margin: "0px 0px ",
              borderRadius: "5px ",
              height: "1.7em",
            }}
          />
        </div>
        <div className=" mb-2 inputDiv">
          <label htmlFor="" style={{ position: "relative" }}>
            <span>Bill Pay Last Date: </span>
            {important}
          </label>{" "}
          <br />
          <input
            onChange={handleChange}
            type="text"
            name="billpaydate"
            value={info?.billpaydate || ""}
            className="newsInput"
            style={{
              margin: "0px 0px ",
              borderRadius: "5px ",
              height: "1.7em",
            }}
          />
        </div>
        <div className=" mb-2 inputDiv">
          <label htmlFor="" style={{ position: "relative" }}>
            <span>Rules : </span>
            {important}
          </label>{" "}
          <br />
          <textarea
            onChange={handleChange}
            type="text"
            name="rules"
            value={info?.rules || ""}
            className="newsInput"
            style={{
              margin: "0px 0px ",
              borderRadius: "5px ",
              height: "1.7em",
            }}
          />
        </div>
        <div className=" mb-2 inputDiv">
          <label htmlFor="" style={{ position: "relative" }}>
            <span>Meal Cost : </span>
            {important}
          </label>{" "}
          <br />
          <textarea
            onChange={handleChange}
            type="number"
            name="mealcost"
            value={info?.mealcost || ""}
            className="newsInput"
            style={{
              margin: "0px 0px ",
              borderRadius: "5px ",
              height: "1.7em",
            }}
          />
        </div>

        <div className=" mb-2 inputDiv">
          <label htmlFor="" style={{ position: "relative" }}>
            <span>Image : </span>
            {important}
          </label>{" "}
          <br />
          <input
            onChange={handleImgChange}
            type="file"
            name="image"
            // value={image|| ""}
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
          className="col-span-2 about-one__btn thm-btn submitBtnNews border-2 bg-accent rounded-md text-white "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewDestination2;
