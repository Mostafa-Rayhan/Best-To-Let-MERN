import axios from "axios";
import { ToastError } from "./others";



// local
export const base = "http://localhost:5000";



//  room manage

export const uploadRoomData = async (data) => {
    try {
      const headers = {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem("token") || ""}`,
      };
      const res = await axios.post(`${base}/room`, data,{headers});
      return res.data;
    } catch (error) {
      console.log(error);
      ToastError(error?.message || "Something error")
    }
  };

  export const deleteRoom= async (id) => {
    try {
      const headers = {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem("token") || ""}`,
      };
      const res = await axios.delete(`${base}/room/${id}`,{headers});
      return res.data;
    } catch (error) {
      console.log(error);
      ToastError(error?.message || "Something error")
    }
  };

  // update room
  export const updateRoom = async (id,data) => {
    try {
      const headers = {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem("token") || ""}`,
      };
      const res = await axios.put(`${base}/room/${id}`, data,{headers});

      return res.data;
    } catch (error) {
      console.log(error);
      ToastError(error?.message || "Something error")
    }
  };


  // end of room manage

  // user manage
    // update user
    export const updateUser = async (id,data) => {
      try {
        const headers = {
          'Content-Type': 'application/json',
          authorization: `Bearer ${localStorage.getItem("token") || ""}`,
        };
        const res = await axios.put(`${base}/user/${id}`, data,{headers});

        return res.data;
      } catch (error) {
        console.log(error);
        ToastError(error?.message || "Something error")
      }
    };


