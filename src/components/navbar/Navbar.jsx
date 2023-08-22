import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import profile from "../../assets/img/profile.png";
import { ReactComponent as Notification } from "../../assets/svg/Notification.svg";
import { ReactComponent as Home } from "../../assets/svg/Home.svg";
import { CustomButton } from "../buttons/CustomButton";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white pt-5 flex flex-wrap justify-between px-5 pb-3 items-center">
        <div
          onClick={() => navigate("/")}
          className="font-poppins cursor-pointer text-xl text-[#45464E] font-medium"
        >
          <div>Dashboard</div>
        </div>
        <div className="flex gap-5 items-center">
          <select className="px-4 py-2 font-inter text-sm border-none rounded-xl bg-[#FEF5EA]">
            <option value="shop">Nanny's Shop</option>
            <option value="shop">Nanny's Shop</option>
            <option value="shop">Nanny's Shop</option>
            <option value="shop">Nanny's Shop</option>
          </select>
          <div>
            <Notification />
          </div>
          <div>
            {/* <img src={profile} alt="" /> */}
          </div>
        </div>
      </div>
      <hr />
      <div className="px-5 bg-white py-2">
        <Home />
      </div>
    </>
  );
};

export default Navbar;
