import React from "react";
import CommonBtn from "./CommonBtn";
import gold_ellips from '../assets/image/gold_ellipse.webp'

const Lubricants = () => {
  return (
    <>
      <section>
        <div className=" max_width mx-auto">
          <div className="d-flex justify-content-between">
            <div className="text-white position-relative">
              <img className="gold_ellipse" src={gold_ellips} alt="img" />
            </div>
            <div className=" ">
              <h1 className="text-white fw_ExtraBold ff_poppins text-uppercase fs_lg px-3">
                Pioneers of{" "}
                <span className="ff_poppins text_bg fw-normal">Lubricants</span>
                <span className="ff_poppins d-block">
                  {" "}
                  & Grease Manufacturing
                </span>
              </h1>
              <div className="lubricants_img py_spacing mt-5">
                <p className="max_w mx-auto fs_md ff_dmSans fw-normal para_clr">
                  Atlantic Grease & Lubricants is one of the leading
                  manufacturers in the{" "}
                  <span className="ff_dmSans fw-bold">automotive industry</span>{" "}
                  providing high-performance products certified by renowned
                  European and American automobile industries.
                </p>
                <div className="max_w mx-auto pt-4">
                  <CommonBtn btn1="read our story" btn="butn1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Lubricants;
