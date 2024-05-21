import cardImgOne from "../Images/motionarteffect-img2.png";
import cardImgTwo from "../Images/motionarteffect-img1.png";
import cardImgThree from "../Images/motionarteffect-img3.png";
import star from '../Images/motionarteffect-img4.png';



function ThreeCard() {
    return (
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center mt-[50px] px-[10px] gap-[50px] xl:px-[120px]">
        <card className="flex flex-row">
            <div className="flex justify-center items-center text-center">
              <img src={cardImgOne} alt="img"/>
            </div>
            <div className="flex flex-col justify-center items-center text-center ml-[15px]">
              <img src={star} alt="img" className="mb-[10px]"/>
              <p className="text-white">4.5 Score, 9 Reviews</p>
            </div>
        </card>
        
        <card className="flex flex-row">
            <div className="flex justify-center items-center text-center">
              <img src={cardImgTwo} alt="img"/>
            </div>
            <div className="flex flex-col justify-center items-center text-center ml-[15px]">
              <img src={star} alt="img" className="mb-[10px]"/>
              <p className="text-white">4.5 Score, 9 Reviews</p>
            </div>
        </card>

        <card className="flex flex-row">
            <div className="flex justify-center items-center text-center">
              <img src={cardImgThree} alt="img"/>
            </div>
            <div className="flex flex-col justify-center items-center text-center ml-[15px]">
              <img src={star} alt="img" className="mb-[10px]"/>
              <p className="text-white">4.5 Score, 9 Reviews</p>
            </div>
        </card>
      </div>
    );
}

export default ThreeCard;