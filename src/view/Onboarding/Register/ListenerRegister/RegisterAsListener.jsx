import React from "react";
import Hero from "../../../../assets/img/registeruser.png";
import { ReactComponent as Logo } from "../../../../assets/svg/Logo.svg";
import { TextInput } from "../../../../components/reusables/TextInput";
import { CustomButton } from "../../../../components/buttons/CustomButton";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

const RegisterAsListener = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      emailAddress: "",
      password: "",
    },
  });

  const { handleChange, values } = formik;
  return (
    <>
      <div className="grid grid-cols-1 font-jarkata md:grid-cols-2">
        <div className=" relative text-white h-screen">
          <img src={Hero} className="h-screen w-full object-cover" alt="hero" />
          <div className="absolute mt-10 ml-20 top-0">
            <div>
              <Logo />
            </div>
            <div className="mt-96 text-6xl font-bold">
              Empower your <br />
              <span className="italic">faves</span> directly
            </div>
          </div>
        </div>

        <div className="w-full text-left h-screen flex justify-center items-center text-white bg-[#1E1E1E]">
          <form action="" className="w-7/12 space-y-5">
            <div className="text-2xl font-bold">Register as a Listener</div>
            <div>Connect your wallet to get started</div>
            <div>
              <CustomButton
                labelText={"Connect Wallet"}
                buttonVariant="primary"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterAsListener;
