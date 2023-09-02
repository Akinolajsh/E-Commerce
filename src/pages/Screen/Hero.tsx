import React from "react";
import pix from "../../assets/slider2.webp";
import pix1 from "../../assets/slider3.webp";
import pix3 from "../../assets/slide1.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsPlayCircle } from "react-icons/bs";

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "",
        position: "absolute",
        top: 300,
        right: 10,
        
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "",
        position: "absolute",
        top: 300,
        left: 10,
        zIndex: 10,
      }}
      onClick={onClick}
    />
  );
}

const Hero = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  //   const settings = {
  // autoplaySpeed: 1000,
  //    linear: true,
  //    autoplay: true,
  //     infinite: true,
  //     speed: 500,
  //     slidesToScroll: 1,
  //     slidesToShow: 1,
  //   };

  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        <div>
          <div
            className=" h-[600px]  flex justify-center items-center"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${pix})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="text-center flex flex-col justify-center items-center ">
              <div className="text-[20px] text-white">
                {" "}
                STYLE PERFECTIONIST!
              </div>
              <div className="text-[50px] font-semibold text-white">
                {" "}
                CHERISHING DESIGNS
              </div>
              <div className="text-[30px] text-white"> SALE UPTO 30% OFF</div>
              <div className="h-[50px] w-[130px] bg-white rounded flex justify-center items-center mt-3">
                {" "}
                SHOP NOW
              </div>
            </div>
          </div>
        </div>
        <div>
          <div
            className="h-[600px] flex justify-center items-center"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${pix1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className=" flex flex-col   ml-[320px] mt-[200px]">
              <div className="text-[20px] text-black"> BE STYLISH!</div>
              <div className="text-[50px] font-semibold text-black">
                {" "}
                LOOK STYLISH
              </div>
              <div className="text-[30px] text-black"> SALE UPTO 40% OFF</div>
              <div className="h-[50px] w-[130px] bg-black rounded flex justify-center items-center mt-3 text-white">
                {" "}
                SHOP NOW
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className="h-[600px] flex justify-center items-center"
            style={{
              backgroundRepeat: "no-repeat",
              backgroundImage: `url(${pix3})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className=" flex flex-col   ml-[380px] mt-[150px]">
              <div className="text-[20px] text-black"> CLEAN & ELEGANT!</div>
              <div className="text-[50px] font-semibold text-black">
                {" "}
                MODERN HANDBAG
              </div>
              <div className="text-[30px] text-black"> SALE UPTO 20% OFF</div>
              <div className="h-[50px] w-[130px] bg-black rounded flex justify-center items-center mt-3 text-white">
                {" "}
                SHOP NOW
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Hero;
