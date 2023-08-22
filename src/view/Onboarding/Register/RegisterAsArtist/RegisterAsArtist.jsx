import React from "react";
import Hero from "../../../../assets/img/registerhero.png";
import { ReactComponent as Logo } from "../../../../assets/svg/Logo.svg";
import { TextInput } from "../../../../components/reusables/TextInput";
import { CustomButton } from "../../../../components/buttons/CustomButton";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

const RegisterAsArtist = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      emailAddress: "",
      firstName: "",
      lastName: "",
      stageName: "",
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
              Take full control <br />
              of your craft
            </div>
          </div>
        </div>

        <div className="w-full text-left h-screen flex justify-center items-center text-white bg-[#1E1E1E]">
          <form className="space-y-5 w-7/12">
            <div className="text-2xl font-bold">Register as an Artist</div>
            <div>
              <TextInput
                label="Email Address"
                placeHolder="Email Address"
                handleChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-2 gap-5">
              <TextInput
                label="First Name"
                placeHolder="First Name"
                handleChange={handleChange}
              />
              <TextInput
                label="Last Name"
                placeHolder="Last Name"
                handleChange={handleChange}
              />
            </div>
            <div>
              <TextInput label="Stage Name" handleChange={handleChange} />
            </div>
            <div>
              <TextInput
                type="password"
                label="Password"
                handleChange={handleChange}
              />
            </div>
            <div>
              <CustomButton labelText={"Register"} buttonVariant="primary" />
            </div>
            <div>
              Already have an account?{" "}
              <span
                className="text-[#FF0202] cursor-pointer"
                onClick={() => navigate("/login-artist")}
              >
                {" "}
                Log In
              </span>
            </div>
            <div>
              By signing up you accept our{" "}
              <span className="text-[#FF0202]">terms and condition</span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterAsArtist;
