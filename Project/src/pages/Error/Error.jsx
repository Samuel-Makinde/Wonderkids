import { Link } from 'react-router-dom'
import error from "../../assets/error-101407_640.jpg"

const Error = () => {
  return (
    <div className='w-full h-full  font-bold text-[24px] md:text-[30px] text-center'>
        <div className='w-full h-screen flex flex-col md:flex-row justify-center items-center '>
            <div >

        <img src={error} alt="error" className='w-[300px]' />
            </div>
        <div className='mt-[10px]'>
            <h1 className='text-[20px] md:text-[30px]'>The page you are looking for does not exist</h1>
            <Link to='/'  >
        <button className='h-[57px] mt-[10px] w-[340px] rounded-[10px] bg-[#4190EA] hover:shadow-xl ' >
             Back to Home
        </button>
        </Link>
        </div>
        </div>
        
      </div>
  )
}

export default Error