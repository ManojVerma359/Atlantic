import React from "react";
import approvals_img from '../assets/image/approval_bg.webp'
import blue_ellips from '../assets/image/blue_ellipse.webp'

const Approvals = () => {
  return (
    <>
      <section>
        <div className="pt_top max_width mx-auto">
          <h2 className="text-white fw_ExtraBold ff_poppins text-uppercase fs_lg px-3 container">
            OEM{" "}
            <span className="ff_poppins approval_bg fw-normal">
              {" "}
              Approvals{" "}
            </span>
          </h2>
          <div className="position-relative ">
            <img className="approval_img" src={approvals_img} alt="#" />
            <div className="container  py_spacing1 mt-5 mx_width">
              <p className="max_w  fs_md ff_dmSans fw-normal para_clr">
                At Atlantic Grease and Lubricants, we have{" "}
                <span className="ff_dmSans fw-bold">secured approvals</span>{" "}
                leading automobile manufacturers. Thus, we demonstrate our
                commitment to delivering the best possible outcomes to our
                customers.
              </p>
              <p className="max_w  fs_md ff_dmSans fw-normal para_clr">
              Recognising the{" "}
                <span className="ff_dmSans fw-bold">significance of quality</span>{" "}
                to our valued customers, we uphold the utmost standards of excellence in all our endeavors
              </p>
            </div>
            <img className="blue_ellipse" src={blue_ellips} alt="#" />

          </div>
        </div>
      </section>
    </>
  );
};

export default Approvals;
