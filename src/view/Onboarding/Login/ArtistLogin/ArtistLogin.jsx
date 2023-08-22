import React from "react";
import Hero from "../../../../assets/img/loginhero.png";
import { ReactComponent as Logo } from "../../../../assets/svg/Logo.svg";
import { TextInput } from "../../../../components/reusables/TextInput";
import { CustomButton } from "../../../../components/buttons/CustomButton";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

const ArtistLogin = () => {
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
              Unleash your <br />
              potentials
            </div>
          </div>
        </div>

        <div className="w-full text-left h-screen flex justify-center items-center text-white bg-[#1E1E1E]">
          <form action="" className="w-7/12 space-y-5">
            <div className="text-2xl font-bold">Hello Artist! Login</div>
            <div>
              <TextInput
                label="Email Address"
                placeHolder="Email Address"
                handleChange={handleChange}
              />
            </div>
            <div>
              <TextInput
                type="password"
                label="Password"
                handleChange={handleChange}
              />
            </div>
            <div>
              <CustomButton labelText={"Login"} buttonVariant="primary" />
            </div>
            <div>
              Don't have an account?{" "}
              <span
                className="text-[#FF0202] cursor-pointer"
                onClick={() => navigate("/registration-artist")}
              >
                {" "}
                Register
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ArtistLogin;
