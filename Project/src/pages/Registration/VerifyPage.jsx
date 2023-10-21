import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { FaTimes } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from "../../assets/logo/ease read logoooreduced png-09.png"
import "./Reg.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";



const VerifyPage = () => {
  const [loading, setLoading] = useState(false)
  const [modalOpen, setIsModalOpen] = useState(false); 


  const toggleModal = () => {
  setIsModalOpen((prevState) => !prevState);
};
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const onSubmit = async (data, e) => {
    e.preventDefault();
    setLoading(true)
    axios.post(`${baseUrl}/resend-email`, {
      firstName: data.firstName,
      email:data.email,
    })
    .then((response) => {
      setLoading(false)
      toast.success(response.data.msg, {
        onClose: () => {
      },
    })
    }) .catch((error) => {
      setLoading(false)
    toast.error(error.response.data.msg, {
    autoClose: false,
    closeOnClick: true,
    onClose: () => {
    // You can choose to navigate or handle errors differently here
  },
})
    }) ;
  };


  const formSchema = yup.object().shape({
    firstName: yup
      .string()
      .required(""),

    email: yup
      .string()
      .required("")
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Invalid email address"
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <main className="w-full h-screen  md:bg-[#A4C6FC]">
      <div className="w-full h-full flex flex-col   justify-center items-center">
        <div className="bg-white rounded-[12px] md:shadow-2xl w-full h-full px-5 py-5  md:w-[600px] md:h-[500px]">
          <div className="w-full flex mt-[35px] justify-between">
            <Link to="/sign-up" smooth="true" duration={500}>
              <div className="w-[24px] h-[24px] bg-[#D3D7FB] rounded-[60px]  cursor-pointer ">
                <IoIosArrowBack size={22} className="text-blue-700 " />
              </div>
            </Link>
            <img src={logo} alt="logo" className="h-[30px] md:h-[34px] " />
          </div>

          {/* verify part */}
          <div className="w-full  h-[192px]  mt-[150px] flex flex-col justify-center items-center">
            <div className="w-[80px] h-[80px] bg-[#D3D7FB] rounded-[60px] flex justify-center items-center">
              <MdEmail size={32} className="text-blue-700" />
            </div>
            <div className="mt-[15px] text-center">
              <h1 className="text-[24px] md:text-[32px] font-medium ">
                Verify Your Account
              </h1>
              <p className="text-[16px] text-[#85868D] ">
                Please check your email inbox to verify your account
              </p>
              <button className="text-[16px] text-[#85868D] ">
                Didn’t receive any email?
                <span
                  onClick={toggleModal}
                  className="text-blue-800 font-semibold cursor-pointer"
                >
                  Resend link
                </span>
                .
              </button>

              {/* modal */}
              <div
                className={`${
                 modalOpen  ? "modal-overlay show-modal" : "modal-overlay"
                }`}
              >
                <form
                  className="modal-container pt-[2rem]"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    {...register("firstName")}
                    placeholder="firstName"
                    className="w-4/5 md:w-[25rem] h-[3rem] border-2  border-[#B3B4BB] rounded-[5px] outline-none"
                    style={{ paddingLeft: "1rem" }}
                  />
                  <small
                    className="text-red-900 w-4/5 md:w-[25rem] text-left text-[14px] font-bold"
                    style={{
                      visibility: errors.firstName ? "visible" : "hidden",
                    }}
                  >
                    {errors.firstName?.message}
                  </small>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    {...register("email")}
                    placeholder="Email address"
                    className="w-4/5 md:w-[25rem] h-[3rem] border-2  border-[#B3B4BB] rounded-[5px] outline-none"
                    style={{ paddingLeft: "1rem" }}
                  />
                  <small
                    className="text-red-900 w-4/5 md:w-[25rem] text-[14px] text-left font-bold"
                    style={{
                      visibility: errors.email ? "visible" : "hidden",
                    }}
                  >
                    {errors.email?.message}
                  </small>
                  {/* <button className="close-modal-btn" onClick={toggleModal}>
                    <FaTimes></FaTimes>
                  </button> */}
                  <button  className="w-4/5 md:w-[25rem] mt-[10px] h-[50px]  text-center bg-[#4D5DED] opacity-80 hover:opacity-100 text-[16px] md:text-[20px] rounded-[12px] text-white cursor-pointer " >
                    Submit
                  </button>
                </form>
                <button className="close-modal-btn" onClick={toggleModal}>
                    <FaTimes></FaTimes>
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
       {loading && <LoadingSpinner />}
    </main>
  );
};

export default VerifyPage;