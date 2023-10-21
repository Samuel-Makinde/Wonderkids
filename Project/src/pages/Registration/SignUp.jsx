import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
// import { FcGoogle } from "react-icons/fc";
// import { FaFacebook } from "react-icons/fa";
// import { BsTwitter } from "react-icons/bs";
import { RxPerson } from "react-icons/rx";
import { AiOutlineMail } from "react-icons/ai";
import { BiKey } from "react-icons/bi";
import { Link } from "react-router-dom";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const formSchema = yup.object().shape({
  firstName: yup.string().required("first name can't be empty"),
  lastName: yup.string().required("last name is required"),
  email: yup
    .string()
    .required("email can't be empty")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Invalid email address"
    ),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/,
      "Password must be at least 8 characters and must contain at least a capital letter, a number, and a special character (!@#$%^&*)"
    ),
  cpassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Passwords do not match"),
});

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });


  const [passwordVisibile, passwordNotVisible] = useState(false);
  const togglePassword = () => {
    passwordNotVisible((prevState) => !prevState);
  };

  const [cpasswordVisibile, passwordNotVisibleC] = useState(false);
  const toggleCPassword = () => {
    passwordNotVisibleC((prevState) => !prevState);
  };
  
  const baseUrl = import.meta.env.VITE_BASE_URL;

   const onSubmit = async (data, e) => {
  e.preventDefault();
  setLoading(true)
  try {
    const username = data.firstName + '.' + data.lastName.charAt(0).toLowerCase();
    const response = await axios.post(`${baseUrl}/register`, {
      username: username,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        university: data.university,
        password: data.password,
      })
    setLoading(false)
    toast.success(response.data.msg, {
    onClose: () => {
    navigate("/verify-email-page");
  },
});
  } catch (error) { 
    setLoading(false)
    toast.error(error.response.data.msg, {
    autoClose: false,
    closeOnClick: true,
    onClose: () => {
    // You can choose to navigate or handle errors differently here
  },
});
  }
};

  return (
    <main className={`w-full h-full px-4   text-black z-0 font-roboto md:bg-gradient-to-r from-blue-900 to-[#fff7e5]`}>
      
      <div className="w-full h-full">
        <h1 className="text-2xl md:text-4xl pt-[20px] text-white font-extrabold">
          Welcome to D-Tech
        </h1>
      </div>
      <div className="w-full h-full flex justify-center items-center mt-[60px] pb-[40px]">
        <div className="md:w-9/12 lg:w-8/12 xl:w-7/12 h-full mt-[40px] md:bg-white md:shadow-lg md:rounded-[8px] flex flex-col justify-center items-center  ">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full h-full flex flex-col justify-center items-center px-4"
          >
            <div className="w-full h-full text-center ">
              <h1 className="text-[#04050C] text-[24px] md:text-[48px] ">
                Create your Account
              </h1>
              <p className="text-[#04050C] mt-[20px]">
                sign in to have full access to all the programming language we offer for kidz
              </p>
            </div>

            <div className="w-full md:w-10/12 h-full mt-[70px]">
              <div className="w-full  md:flex justify-between">
                <div className="w-full h-full md:w-5/12 ">
                  <div className="relative w-full  flex flex-col-reverse ">
                    <label
                      className="absolute top-[4px] left-[50px] text-[#04050C] md:text-[12px] leading-[15.22px]"
                      htmlFor="firstname"
                    >
                      first Name
                    </label>
                    <RxPerson
                      size={24}
                      className="absolute top-[20px] left-[10px] text-[#85868D]"
                    />
                    <input
                      type="text"
                      id="firstname"
                      className="  h-[60px] border-2  border-[#B3B4BB] rounded-[5px] outline-none"
                      name="firstName"
                      {...register("firstName")}
                      placeholder="first name"
                      style={{ paddingLeft: "50px" }}
                    />
                  </div>
                  <small
                    className="text-red-900 text-[14px] font-bold"
                    style={{
                      visibility: errors.firstName ? "visible" : "hidden",
                    }}
                  >
                    {errors.firstName?.message}
                  </small>
                </div>

                <div className="w-full h-full mt-[30px] md:mt-0 md:w-5/12 ">
                  <div className="relative w-full  flex flex-col-reverse ">
                    <label
                      className="absolute top-[4px] left-[50px] text-[#04050C] md:text-[12px] leading-[15.22px]"
                      htmlFor="lastname"
                    >
                      Last Name
                    </label>
                    <RxPerson
                      size={24}
                      className="absolute top-[20px] left-[10px] text-[#85868D]"
                    />
                    <input
                      type="text"
                      id="lastname"
                      className=" h-[60px] border-2  border-[#B3B4BB] rounded-[5px] outline-none"
                      name="lastName"
                      {...register("lastName")}
                      placeholder="last name"
                      style={{ paddingLeft: "50px" }}
                    />
                  </div>
                  <small
                    className="text-red-900 text-[14px] font-bold"
                    style={{
                      visibility: errors.lastName ? "visible" : "hidden",
                    }}
                  >
                    {errors.lastName?.message}
                  </small>
                </div>
              </div>

              <div className="w-full h-full mt-[30px]">
                <div className="relative w-full h-full flex flex-col-reverse">
                  <label
                    className="absolute top-[4px] left-[50px] text-[#04050C] md:text-[12px] leading-[15.22px]"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <AiOutlineMail
                    size={24}
                    className="absolute top-[20px] left-[10px] text-[#85868D]"
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    {...register("email")}
                    placeholder="email address"
                    className="w-full h-[60px] border-2  border-[#B3B4BB] rounded-[5px] outline-none"
                    style={{ paddingLeft: "50px" }}
                  />
                </div>
                <small
                  className="text-red-900 text-[14px] font-bold"
                  style={{
                    visibility: errors.email ? "visible" : "hidden",
                  }}
                >
                  {errors.email?.message}
                </small>
              </div>

              <div className="w-full h-full mt-[30px]">
                <div className="relative w-full h-full flex flex-col-reverse">
                  <label
                    className="absolute top-[4px] left-[50px] text-[#04050C] md:text-[12px] leading-[15.22px]"
                    htmlFor="password"
                  ></label>
                  <BiKey
                    size={24}
                    className="absolute top-[20px] left-[10px] text-[#85868D]"
                  />
                  <input
                    type={passwordVisibile ? "text" : "password"}
                    id="password"
                    name="password"
                    {...register("password")}
                    placeholder="********"
                    className="w-full h-[60px] border-2  border-[#B3B4BB] rounded-[5px] outline-none "
                    style={{ paddingLeft: "50px" }}
                  />
                  <button
                    type="button"
                    onClick={togglePassword}
                    className="absolute top-1/3 right-[20px] bg-transparent border-none text-red-900 font-bold"
                  >
                    {passwordVisibile ? "Hide" : "show"}
                  </button>
                </div>
                <small
                  className="text-red-900 text-[14px] font-bold"
                  style={{
                    visibility: errors.password ? "visible" : "hidden",
                  }}
                >
                  {errors.password?.message}
                </small>
              </div>

              <div className="w-full h-full mt-[30px]">
                <div className="relative w-full h-full flex flex-col-reverse">
                  <label
                    className="absolute top-[4px] left-[50px] text-[#04050C] md:text-[12px] leading-[15.22px]"
                    htmlFor="cpassword"
                  ></label>
                  <BiKey
                    size={24}
                    className="absolute top-[20px] left-[10px] text-[#85868D]"
                  />
                  <input
                    type={cpasswordVisibile ? "text" : "password"}
                    id="cpassword"
                    name="cpassword"
                    {...register("cpassword")}
                    placeholder="**********"
                    className="w-full h-[60px] border-2  border-[#B3B4BB] rounded-[5px] outline-none"
                    style={{ paddingLeft: "50px" }}
                  />
                  <button
                    type="button"
                    onClick={toggleCPassword}
                    className="absolute top-1/3 right-[20px] bg-transparent border-none text-red-900 font-bold"
                  >
                    {cpasswordVisibile ? "Hide" : "show"}
                  </button>
                </div>
                <small
                  className="text-red-900 text-[14px] font-bold"
                  style={{
                    visibility: errors.cpassword ? "visible" : "hidden",
                  }}
                >
                  {errors.cpassword?.message}
                </small>
              </div>
              <div className="w-full h-[60px] mt-[40px] flex justify-center bg-blue-900 hover:opacity-80 text-[16px] md:text-[20px] rounded-[12px] text-white cursor-pointer">
                <button className="w-full h-full" type="submit">
                  Sign Up
                </button>
              </div>
            </div>
            <p className="text-[#54555B] text-[12px] mt-[15px] text-center">
              By siging up, you agree to the{" "}
              <Link to="/term-of-use" smooth="true" duration={500} >
              <span className="text-[#4D5DED] cursor-pointer">
                {" "}
                Terms of Service
              </span>{" "}
              </Link>
              and{" "}
              <Link to="/privacy-policy" smooth="true" duration={500}>
              <span className="text-[#4D5DED] cursor-pointer">
                Privacy Policy
              </span>
              </Link>
              {/* , including{" "}
              <span className="text-[#4D5DED] cursor-pointer">Cookie use</span>. */}
            </p>
            <p className="text-[#2F3035] text-[16px] md:text-[20px] mt-[10px]">
              Have an account?{" "}
              <Link to="/login" smooth="true" duration={500}>
                <button className="text-[#4D5DED] cursor-pointer">login</button>
              </Link>
            </p>
          </form>
        </div>
      </div>
      {loading && <LoadingSpinner />}
    </main>
  );
};

export default SignUp;
