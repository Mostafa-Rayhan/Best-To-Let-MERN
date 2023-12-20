import React, { useEffect, useState } from "react";
import Nabvar from "../../components/Nabvar";
import SearchbarRooms from "../../components/SearchbarRooms";
import CardsHome from "../../components/CardsHome";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { base } from "../../hooks/api";
import Card from "../../components/Card";
import EastIcon from "@mui/icons-material/East";
import { useRootContext } from "../../context";
import Card2 from "../../components/Card2";

const Rooms = () => {
  const navigate = useNavigate();
  const [rooms, setRooms] = React.useState([]);
  //   const [filters, setFilters] = useState({
  //     category: "",
  //     roomID: "",
  //     address: "",
  //   });
  const { filters, setFilters } = useRootContext();
  console.log("filters", filters);
  const [filteredData, setFilteredData] = useState();

  React.useEffect(() => {
    axios
      .get(`${base}/room`)
      .then((data) => {
        console.log("data", data?.data);
        setRooms(data?.data);
        setFilteredData(data?.data);
        //   const appartFilter=data?.data?.filter(s=>s?.category?.toLowerCase()=="appartment")
        //   setAppart(appartFilter)
        //   console.log("appart", appartFilter);
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, []);

  useEffect(() => {
    const filtered = rooms?.filter((item) => {
      return (
        (filters?.category === "" || item?.category?.toLowerCase() === filters?.category?.toLowerCase() ) &&
        (filters?.roomID === "" || item?.roomID?.toString().includes(filters?.roomID?.toString() )) &&
        (filters?.address === "" || item?.address?.toLowerCase().includes(filters?.address?.toLowerCase() )) 
      );
    });

    // Update filteredData state
    setFilteredData(filtered);
  }, [rooms, filters?.address, filters?.category, filters?.roomID]);

  // Event handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const resetSearch = () => {
    setFilters({
      category: "",
      roomID: "",
      address: "",
    });
  };

  return (
    <div>
      <Nabvar />
      {/* <SearchbarRooms /> */}

      {/* search bar  */}
      <div className="bg-[#FFF001] opacity-90  w-full">
        <div className="container py-8 mx-auto px-4 ">
          <div className="grid   grid-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="Location"
              name="address"
              className="input input-ghost  bg-white "
              value={filters?.address}
              onChange={handleInputChange}
            />
            <input
              type="text"
              placeholder="ID"
              name="roomID"
              value={filters?.roomID}
              onChange={handleInputChange}
              className="input input-ghost  bg-white "
            />

            <select
              className="select select-accent w-full "
              name="category"
              //   value={filters?.category}

              onChange={handleInputChange}
            >
              {/* <option disabled selected>
                Category
              </option> */}
              <option value="">Select</option>
              <option value="sublet">Sublet</option>
              <option value="appartment">Appartment</option>
              <option value="building">Building</option>
              <option value="tin-shade">Tin-shade</option>
              <option value="garage">Garage</option>
            </select>
            <button onClick={resetSearch} className="btn bg-white w-full ">
              Reset
            </button>
          </div>
        </div>
      </div>
      {/* search bar end */}
      <div className="mt-12 mb-12 w-5/6 mx-auto ">
        <div className="w-full ">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 gap-y-6 ">
            {filteredData?.map((s, i) => {
              return <Card2 key={i} data={s} />;
            })}
          </div>
        </div>
      </div>
      {/* footer  */}
      <Footer />
    </div>
  );
};

export default Rooms;
