import React from "react";
import SidderBar from "../components/SidderBar";

import {Outlet} from'react-router-dom'

const Layout = () => {
  return (
    <div className="container-fluid">
        <SidderBar/>
      <div className=" pt-10 pb-10 h-full bg-gradient-to-br from-pink-500 to-yellow-500">
        <Outlet/>
      </div>
    </div>
  );
};

export default Layout;
