import React from "react";
import hackerrank from '../assets/hackerrank.png'
import leetcode from '../assets/leetcode.png'
import resume from'../assets/AADYA_RESUME.pdf'
import { MdDownload } from "react-icons/md";

const HomeCard = () => {
  const onButtonClick=()=>{
    const link=document.createElement("a");
    link.href=resume;
    link.download="AADYA_RESUME.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <div className="flex flex-col">
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center mb-20 lg:mb-36">
      <div data-aos="fade-up-right" className="flex flex-col gap-5 lg:w-[50%]">
        <h1 className="text-5xl lg:text-7xl mb-10 gradient-text">Hey!</h1>
        <p className="text-gray-300 text-xl lg:text-2xl ">
          My name is Aadya, and I am a 20 years old MERN Stack Developer from India.I have strong analytical and problem solving skills.I have gained experience  in projects and workshops related to my expertise.

        </p>
        <p className="text-gray-300 text-xl lg:text-2xl ">
          I'm committed to furthering my skills an achieving new milestones in
          my career. Let's connect and create something amazing together!
        </p>
      </div>
      
      <div data-aos="fade-up-left">
        <img
          src="https://avatars.githubusercontent.com/u/135000328?v=4"
          alt="profile"
          className="rounded-full w-[200px] h-[200px] lg:w-[450px] lg:h-[450px] mx-auto"
        />
      </div>
      </div>
      <div className=" gap-3 flex flex-row lg:mt-7 mt-5 mb-6 lg:mb-8">
        <a className="mb-8 flex flex-row mr-2" href="https://leetcode.com/aadyav21/">
          <img src={leetcode} alt="" className='w-[1.4em]'/> 
          <span className=' text-xl lg:text-2xl text-white hover:text-3xl hover:text-purple-500'>Leetcode</span>
        </a>
        <a className="mb-8 flex flex-row ml-2" href="https://www.hackerrank.com/profile/aadyavibhuti30">
          <img src={hackerrank} alt="" className=' w-[1.4em]'/>
          <span className=' text-xl lg:text-2xl text-white hover:text-3xl hover:text-purple-500'>Hackerrank</span>
        </a>
        <div className=" lg:h-8 w-31 px-2 rounded-md ml-10 cursor-pointer transition-all hover:scale-100 bg-blue-600 text-white  hover:bg-blue-800 hover:text-2xl">
          <a className="text-xl hover:text-2xl lg:text-2xl text-white hover:scale:100 " href="mailto:aadyavibhuti30@gmail.com">
              Hire me
          </a>
        </div>
        <button 
          className=" flex flex-row h-8 w-31 px-2 rounded-md ml-10 cursor-pointer transition-all hover:scale-100 bg-blue-600 text-white text-xl hover:text-2xl lg:text-2xl hover:bg-blue-800 "
          onClick={onButtonClick}
          >
            Resume
            <MdDownload className="mt-2"/>
          </button>

      </div>
    </div>
  );
};

export default HomeCard;