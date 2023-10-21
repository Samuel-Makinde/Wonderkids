import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import axios from "axios";
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";


const UserVerifyEmail = () => {
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const [isVerified, setIsVerified] = useState(false)
    
    const location = useLocation()
    const queryParam = new URLSearchParams(location.search)
  const baseUrl = import.meta.env.VITE_BASE_URL;
    

    const verifyUserToken = async () => {
        setLoading(true)
        try {
            const response = await axios.post(`${baseUrl}/verify-email`, {
                verificationToken: queryParam.get('token'),
                email: queryParam.get('email')
            })
            if(response.data.msg === 'Email verified successfully' || response.data.msg === 'Email has been verified'){
                sessionStorage.setItem("isVerified", "true")
                setIsVerified(true)
            } else {
                setError(true)
            }
        } catch (error) {
            setError(true)
        }
        setLoading(false)
    }

useEffect(() => {
    verifyUserToken()
}, [])

if(loading){
    return <LoadingSpinner />
}
if(error){
    return (
        <div className="w-full h-full">
            <div className="w-full  mt-[50px] px-5 flex flex-col justify-center items-center ">
                <h4 className="text-center text-[18px] md:text-[24px]">An error occur while verifying your account please click on the button below to request for a new verification link</h4>
                <button className="h-[57px] w-[250px] text-white font-semibold cursor-pointer text-center bg-blue-800 rounded-[10px] mt-[25px]">Resend Email</button>
            </div>
            
        </div>
    )
}

if (isVerified || sessionStorage.isVerified === "true") {
    return (
      <main className="w-full h-full">
        <div className="w-full  mt-[50px] px-5 flex flex-col justify-center items-center ">
          <h2 className="text-center text-[18px] md:text-[24px] font-bold">Your Email has been verified</h2>
          <Link to="/login" smooth="true" duration={500}>
            <button className="h-[57px] w-[250px] text-white font-semibold cursor-pointer text-center bg-blue-800 rounded-[10px] mt-[25px]">
              Please login
            </button>
          </Link>
        </div>
      </main>
    );
  }


  return null
}

export default UserVerifyEmail