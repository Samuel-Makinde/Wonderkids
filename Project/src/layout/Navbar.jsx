import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineLogout } from "react-icons/ai";
// import { TbCurrencyNaira } from "react-icons/tb";
import { GoPeople } from "react-icons/go";
// import { IoPricetagOutline } from "react-icons/io5";
import { MdOutlineContactPhone } from "react-icons/md";
import { FiBookOpen, FiBook } from "react-icons/fi";
import { RxPerson } from "react-icons/rx";
import { useGlobalContext } from "../context/AuthContext";
import logo from "../assets/logo/ease read logoooreduced png-09.png"
// import Bglogo from "../assets/logo/ease read logooo png version-07.png"





const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const {user, LogOut} = useGlobalContext()

  // To set mobile navbar toggle
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <main className="fixed w-full h-[60px] flex justify-between items-center px-4 md:px-6 lg:px-8 xl:px-12 bg-white text-gray-800 shadow-md z-30 font-euclid capitalize">
      <div onClick={handleToggle} className="md:hidden z-30">
        {toggle ? (
          <div className="w-[32px] h-[32px] bg-[#EDEFFD] cursor-pointer flex justify-center items-center rounded-[20px]">
            <FaTimes className="text-[#54555B] w-[18px] h-[16px]  transform ease-in-out delay-300 duration-500  hover:scale-110 " />
          </div>
        ) : (
          <FaBars className="text-[#54555B] w-[30px] h-[24px]  cursor-pointer transform hover:scale-110 ease-in-out delay-300 duration-500 " />
        )}
      </div>
      <Link to="/" smooth="true" duration={500}>
        <div className=" h-[28px] md:h-full  md:flex items-center  cursor-pointer ">
          {/* <img src={logo} alt="logo"  className=" h-[30px] md:h-[34px]" /> */}
          <p className="text-[30px] text-blue-900">D-Tech</p>


        </div>
      </Link>

      {/* mobile-view-navbar */}
      <ul
        className={` transform  ease-in-out duration-500 delay-150 ${
          toggle ? "translate-x-0" : "-translate-x-full"
        } w-3/4 bg-white absolute top-0 left-0 h-screen md:hidden flex flex-col  pt-[50px]  shadow-md `}
      >
        {user ? 
        ( <p className="w-full text-center text-[22px] font-semibold">Welcome {user}</p>  )
        : 
        ( 
          <div>
            <Link to="/sign-up" smooth="true" duration={500} >
               <li className="text-[#04050C] leading-[20px] text-[16px] flex px-[24px] py-[16px] mt-[50px] font-medium">
          <RxPerson />
          <h1 className="pl-[10px] cursor-pointer">Sign UP</h1>
        </li>
        </Link>

        <Link to="/login" smooth="true" duration={500}>
        <li className="text-[#54555B] leading-[20px] text-[16px] flex  px-[24px] py-[16px] font-normal ">
          <RxPerson />
          <h1 className="pl-[10px] cursor-pointer">Log in</h1>
        </li>
        </Link>

          </div> 
        ) 
        }
       

        <Link to="/" smooth="true" duration={500}>
          <li className={`${user ? " mt-[50px]" : "mt-0"} text-[#54555B] leading-[20px] text-[16px] flex  px-[24px] py-[16px] font-normal `}>
            <AiOutlineHome size={20} />
            <h1 className="pl-[10px] cursor-pointer">Home</h1>
          </li>
        </Link>

        <Link to="/about" smooth="true" duration={500}>
          <li className="text-[#54555B] leading-[20px] text-[16px] flex  px-[24px] py-[16px] font-normal ">
            <GoPeople size={20} />
            <h1 className="pl-[7px] cursor-pointer">About</h1>
          </li>
        </Link>

        <Link to="/learn-to-code" smooth="true" duration={500}>
        <li className="text-[#54555B] leading-[20px] text-[16px] flex  px-[24px] py-[16px] font-normal ">
          <FiBook size={20} />
          <h1 className="pl-[10px] cursor-pointer"> Learn-to-code</h1>
        </li>
        </Link>

        <Link to="/fun-and-game" smooth="true" duration={500}>
        <li className="text-[#54555B] leading-[20px] text-[16px] flex  px-[24px] py-[16px] font-normal ">
          <FiBook size={20} />
          <h1 className="pl-[10px] cursor-pointer"> Fun And Games</h1>
        </li>
        </Link>

        <li className=" flex border-b-2 mt-[10px] border-b-[#D4D5DB] mx-[15px] "></li>

        

        {/* <li className="text-[#54555B] leading-[20px] text-[16px] flex  px-[24px] py-[16px] font-normal ">
          <img src={contacts} alt="contact" className="cursor-pointer" />
          <h1 className="pl-[10px] cursor-pointer">Contact us</h1>
        </li> */}

        <Link to="/contact" smooth="true" duration={500}>
          <li className="text-[#54555B] leading-[20px] text-[16px] flex  px-[24px] py-[16px] font-normal ">
            <MdOutlineContactPhone size={24} />
            <h1 className="pl-[10px] cursor-pointer">Contact</h1>
          </li>
        </Link>

        {/* <Link to="/pricing" smooth="true" duration={500}>
          <li className="text-[#54555B] leading-[20px] text-[16px] flex  px-[24px] py-[16px] font-normal ">
            <IoPricetagOutline size={24} />
            <h1 className="pl-[10px] cursor-pointer">Pricing</h1>
          </li>
        </Link> */}
        { user ?  (
          <li className="text-[#54555B] leading-[20px] text-[16px] flex  px-[24px] py-[16px] font-normal"
          onClick={LogOut}
          >
            <AiOutlineLogout size={24} />
            <h1 className="pl-[10px] cursor-pointer">LogOut</h1>
          </li>
        ) : ""}
        
      </ul>

      {/* big screen topBar */}

      <ul className="hidden flex-row space-x-3 lg:space-x-6   md:flex items-center">
         
        <li>
          <Link to="/" smooth="true" duration={500}>
            {" "}
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" smooth="true" duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="/learn-to-code" smooth="true" duration={500}>
          Learn-to-code
          </Link>
        </li>
        <Link to="/fun-and-game" smooth="true" duration={500}>
           <li>Fun and Game</li>
        </Link>
       
        <li>
          <Link to="/contact" smooth="true" duration={500}>
            Contact
          </Link>
        </li>

        {/* <Link to="/pricing" smooth="true" duration={500}>
          <button className="bg-[#4190EA] rounded-md shadow-md shadow-[#4190EA] hover:opacity-80 flex text-white px-[10px] py-[7px]">
            <TbCurrencyNaira size={24} className="mr-[5px]" />
            Pricing
          </button>
        </Link> */}

        {user ? 
        ( 
        <div className="flex flex-col text-center ">
          <p className=" text-[22px] font-semibold md:text-[18px] lg:text-[20px]">Welcome {user}</p> 
          <p className="font-medium cursor-pointer"
          onClick={LogOut}
          >Logout</p>
        </div> 
          )
        : 
        ( 
          <div className="flex ">
            <Link to="/sign-up" smooth="true" duration={500} >
               <li >
          <h1 >Sign-up</h1>
        </li>
        </Link>

        <Link to="/login" smooth="true" duration={500}>
          <li className="pl-[20px]" >
          <h1 >Log in</h1>
        </li>
        </Link>

          </div> 
        ) 
        }
        {/* <Link to="/signup" smooth="true" duration={500}>
        <li >
          <h1 >Sign-up</h1>
        </li>
        </Link>

        <Link to="/login" smooth="true" duration={500}>
        <li >
          
          <h1 >Log in</h1>
        </li>
        </Link> */}
      </ul>
    </main>
  );
};

export default Navbar;
