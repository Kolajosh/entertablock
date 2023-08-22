import React from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../../assets/img/landing.png";
import { ReactComponent as Logo } from "../../assets/svg/Logo.svg";
import { ReactComponent as Scroll } from "../../assets/svg/Scroll.svg";
import { ReactComponent as Mic } from "../../assets/svg/ep_mic.svg";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="relative bg-black text-white font-jarkata w-full h-screen">
        <img src={Hero} className="w-full object-cover" alt="gero" />
        <div className="absolute mt-10 ml-20 top-0">
          <div>
            <Logo />
          </div>
          <div className="mt-40 text-6xl font-bold">
            Unleashing Potentials, <br />
            Connecting Hearts.
          </div>
          <div className="mt-10 font-normal">
            Empowering Artists and Fans Alike in the Digital Age
          </div>
          <div className="mt-20">
            <Scroll />
          </div>
        </div>
        <div className="w-full bg-black flex p-10 -mt-40 justify-center gap-5">
          <div
            className="w-full cursor-pointer bg-black h-[572px] flex flex-col justify-center border-[#434141] border rounded-lg text-center"
            onClick={() => navigate("/registration-artist")}
          >
            <div className="flex justify-center mt-20 mb-10">
              <Mic />
            </div>
            <div className="font-semibold my-5 text-xl">For Artists</div>
            <div className="mb-20">
              Elevate your earnings (Royalty Transparency), Craft your <br />
              digital identity, and engage your fanbase.
            </div>
          </div>

          <div
            className="w-full cursor-pointer bg-black h-[572px] flex flex-col justify-center border-[#434141] border rounded-lg text-center"
            onClick={() => navigate("/registration-listener")}
          >
            <div className="flex justify-center mt-20 mb-10">
              <Mic />
            </div>
            <div className="font-semibold my-5 text-xl">For Artists</div>
            <div className="mb-20">
              Elevate your earnings (Royalty Transparency), Craft your <br />
              digital identity, and engage your fanbase.
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
