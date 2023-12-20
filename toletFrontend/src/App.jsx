
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Rooms from "./pages/rooms/Rooms";
import RoomDetails from "./pages/RoomDetails";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/login/Login";


const App = () => {


  return (
    <div data-theme="light">
      <Routes>
        <Route path="/" element={<Home/>}> </Route>
        <Route path="/rooms" element={<Rooms/>}> </Route>
        <Route path="/details/:id" element={<RoomDetails/>}> </Route>
        <Route path="/admin" element={<AdminDashboard/>}> </Route>
        <Route path="/login" element={<Login/>}> </Route>
        {/* <Route path="/payment/:id" element={<RequireAuth><Payment></Payment></RequireAuth>}></Route> */}
      </Routes>

    </div>
  );
};

export default App;
