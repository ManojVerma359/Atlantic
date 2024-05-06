import React from "react";
import circle_img from "../assets/image/circle_img.webp";
import img_1 from "../assets/image/img_6.webp";
import img_2 from "../assets/image/img_1.webp";
import img_3 from "../assets/image/img_2.webp";
import img_4 from "../assets/image/img_3.webp";
import img_5 from "../assets/image/img_4.webp";
import img_6 from "../assets/image/img_5.webp";
import img_7 from "../assets/image/img_7.webp";

const Number = () => {
  return (
    <>
      <section className="pt-5">
        <div className="">
          <div className="position-relative">
            <img className="w-100" src={circle_img} alt="img" />
            <a className="" href="">
              <img className="img_1" src={img_1} alt="img_1" />
            </a>
            <a className="" href="">
              <img className="img_2" src={img_2} alt="img_1" />
            </a>
            <a className="" href="">
              <img className="img_3" src={img_3} alt="img_1" />
            </a>
            <a className="" href="">
              <img className="img_4" src={img_4} alt="img_1" />
            </a>
            <a className="" href="">
              <img className="img_5" src={img_5} alt="img_1" />
            </a>
            <a className="" href="">
              <img className="img_6" src={img_6} alt="img_1" />
            </a>
            <a className="" href="">
              <img className="img_7" src={img_7} alt="img_1" />
            </a>
            <div className="top-0"> 
            <h1 className="text-white fw_ExtraBold ff_poppins text-uppercase fs_lg px-3 text-center">
              our{" "}
              <span className="ff_poppins text_bg fw-normal"> numbers </span>{" "}
              say
              <span className="ff_poppins d-block"> about us</span>
            </h1>
            <div className="container">
                <div className="max_ww">
                <p className="fs_xl text-white fw_ExtraBold ff_poppins">20k+</p>
                <p className="fs_xm fw-medium ff_dmSans line_h150 text-white">Happy customers</p>
                    
                </div>
            </div>
          </div>
          </div>
        
        </div>
      </section>
    </>
  );
};

export default Number;
