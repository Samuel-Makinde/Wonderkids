import Layout from "../../layout/Layout";
import vision from "../../assets/Home Landing Image/visionNew.jpg"
import missionVission from "../../assets/Home Landing Image/missionVision.jpg"

const About = () => {
  return (
    <Layout>
      <main className=" w-full h-full mb-[70px] md:mb-[140px]">
        <div className="md:pt-[80px] pt-[80px] px-4 md:px-6 lg:px-8 xl:px-12">
          <div className=" w-full h-full md:grid md:grid-cols-2 md:gap-10 overflow-hidden">
            <h1 className=" font-semibold text-[24px] leading-[30.43px] md:text-[48px] lg:w-[613px] md:w-[400px] md:h-[183px]  md:leading-[60.86px]">
              At <span className="text-blue-900">D-Tech</span> We are
              passionate about your academic success.
            </h1>
            <p className="font-regular lg:w-[469px] mt-[25px] md:h-[80px] md:mt-[103px] md:mr-[20px] break-words leading-[20.29px] text-[#54555B] text-[16px]">
              Welcome to D-Tech, your gateway to a world of unending opportunities. We are deeply committed to your future success, and our platform offers a range of activities to support your learning journey.
            </p>
          </div>
          <div className="hidden md:flex md:border-b-2 mt-[30px] md:border-b-[#D4D5DB]   "></div>

          <div className="w-full md:h-[400px] flex flex-col-reverse md:flex-row  justify-around">
            <div>
              <h1 className="md:mt-[70px]   font-semibold text-[24px] text-[#2F3035] md:text-[48px]  md:h-[61px]  md:leading-[60.86px]">
                Our Mission
              </h1>
              <p className="text-[#85868D]  text-[16px]  font-regular leading-[20.29px] md:w-[350px] lg:w-[469px] h-[80px]">
                Empowering children through enjoyable coding education to spark critical thinking, problem-solving skills, and a genuine passion for coding
              </p>
            </div>
            <div className="hidden md:flex h-full md:mt-[70px] mt-[50px] ">
              {/* <p>quality image present</p> */}
              <img
              className="  h-[273px] md:h-[400px] "
              src={missionVission}
              alt="aboutme"
            />
            </div>
            <div className="md:hidden w-full flex justify-center h-full md:mt-[70px] mt-[50px] ">
              {/* <p>quality image present</p> */}
              <img
              className="  h-[273px] md:h-[400px] "
              src={missionVission}
              alt="aboutme"
            />
            </div>
            
          </div>

          <div className=" w-full h-full md:h-[400px] flex flex-col-reverse md:flex-row  justify-around">
            

            <div className="hidden md:flex mt-[40px] h-full  ">
              <img
              className=" md:h-[400px] h-[273px] "
              src={vision}
              alt="aboutme"
            />
            </div>
            <div className="md:hidden w-full flex justify-center mt-[40px] h-full  ">
              <img
              className=" md:h-[400px] h-[273px] "
              src={vision}
              alt="aboutme"
            />
            </div>
            <div className="md:mt-[120px] mt-[70px]">
              <h1 className="text-[#2F3035] text-[24px] mt-[20px] md:mt-0  font-semibold md:text-[48px] md:leading-[60.86px] md:w-[336px] md:h-[61px]">
                Our Vision
              </h1>
              <p className=" font-regular  md:w-[350px] lg:w-[469px] md:h-[80px]  break-words leading-[20.29px] text-[#85868D] text-[16px]">
                Our goal is to create an engaging online environment where kids can explore the joy of programming safely. We aim to nurture young, tech-savvy, problem-solving, and innovative minds who will shape the digital future.
              </p>
            </div>
          </div>

         <div className="hidden md:flex md:border-b-2 mt-[100px] md:border-b-[#D4D5DB]   "></div>
        </div>              
      </main>
    </Layout>
  );
};

export default About;
