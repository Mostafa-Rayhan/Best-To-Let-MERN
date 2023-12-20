import React from "react";

const SearchbarRooms = () => {
  return (
    <div>
      <div className="bg-[#FFF001] opacity-90  w-full">
        <div className="container py-8 mx-auto px-4 ">
          <div className="grid   grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Location"
              className="input input-ghost  bg-white "
            />
            <input
              type="text"
              placeholder="ID"
              className="input input-ghost  bg-white "
            />

            <select className="select select-accent w-full " >
              <option disabled selected>
                Category
              </option>
              <option>Sublet</option>
              <option>Appartment</option>
              <option>Building</option>
              <option>Tin-shade</option>
              <option>Garage</option>

            </select>
            <button className="btn bg-white w-full ">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchbarRooms;
