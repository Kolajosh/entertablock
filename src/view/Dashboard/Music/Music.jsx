import React, { useState } from "react";
import DashboardWrapper from "../../../components/layout/DashboardWrapper";
import { ReactComponent as MusicIcon } from "../../../assets/svg/cryptocurrency_music.svg";
import { ReactComponent as Single } from "../../../assets/svg/single.svg";
import { CustomButton } from "../../../components/buttons/CustomButton";
import CenterModal from "../../../components/Modal/CenterModal";

const Music = () => {
  const [showModal, toggleShowModal] = useState(false);
  return (
    <>
      <DashboardWrapper>
        <div className="h-[573px] bg-[#1E1E1E] border border-[#2F2F2F] space-y-5 flex flex-col justify-center items-center mt-10 text-white font-jarkata mx-20">
          <div>
            <MusicIcon />
          </div>
          <div className="font-semibold text-center text-2xl">
            Welcome Idan!
            <br />
            Release your first track
          </div>
          <div onClick={() => toggleShowModal((prev) => !prev)}>
            <CustomButton labelText={"+  Add New Release"} />
          </div>
        </div>
      </DashboardWrapper>

      {showModal && (
        <CenterModal
          handleClose={() => toggleShowModal((prev) => !prev)}
          width=""
        >
          <div className="text-white text-center font-semibold text-xl mb-10">
            I want to release
          </div>
          <div className="flex gap-5 justify-between w-full">
            <div className="text-white p-10 bg-[#2F2F2F] border border-[#434141] rounded-xl flex flex-col justify-center items-center">
              <div>
                <Single />
              </div>
              <div className="font-semibold text-xl">A Single</div>
            </div>

            <div className="text-white p-10 bg-[#2F2F2F] border border-[#434141] rounded-xl flex flex-col justify-center items-center">
              <div>
                <Single />
              </div>
              <div className="font-semibold text-xl">An Album</div>
            </div>
          </div>
        </CenterModal>
      )}
    </>
  );
};

export default Music;
