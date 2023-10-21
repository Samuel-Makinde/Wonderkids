import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useState, } from "react";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";


const ResetPassword = () => {
  const [loading, setLoading] = useState(false);
  const [passwordVisibile, setPasswordVisibile] = useState(false)
//   const [error, setError] = useState(false);

const navigate = useNavigate()
  const location = useLocation();
  const queryParam = new URLSearchParams(location.search);

  const onSubmit = async (data, e) => {
    e.preventDefault(),
    setLoading(true);

    try {
      const response = await axios.post(
        `https://jupeb-site-backend.onrender.com/api/v1/reset-password`,
        {
          token: queryParam.get("token"),
          email: queryParam.get("email"),
          password: data.resetPassword,
        }
      );
      setLoading(false);
      toast.success(response.data.msg, {
        onClose: () => {
            navigate("/login");
        },
      });
      console.log("sending", response);
    } catch (error) {
    //   setError(true);
      setLoading(false);
      toast.error(error.response.data.msg, {
        autoClose: false,
        closeOnClick: true,
        onClose: () => {
        

        },
      });
    }
  };

  const togglePassword = () => {
    setPasswordVisibile((prevState) => !prevState);
  };

  const formSchema = yup.object().shape({
    resetPassword: yup
      .string()
      .required("Password is required")
      .matches(
        /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{8,}$/,
        "Password must be at least 8 characters and must contain at least a capital letter, a number, and a special character (!@#$%^&*)"
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
    <div className="w-full h-full ">
      <form
        className=" w-full h-[17rem]  flex flex-col justify-center items-center "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-[345px] h-full  ">

        <div className="text-center text-2xl font-bold mt-[70px]"> Reset Password</div>
        <div className="relative w-full  mt-[50px]">
            <label
                     className="w-[345px] md:w-[25rem] font-medium text-[#04050C] text-left md:text-[16px] "
                    htmlFor="resetpassword"
                  >New Password</label>
          <input
          type={passwordVisibile ? "text" : "password"}

            id="resetPassword"
            name="resetPassword"
            {...register("resetPassword")}
            placeholder="**********"
            className="w-[345px] md:w-[25rem] h-[50px] border-2  border-[#B3B4BB] rounded-[5px] outline-none block  pl-[10px] "
          />
          <small
            className="text-red-900 text-[14px] w-[345px] md:w-[25rem] text-left font-bold "
            style={{
              visibility: errors.resetPassword ? "visible" : "hidden",
            }}
          >
            {errors.resetPassword?.message}
          </small>
          <button
                    type="button"
                    onClick={togglePassword}
                    className="absolute top-[24%] right-[20px] md:right-0 bg-transparent border-none text-red-900 font-bold"
                  >
                    {passwordVisibile ? "Hide" : "show"}
                  </button>

          <button  className="w-[345px] md:w-[25rem] mt-[40px] h-[50px]  text-center bg-[#4D5DED] opacity-80 hover:opacity-100 text-[16px] md:text-[20px] rounded-[12px] text-white cursor-pointer " >
                    Submit
                  </button>
        </div>
        
        </div>
      </form>

       {loading && <LoadingSpinner />}

    </div>
  );
};

export default ResetPassword;