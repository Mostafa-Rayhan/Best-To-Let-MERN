
import React, { useEffect, useState } from "react";
import context from "./context";
import axios from "axios";
import { base } from "./hooks/api";

const ContextProvider = ({ children }) => {
  const [editId, setEditId] = useState("");
  const [category, setCategory]=useState("")
  const [filters, setFilters] = useState({
    category: "",
    roomID: "",
    address: "",
  });



  const value = {
    editId, setEditId,category, setCategory,filters, setFilters,
  };
  return <context.Provider value={value}>{children}</context.Provider>;
};

export default ContextProvider;
