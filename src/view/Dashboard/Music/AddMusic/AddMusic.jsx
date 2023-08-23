import React, { useState } from "react";
import DashboardWrapper from "../../../../components/layout/DashboardWrapper";
import { ReactComponent as Music } from "../../../../assets/svg/cryptocurrency_music.svg";
import { ReactComponent as Single } from "../../../../assets/svg/single.svg";
import { CustomButton } from "../../../../components/buttons/CustomButton";
import CenterModal from "../../../../components/Modal/CenterModal";
import { TextInput } from "../../../../components/reusables/TextInput";
import DragDrop from "../../../../components/DnD/DragDrop";
import DragDropMp3 from "../../../../components/DnD/DragDropMp3";

const AddMusic = () => {
  const [showModal, toggleShowModal] = useState(false);
  const handleImageSelect = (audioFile) => {
    // Handle the selected audio file here
    if (audioFile) {
      console.log("Selected audio file:", audioFile);
      // Perform any further processing or state updates
    } else {
      console.log("Audio file removed.");
      // Handle file removal if needed
    }
  };

  const handleAudioSelect = (audioFile) => {
    // Handle the selected audio file here
    if (audioFile) {
      console.log("Selected audio file:", audioFile);
      // Perform any further processing or state updates
    } else {
      console.log("Audio file removed.");
      // Handle file removal if needed
    }
  };

  return (
    <>
      <DashboardWrapper>
        <div className="bg-[#1E1E1E] border border-[#2F2F2F] space-y-5 flex flex-col justify-center items-center mt-10 text-white font-jarkata mx-20">
          <div className=" w-full mt-10 mb-10 items-center">
            <div className="text-sm flex justify-start ml-40 text-[#FF0202] font-bold">
              ← Back
            </div>
            <div className="text-2xl flex justify-center font-bold">
              Release a Single
            </div>
          </div>
          <div className="w-full flex justify-center">
            <form action="" className="w-4/12 py-10 space-y-5">
              <div>
                <label className="text-lg font-semibold" htmlFor="">
                  Upload Cover Art
                </label>
                <div className="mt-2.5">
                  <DragDrop onFileSelect={handleImageSelect} />
                </div>
              </div>
              <div className="">
                <TextInput label="Single Title" placeHolder="" />
              </div>
              <div className="">
                <TextInput label="Language" placeHolder="" />
              </div>
              <div className="">
                <TextInput label="Genre" placeHolder="" />
              </div>
              <div className="">
                <TextInput label="Release Date" placeHolder="" />
              </div>
              <div className="">
                <TextInput label="Record Label (Optional)" placeHolder="" />
              </div>
              <div className="">
                <TextInput label="Main Artist" placeHolder="" />
              </div>
              <div className="">
                <TextInput
                  label="Featured Artist(s) (Optional)"
                  placeHolder=""
                />
              </div>
              <div>
                <label className="text-sm" htmlFor="">
                  Upload Song
                </label>
                <div className="mt-2.5">
                  <DragDropMp3 onFileSelect={handleAudioSelect} />
                </div>
              </div>
              <div>
                <CustomButton labelText={"Save & Continue"} />
              </div>
            </form>
          </div>
        </div>
      </DashboardWrapper>
    </>
  );
};

export default AddMusic;
