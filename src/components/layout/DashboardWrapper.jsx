import React from "react";
import Navbar from "../navbar/Navbar";
import ReactSuspenceWrapper from "./ReactSuspenseWrapper";
import Sidebar from "../sidebar/Sidebar";

const DashboardWrapper = ({ children }) => {
  return (
    <ReactSuspenceWrapper>
      <div className="min-h-screen bg-[#EEF0FA] w-full pb-20 overflow-scroll">
        <div className="mx-auto">
          <div className="">
            <Navbar />
            {children}
          </div>
        </div>
      </div>
    </ReactSuspenceWrapper>
  );
};

export default DashboardWrapper;
