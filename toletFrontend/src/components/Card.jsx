import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({data}) => {
  const navigate=useNavigate()

  const getDetails=(id)=>{
    navigate(`/details/${id}`)
  }
  return (
    <div  data-aos-duration='1200' data-aos="zoom-in-down" >
      <div className="card card-compact bg-base-100 shadow-xl rounded-none ">
        <figure>
          <img
          className="border-none  md:h-48 "
            src={data?.image}
            alt="Shoes"
          />
        </figure>
        <div className="  !p-2 ">
          <h2 className="!mb-0 pb-0 font-[600] text-lg  ">{data?.name} </h2>
          <p className="p-0 text-sm font-[500] ">{data?.buildingName},{data?.address}</p>
          <div className="flex gap-2 items-center font-[600] mt-2">
            <p className="text-sm">{data?.totalSize} SFT |</p>
            <p className="text-sm">{data?.rent} TK |</p>

          </div>
          <button onClick={()=>getDetails(data?._id)} className="bg-[#FFF001] py-2 px-3 mt-3 mb-1 rounded-md text-sm font-bold">Show Details</button>


        </div>
      </div>
    </div>
  );
};

export default Card;
