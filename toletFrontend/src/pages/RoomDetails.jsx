import React from "react";
import Nabvar from "../components/Nabvar";
import Footer from "../components/Footer";
import axios from "axios";
import { base } from "../hooks/api";
import CardsHome from "../components/CardsHome";
import Card from "../components/Card";
import EastIcon from '@mui/icons-material/East';
import { useNavigate, useParams } from "react-router-dom";

const RoomDetails = () => {
  const { id } = useParams();
    const [room, setRoom]=React.useState()
    const [rooms, setRooms]=React.useState()
    const navigate=useNavigate()

    React.useEffect(()=>{
        axios.get(`${base}/room`)
        .then(data=>{
          console.log("data", data?.data);
          setRooms(data.data)

        })
        .catch(err=>{
          console.log("err", err );
        })
      },[])
    React.useEffect(()=>{
      console.log("id", id);
        axios.get(`${base}/room/${id}`)
        .then(data=>{

          setRoom(data?.data)
        })
        .catch(err=>{
          console.log("err", err );
        })
      },[id])

      const seeAllRooms=()=>{
        navigate("/rooms")
      }
  return (
    <div>
      <Nabvar />
      {/* details */}

      <div className="w-[90%] md:w-[83%] mx-auto mb-16 mt-12">
        {/* breadcumbs  */}
        <div className="text-sm breadcrumbs mb-4">
          <ul>
            <li>
              <a href="/" className="text-blue-400">Home</a>
            </li>
            <li>
              <a href="/rooms" className="text-blue-400">All Rents</a>
            </li>
            <li>{room?.name || "Room Details"}</li>
          </ul>
        </div>

        {/* breadcumbs  */}
        <div className="flex flex-wrap md:flex-nowrap  gap-6">
          <img src="/assets/details.jpg" alt="" className=" h-80 w-full  md:w-1/2" />
          <div className="bg-[#EEEEEE] w-full  md:w-1/2 p-4 ">
            <h4 className="text-2xl font-bold ">{room?.name || "Name not available"}</h4>
            <p className="text-blue-500 mt-2 font-[500]  ">Tolet ID: {room?.roomID || "N/A"}</p>
            <p className="mt-4 font-[400]  "><span className="font-[600]">Location</span> : {room?.buildingName}, {room?.address || "N/A"}</p>
            <p className="mt-4 font-[400]  "><span className="font-[600]">Category</span> : {room?.category || "N/A"}</p>
            <p className="mt-1 font-[400]  "><span className="font-[600]">Rent</span> : {room?.rent || "N/A"}</p>
            <p className="mt-1 font-[400]  "><span className="font-[600]">Total Size</span> : {room?.totalSize || "N/A"} QFT</p>
            <p className="mt-5 font-[600] text-lg "><span className="font-[600]">Phone</span> : {room?.phone || "N/A"} </p>

            <a className="btn mt-4  bg-[#FFF001] px-16 !max-h-fit " href={`tel:${room?.phone}`}>Contact Now</a>

          </div>
        </div>

        {/* full details  */}
        <div className="mt-10 w-full">
            <h5 className="text-lg font-bold">Tolet Full Details</h5>
            <div className="bg-[#EEEEEE] w-full md:w-[49%] mt-2  p-4 ">
                <div className="flex ">
                    <p className=" w-1/4 font-[600] text-sm">Name</p>
                    <p className="">:{" "} {room?.name || "N/A"}</p>
                </div>
                <div className="flex mt-3">
                    <p className=" w-1/4 font-[600] text-sm">Tolet ID</p>
                    <p className="">:{" "} {room?.roomID || "N/A"}</p>
                </div>
                <div className="flex mt-3">
                    <p className=" w-1/4 font-[600] text-sm">Category</p>
                    <p className="">:{" "} {room?.category || "N/A"}</p>
                </div>
                <div className="flex mt-3">
                    <p className=" w-1/4 font-[600] text-sm">Building Name</p>
                    <p className="">:{" "} {room?.buildingName || "N/A"}</p>
                </div>
                <div className="flex mt-3">
                    <p className=" w-1/4 font-[600] text-sm">Address</p>
                    <p className="">:{" "} {room?.address || "N/A"}</p>
                </div>
                <div className="flex mt-3">
                    <p className=" w-1/4 font-[600] text-sm">Tolet Size</p>
                    <p className="">:{" "} {room?.totalSize || "N/A"}</p>
                </div>
                <div className="flex mt-3">
                    <p className=" w-1/4 font-[600] text-sm">Master Bedroom</p>
                    <p className="">:{" "} {room?.masterBadRoom || "N/A"}</p>
                </div>
                <div className="flex mt-3">
                    <p className=" w-1/4 font-[600] text-sm">Bedroom</p>
                    <p className="">:{" "} {room?.bedroom || "N/A"}</p>
                </div>
                <div className="flex mt-3">
                    <p className=" w-1/4 font-[600] text-sm">Bathroom</p>
                    <p className="">:{" "} {room?.bathroom || "N/A"}</p>
                </div>
                <div className="flex mt-3">
                    <p className=" w-1/4 font-[600] text-sm">Rent Amount</p>
                    <p className="">:{" "} {room?.rent || "N/A"}</p>
                </div>
                <div className="flex mt-3">
                    <p className=" w-1/4 font-[600] text-sm">Garage</p>
                    <p className="">:{" "} {room?.garage || "N/A"}</p>
                </div>
                <div className="flex mt-3">
                    <p className=" w-1/4 font-[600] text-sm">Unit Per Floor</p>
                    <p className="">:{" "} {room?.unitperfloor || "N/A"}</p>
                </div>
                <div className="flex mt-3">
                    <p className=" w-1/4 font-[600] text-sm">Belcony</p>
                    <p className="">:{" "} {room?.belcony || "N/A"}</p>
                </div>
                <div className="flex mt-3">
                    <p className=" w-1/4 font-[600] text-sm">Gate Close Time</p>
                    <p className="">:{" "} {room?.gasclose || "N/A"}</p>
                </div>
                <div className="flex mt-3">
                    <p className=" w-1/4 font-[600] text-sm">Bill Pay Last Date</p>
                    <p className="">:{" "} {room?.billpaydate || "N/A"}</p>
                </div>
                <div className="flex mt-3">
                    <p className=" w-1/4 font-[600] text-sm">Meal Cost</p>
                    <p className="">:{" "} {room?.mealcost || "N/A"}</p>
                </div>
                <div className="flex mt-3">
                    <p className=" w-1/4 font-[600] text-sm">Rules</p>
                    <p className="">:{" "} {room?.rules || "N/A"}</p>
                </div>

            </div>
        </div>

        {/* other rooms  */}

        <div className="mt-12 ">
        <h3 className='text-2xl  w-fit font-semibold mb-6 border-b-2 border-[#FFF001]'>Rents you may need</h3>
        <div className="w-full ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6 ">
        {rooms?.slice(0, 5)?.map((s, i) => {
          return <Card key={i} data={s} />;
        })}


      </div>
      <button onClick={seeAllRooms} className="bg-[#FFF001] py-2 px-3 mt-6 mb-1 block  w-fit mx-auto text-center  rounded-md text-sm font-bold ">View All Tolets <EastIcon/></button>
    </div>
        </div>


      </div>

      <Footer />
    </div>
  );
};

export default RoomDetails;
