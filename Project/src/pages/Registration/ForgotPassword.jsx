import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useState } from "react"
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";


const ForgotPassword = () => {
    const [loading, setLoading] = useState(false)
    const navigate =useNavigate()
    
    const onSubmit = async(data, e) => {
        e.preventDefault(),
        setLoading(true)
        axios.post(`https://jupeb-site-backend.onrender.com/api/v1/forgot-password`, {
            email:data.email
        })
        .then((response) => {
            setLoading(false)
            toast.success(response.data.msg, {
                onClose: () => {
                    navigate("/login");
                },
            })
        }).catch((error) => {
            setLoading(false)
            toast.error(error.response.data.msg, {
                autoClose: false,
                closeOnClick: true,
                onClose: () => {}
            })
        })
    }
    const formSchema = yup.object().shape({
        email: yup
          .string()
          .required("email address is required")
          .matches(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Invalid email address"
          ),
      });
      const {
        register,
        handleSubmit,
        formState: {errors }, 
      } = useForm({
        resolver: yupResolver(formSchema),
      });

  return (
    <div className="w-full h-full mt-[4rem] px-4  ">
        <h1 className="text-[#04050C] text-[24px] font-semibold text-center">Forgot Password</h1>
        <p className="text-[#04050C] mt-[5px] text-center ">input the email address you register with to get a  reset password link</p>
      <form className=" w-full  h-[10rem]  px-4 " onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex flex-col justify-center items-center  mt-[40px]">
            <label
                    className="w-[345px] md:w-[25rem] font-medium text-[#04050C] text-left md:text-[20px] leading-[15.22px]"
                    htmlFor="email"
                  >Email address</label>
        <input
          type="email"
          id="email"
          name="email"
          {...register("email")}
          placeholder="Email address"
          className="w-[345px] md:w-[25rem] h-[50px] border-2  border-[#B3B4BB] rounded-[12px] outline-none   pl-[10px] mt-[1rem]"
          />
           <small
            className="text-red-900 text-[14px] w-[345px] md:w-[25rem] text-left font-bold"
            style={{
              visibility: errors.email ? "visible" : "hidden",
            }}
          >
            {errors.email?.message}
          </small>

          <button
          className="w-[345px] md:w-[25rem] mt-[70px] h-[50px]  text-center bg-[#4D5DED] opacity-80 hover:opacity-100 text-[16px] md:text-[20px] rounded-[12px] text-white cursor-pointer "
        >
          Submit
        </button>
          </div>
        
      </form>
      {loading && <LoadingSpinner />}
    </div>
  );
};

export default ForgotPassword;