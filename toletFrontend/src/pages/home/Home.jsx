import React, { useEffect, useState } from "react";
import Slider from "../../components/Slider";
import Nabvar from "../../components/Nabvar";
import Card from "../../components/Card";
import CardsHome from "../../components/CardsHome";
import ImagesList from "../../components/ImagesList";
import Footer from "../../components/Footer";
import axios from "axios";
import { base } from "../../hooks/api";
import EastIcon from "@mui/icons-material/East";
import { useNavigate } from "react-router-dom";
import { useRootContext } from "../../context";
import Aos from "aos";
import "aos/dist/aos.css";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();
  const [rooms, setRooms] = React.useState([]);
  const [appart, setAppart] = useState([]);
  const [sub, setSub] = useState([]);
  const { category, setCategory } = useRootContext();
  useEffect(() => {
    Aos.init();
  }, []);

  React.useEffect(() => {
    axios
      .get(`${base}/room`)
      .then((data) => {
        console.log("data", data?.data[0]);
        setRooms(data.data);
        const appartFilter = data?.data?.filter(
          (s) => s?.category?.toLowerCase() == "appartment"
        );
        const subFilter = data?.data?.filter(
          (s) => s?.category?.toLowerCase() == "sublet"
        );
        setAppart(appartFilter);
        setSub(subFilter);
        console.log("appart", appartFilter);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  const viewAllRoom = () => {
    setCategory("");
    navigate("/rooms");
  };

  return (
    <div>
      <Nabvar />
      <Slider />
      <div className="mt-12 w-[90%] lg:w-[83%] mx-auto  ">
        <h3 className="text-2xl text-center w-fit mx-auto   font-semibold mb-6 border-b-2 border-[#FFF001]">
          RECENT TOLETS{" "}
        </h3>
        <div className="w-full ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6 ">
            {rooms
              ?.reverse()
              .slice(0, 5)
              .map((s, i) => {
                return <Card key={i} data={s} />;
              })}
          </div>
          <button
            onClick={viewAllRoom}
            className="bg-[#FFF001] py-2 px-3 mt-6 mb-1 block  w-fit mx-auto text-center  rounded-md text-sm font-bold "
          >
            View All Tolets <EastIcon />
          </button>
        </div>
      </div>
      <div className="mt-12 w-[90%] lg:w-[83%] mx-auto  ">
        <h3 className="text-2xl text-center w-fit mx-auto   font-semibold mb-6 border-b-2 border-[#FFF001]">
          APPARTMENT TOLETS{" "}
        </h3>
        <div className="w-full ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6 ">
            {appart?.slice(0, 5).map((s, i) => {
              return <Card key={i} data={s} />;
            })}
          </div>
          <button
            onClick={viewAllRoom}
            className="bg-[#FFF001] py-2 px-3 mt-6 mb-1 block  w-fit mx-auto text-center  rounded-md text-sm font-bold "
          >
            View All Tolets <EastIcon />
          </button>
        </div>
      </div>
      <div className="mt-12 w-[90%] lg:w-[83%] mx-auto  ">
        <h3 className="text-2xl text-center w-fit mx-auto   font-semibold mb-6 border-b-2 border-[#FFF001]">
          Sublet TOLETS{" "}
        </h3>
        <div className="w-full ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6 ">
            {sub?.slice(0, 5).map((s, i) => {
              return <Card key={i} data={s} />;
            })}
          </div>
          <button
            onClick={viewAllRoom}
            className="bg-[#FFF001] py-2 px-3 mt-6 mb-1 block  w-fit mx-auto text-center  rounded-md text-sm font-bold "
          >
            View All Tolets <EastIcon />
          </button>
        </div>
      </div>

      <div className="mt-12 w-full ">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(/assets/other.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div  className="max-w-md">
              <h1 data-aos-duration='1500' data-aos="fade-right" className="mb-5 text-2xl md:text-5xl font-bold">Best Place for Rent</h1>
              <p data-aos-duration='1500' data-aos="fade-left" className="mb-5 mt-8 tracking-wider text-base md:text-lg ">
                We have already provided more than thousand home to peoples. Everyone are satisfied to the rents. Get the best home for you
              </p>
              <button data-aos-duration='1500' data-aos="flip-left" onClick={viewAllRoom} className="btn bg-[#FFF001] text-lg">Get Rent Now</button>
            </div> 
          </div>
        </div>
      </div>
      <div className="mt-12 w-[90%] lg:w-[83%] mx-auto ">
        <h3 className="text-2xl text-center w-fit mx-auto   font-semibold mb-6 border-b-2 border-[#FFF001]">
          Our Image Gallary
        </h3>

        <ImagesList />
      </div>

      <div className="mt-12"></div>
      <Footer />
    </div>
  );
};

export default Home;
