import React from "react";
import Motion from "./Images/MotionArtEffect-logo.png";
import PuffParticlesBackground from "./Components/PuffparticleBackground";
import ThreeCard from "./Components/ThreeCard";
import ImgOne from "./Images/motionarteffect-img5.png";
import cardNavPage from "./Images/motionarteffect-img10.png";
import cardNavSection from "./Images/motionarteffect-img11.png";
import ImgTwo from "./Images/motionarteffect-img8.png";
import ImgThree from "./Images/motionarteffect-img9.png";
import ImgFour from "./Images/motionarteffect-img6.png";
import Imgfive from "./Images/motionarteffect-img7.png";
import { PiArrowRightLight } from "react-icons/pi";

function App() {
  function handleSubmit() {
    console.log("click");
  }
  return (
    <div className="App">
      <PuffParticlesBackground />
      <div className="flex z-10 flex-col md:flex-row justify-between px-[10px] xl:px-[120px] py-[50px]">
        <div>
          <img src={Motion} alt="logo" />
        </div>
        <div>
          <button className="custom-button" onClick={handleSubmit}>
            Purchase now
          </button>
        </div>
      </div>
      <div className="grid grid-rows[1fr,2fr] lg:grid-cols-[2fr,4fr,2fr] px-[10px] xl:px-[120px] text-white my-[80px]">
        <div className="flex flex-col self-start pr-[80px]">
          <p className="side-text">Transform Your Website</p>
          <p className="text-[18px] pr-[100px]">With Motion Art Effect</p>
        </div>
        <div className="flex flex-col self-center ">
          <p className="first-text">
            Attract Your Visitors Attention With Colorful Motion Art Effect
          </p>
          <p className="text-[18px] text-[#EEE5FFBD]">
            Unleash the power of creativity with Motion Art for Elementor - your
            ultimate solution for seamlessly integrating captivating animations
            into your website.{" "}
          </p>
        </div>
        <div className="flex flex-col"></div>
      </div>
      <div className="flex justify-center items-center text-white text-[22px] leading-[32px] px-[10px] xl:px-[120px]">
        <p>Trusted by thousands of users around the world</p>
      </div>
      <div>
        <ThreeCard />
      </div>
      <div className=" px-[10px] xl:px-[120px] flex gap-[20px] flex-col md:flex-row justify-between pt-[100px]  z-10">
        <div >
          <p className="text-[#EEE5FF] text-[35px] mb-[15px] leading-[40px] font-normal md:w-[60%]">
            Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
          </p>
          <p className="text-[18px]  text-[#EEE5FFBD] mb-[15px] md:w-[68%]">
            Motion Art for Elementor is a groundbreaking plugin that empowers
            you to effortlessly infuse your website with visually stunning
            motion art elements.
          </p>
          <button className="btn-sec">
            Purchase From Envato <PiArrowRightLight />
          </button>
        </div>
        <div>
          <img src={ImgOne} alt="img" />
        </div>
      </div>
      <div className="flex flex-col my-[100px] z-10  px-[10px] xl:px-[120px]">
        <div className="flex justify-center items-center text-center text-white text-[24px] leading-[32px] md:text-[35px] md:leading-[55px] md:px-[350px]">
          <p >Apply On Any Section Or Enable For Whole Page</p>
        </div>
        <div className="sectionCar">
          <sectionCard className="text-white mx-[10px] mt-[10px] sm:mb-[120px] rounded-3xl p-[30px] ">
            <p className="text-[20px] mb-[10px]">Apply On Section</p>
            <p className="text-[18px] mb-[10px] text-[#EEE5FFBD]">
              Apply on section is a game-changer, offering an unparalleled way
              to manage applications directly from your website.{" "}
            </p>
            <card>
              <img src={cardNavSection} alt="img" />
            </card>
          </sectionCard>

          <sectionCard className="text-white mx-[10px] sm:mt-[120px] rounded-3xl p-[30px]">
            <p className="text-[20px] mb-[10px]">Apply On Page</p>
            <p className="text-[18px] mb-[10px] text-[#EEE5FFBD]">
              Take your website to new heights with Motion Art for Elementor.
              Embrace the power of motion and animation.{" "}
            </p>
            <card>
              <img src={cardNavPage} alt="img" />
            </card>
          </sectionCard>
        </div>
      </div>
      <card className="card-third">
        <p className="text-[#EEE5FF] text-[20px] sm:text-[25px] leading-[30px] sm:leading-[40px]">
          Supported by All Popular Browsers
        </p>
        <p className="text-[#EEE5FFBD] text-[18px] my-[20px] md:w-[35%] leading-[32px]">
          Rest assured, Motion Art is designed to be compatible with all major
          web browsers.
        </p>
        <img src={ImgTwo} alt="img" />
      </card>
      <div className="py-[100px] px-[10px] flex flex-col justify-center items-center text-center z-10">
        <div className="flex flex-col justify-center items-center text-center ">
          <p className="text-[#EEE5FF] text-[40px] leading-[55px] mb-[10px] md:w-[40%]">
            An All-Round Plugin With Powerful Features
          </p>
          <p className="text-[18px] text-[#EEE5FFBD] md:w-[45%] leading-[40px]">
            Whether you're a seasoned web designer or just starting out, Motion
            Art for Elementor seamlessly integrates with the Elementor platform,
            providing you with a seamless and intuitive experience.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-[20px] px-[10px]  xl:px-[120px] pt-[50px]">
          <card className="card-last">
            <div>
              <img src={ImgThree} alt="img" className="mb-[30px]" />
            </div>
            <p className="text-[23px] mb-[10px] text-[#EEE5FF] px-[30px]">
              Light Weight
            </p>
            <p className="text-[18px] text-[#EEE5FFBD] px-[30px]">
              Motion Art for Elementor is designed to be lightweight.
            </p>
          </card>

          <card className="card-last">
            <img src={ImgFour} alt="img" className="mb-[30px]" />
            <p className="text-[23px] mb-[10px] text-[#EEE5FF] px-[30px]">
              100% Responsive
            </p>
            <p className="text-[18px] text-[#EEE5FFBD] px-[30px]">
              Create a consistent visual experience across all devices.
            </p>
          </card>

          <card className="card-last">
            <img src={Imgfive} alt="img" className="mb-[30px]" />
            <p className="text-[23px] mb-[10px] text-[#EEE5FF] px-[30px]">
              User Friendly Interface
            </p>
            <p className="text-[18px] text-[#EEE5FFBD] px-[30px]">
              Ensure a smooth experience for both applicants and administrators.
            </p>
          </card>
        </div>
      </div>
      <footer className="footer">
        <div className="text-[14px] text-[#EEE5FFB8]">© 2023 Copywrite. All rights reserved by QodeMatrix</div>
        <div className="flex flex-row text-[16px] gap-[20px] text-[#EEE5FFB8]">
          <p>Documentation</p>
          <p>Support</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
