import React from "react";
import Card from "./Card";
import EastIcon from '@mui/icons-material/East';

const CardsHome = () => {
  return (
    <div className="w-full ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6 ">
        {[...Array(8)].map((s, i) => {
          return <Card key={i} />;
        })}


      </div>
      <button className="bg-[#FFF001] py-2 px-3 mt-6 mb-1 block  w-fit mx-auto text-center  rounded-md text-sm font-bold ">View All Tolets <EastIcon/></button>
    </div>
  );
};

export default CardsHome;
