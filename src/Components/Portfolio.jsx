import React from "react";
import { TypeAnimation } from 'react-type-animation';
const PortfolioCard = () => {
  return (
    <div
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
      className="px-5 lg:p-5 text-white w-[80vw] lg:w-[30vw] backdrop-blur-md border border-gray-500 select-none rounded-2xl my-20 lg:my-[200px] hover:scale-110 transition-all delay-100 hover:border-white shadow-lg portfolio-card"
    >
      <h3 className="text-4xl lg:text-6xl font-bold py-3 border-2 border-transparent border-b-gray-400 ">
        Hello 👋
      </h3>
      <h3 className="text-xl lg:text-2xl py-3 border-2 border-transparent border-b-gray-400">
        Aadya Vibhuti here
      </h3>
      <h3 className="text-xl lg:text-2xl py-3">I am a</h3>
      <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              '<MERN Stack Developer/>',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              '<Frontend Developer/>',
              1000,
              '<Backend Developer/>',
              1000,
              '<Learner/>',
              1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
            className='gradient-text'
          />
    </div>
  );
};

export default PortfolioCard;