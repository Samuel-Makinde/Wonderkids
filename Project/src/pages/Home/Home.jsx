import Layout from "../../layout/Layout";
import { Link } from "react-router-dom";
import {HiOutlineArrowNarrowDown} from "react-icons/hi"
// import compare from "../../assets/Home Landing Image/comparePlan.jpeg";
import FAQPage from "../FAQ/FAQPage";
import children from "../../assets/Home Landing Image/children1.jpg"
import language from "../../assets/Home Landing Image/languages.png"
import learning from "../../assets/Home Landing Image/learningNew.png"
import games from "../../assets/Home Landing Image/kidsGames.jpeg"
import continueLearning from "../../assets/Home Landing Image/continueLearning.png"
import certificate from "../../assets/Home Landing Image/certificate.jpeg"
import contest from "../../assets/Home Landing Image/contestNew.jpeg"
import childrenCoding from "../../assets/Home Landing Image/childrenCoding2.jpg"



const Home = () => {
  return (
    <Layout>
      <main className="w-full h-full pt-[65px] md:pt-0  text-2xl overflow-hidden bg-gradient-to-r from-[#fffefe] to-[#fff7e5] font-roboto">
        <div className="w-full relative">
          <img src={children} alt="image" className="w-screen h-screen" />
          
          <div className="absolute top-[30%] left-[10%] lg:left-[30%] w-[80%] md:w-[600px] h-[200px]   flex flex-col justify-center items-center rounded-[20px] bg-white  text-white font-extrabold text-[24px]">
            <p className="border-4 border-blue-900 bg-blue-900 animate-spin w-[10px] h-[10px] "></p>
            <h1 className="text-[#FFCB3E] text-[16px] sm:text-[18px] md:text-[24px] ">Ready to start coding career for your Kid?
            </h1>
            <h2 className="text-black text-[16px] sm:text-[18px] md:text-[24px] ">Explore all coding path we provide</h2>
            <p className="absolute left-[5%] border-4 border-blue-900 bg-blue-900 animate-spin w-[10px] h-[10px] "></p>
            <p className="absolute right-[5%] border-4 border-blue-900 bg-blue-900 animate-spin w-[10px] h-[10px] "></p>

            <p className="animate-bounce w-8 h-8 flex justify-center items-center rounded-[20px] bg-blue-900 mt-[20px]  ">
              <HiOutlineArrowNarrowDown size={26} />
          </p>
          </div>
          
  
          <div className="absolute w-full  top-[90%] flex flex-col justify-center items-center  md:flex-row md:justify-between px-9 ">
            <div className="w-[320px] sm:w-[40%] md:w-[17%] flex flex-col justify-center items-center h-[200px]  rounded-[15px] bg-[#43ba74] p-4 text-white hover:scale-110 duration-500 shadow-2xl ">
              <h1 className="text-center ">Introduction to Programming</h1>
              <p className="text-[14px] leading-tight mt-[20px] text-center font-serif">You will learn what programming is all about and the different areas we have under it</p>
            </div>
            <div className="w-[320px] sm:w-[40%] md:w-[17%] mt-[40px] md:mt-0 flex flex-col justify-center items-center h-[200px] rounded-[15px] bg-blue-900 p-4 text-white hover:scale-110 duration-500 shadow-2xl">
              <h1 className="text-center">Introduction to JavaScript</h1>
              <p className="text-[14px] leading-tight mt-[20px] text-center font-serif">You will learn basic html, CSS, CSS framework, JavaScript syntax, ES6+ features etc.</p>
            </div>
            
            <div className="w-[320px] md:w-[17%] mt-[40px]  md:mt-0   flex flex-col justify-center items-center h-[200px] rounded-[15px] bg-[#ad3d84] p-4 text-white hover:scale-110 duration-500 shadow-2xl">
              <h1 className="text-center">Introduction to Python</h1>
              <p className="text-[14px] leading-tight mt-[20px] text-center font-serif">You will learn variables and data types, print statements:, conditional statements, loops, functions, input etc</p>
            </div>
            <div className="w-[320px] md:w-[17%] mt-[40px]  md:mt-0  flex flex-col justify-center items-center h-[200px] rounded-[15px] bg-[#cda841] p-4 text-white hover:scale-110 duration-500 shadow-2xl ">
              <h1 className="text-center">Introduction to Alice</h1>
              <p className="text-[14px] leading-tight mt-[20px] text-center font-serif">You will 3D modeling, object interaction, event handling, creating animation, using methods etc</p>
            </div>
            <div className="w-[320px] md:w-[17%] mt-[40px]  md:mt-0  flex flex-col justify-center items-center h-[200px] rounded-[15px] bg-[#b2cb3e] p-4 text-white hover:scale-110 duration-500 shadow-2xl">
              <h1 className="text-center text-[14px] md:text-[18px]">Introduction to Java for Kids:</h1>
              <p className="text-[14px] md:text-[12px] lg:text-[14px] leading-tight mt-[10px] text-center font-serif">You will learn variables and data types, print statements:, conditional statements, loops, Classes and Objects, arrays, user input etc</p>
            </div>
            

          </div>
        </div>
        <div className="w-full h-full   ">
          
          <div className="w-full h-full px-4 md:px-6 lg:px-8 xl:px-12 ">
            <div className="w-full h-full flex flex-col items-center  mt-[1200px] md:mt-[250px] ">
              <h1 className="text-4xl text-blue-900">
                {" "}
                <strong>How it works? </strong>{" "}
              </h1>
              
              <div className="w-full h-full md:grid grid-cols-3 grid-flow-row   gap-y-12 text-[16px] text-gray-700 text-center mt-[50px] leading-normal">
                <div className="w-full h-full flex flex-col items-center ">
                  <img src={language} alt="image" className="rounded-[30px] w-[250px] h-[200px] hover:scale-110 duration-500 " />
                  <p className="mt-[15px] font-bold text-[20px]">
                    Select Programming Language
                  </p>
                </div>
                <div className="w-full h-full flex flex-col items-center mt-[40px] md:mt-0">
                 <img src={learning} alt="learning-image" className="rounded-[30px]  w-[250px] h-[200px] hover:scale-110 duration-500" />
                  <p className="mt-[15px] font-bold text-[20px]">Start learning </p>
                </div>
                <div className="w-full h-full flex flex-col items-center mt-[40px] md:mt-0">
                  <img src={games} alt="gaems-image" className="rounded-[30px]  w-[250px] h-[200px] hover:scale-110 duration-500" />
                  <p className="mt-[15px] font-bold text-[20px]">
                    Stop and play fun games
                  </p>
                </div>
                <div className="w-full h-full flex flex-col items-center mt-[40px] md:mt-0">
                  <img src={continueLearning} alt="leaning"  className="rounded-[30px]  w-[250px] h-[200px] hover:scale-110 duration-500"/>
                  <p className="mt-[15px] font-bold text-[20px]">
                    Continue learning 
                  </p>
                </div>
                <div className="w-full h-full flex flex-col items-center mt-[40px] md:mt-0">
                  <img src={contest} alt="image" className="rounded-[30px]  w-[250px] h-[200px] hover:scale-110 duration-500"  />
                  <p className="mt-[15px] font-bold text-[20px]">
                    Complete Challenge
                  </p>
                </div>
                <div className="w-full h-full flex flex-col items-center mt-[40px] md:mt-0">
                  <img src={certificate} alt="image" className="rounded-[30px]  w-[250px] h-[200px] hover:scale-110 duration-500"  />
                  <p className="mt-[15px] font-bold text-[20px]">
                    Get your certificate
                  </p>
                </div>
              </div>
            </div>
            

            <div className="w-full h-full px-4 md:px-6 md:h-[470px] lg:h-[400px] flex flex-col justify-center items-center md:flex-row items-center  md:justify-evenly pl-3 lg:pl-0 rounded-[15px] mt-[90px] pt-[30px] md:pt-0">
              <div className="text-[40px] w-full md:w-[350px] xl:w-[500px] text-[rgb(239,116,24)]">

              <h1 className="font-bold leading-snug text-center md:text-left">Give your child <br /> the skills of tomorrow  </h1>
              <p className="mt-[20px] text-[18px] text-center md:text-left md:text-[30px] text-gray-800">Online coding school with a choice of <br /> 6 programming language for children aged 5−18</p>
              <Link to="learn-to-code" smooth="true" duration={500}>
              <button className="w-[320px] md:w-[350px] xl:w-[400px] h-[60px] text-[25px] bg-[#EF7418] text-white mt-[40px]  rounded-[20px] hover:opacity-75">Start for free</button>
              </Link>
              </div>
              <div className="relative w-[380px] md:w-[440px] xl:w-[500px]  h-full  px-4 py-4 mt-[40px]">
                <div className="absolute w-[380px] h-[260px] md:w-[440px]  xl:w-[500px] md:h-[280px] xl:h-[340px]  bg-[#B3D523] top-[100%] md:top-[10%] md:left-[10%] rounded-[30px] ">
                </div>
                <div className="absolute   w-full " >
                <img src={childrenCoding} alt="image" className="rounded-[30px]" />
                </div>
              </div>
            </div>

            {/* <div className="mt-[90px] md:hidden ">
              <img src={college} alt="college" className="w-full h-[300px] " />
            </div> */}
            {/* <div
              className={`w-full h-full md:h-[300px] flex items-center justify-between px-10 mt-[90px] border-[3px] border-[#f7b704] shadow-2xl rounded-[10px] ${styles.comparePlan} leading-snug`}
            >
              <div className="text-[16px] mb-[20px]">
                <h5 className="text-[30px] mt-[20px]">Start For free</h5>
                <div className="mt-[15px]">
                  <input
                    type="checkbox"
                    id="first"
                    checked
                    className={`${styles.checkbox}`}
                  />
                  <label htmlFor="first">access to all textbooks</label>
                </div>
                <div className="mt-[7px]">
                  <input
                    type="checkbox"
                    id="second"
                    checked
                    className={`${styles.checkbox} text-yellow-500`}
                  />
                  <label htmlFor="second">
                    access to past questions and answers
                  </label>
                </div>
                <div className="mt-[7px]">
                  <input
                    type="checkbox"
                    id="third"
                    checked
                    className={`${styles.checkbox}`}
                  />
                  <label htmlFor="third">
                    24/7 support to answer any question related to jupeb
                    syllabus
                  </label>
                </div>
                
              </div>
              <div className="w-[300px] h-[250px] ">
                <img src={compare} alt="devices" className="rounded-[10px]" />
              </div>
            </div> */}
          </div>
          {/* Testimonial  */}

         

          <div className="w-full h-full mt-[150px] md:mt-0">
            {/* <Reviews /> */}
            <FAQPage />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
