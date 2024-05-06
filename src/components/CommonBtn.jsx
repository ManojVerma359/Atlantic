import React from "react";

const CommonBtn = (props) => {
  return (
    <>
      <div>
        <button
          className={`${props.btn} text-uppercase ff_chivo fw-black line_h150 text-white fs_xm btnn`}
        >
          {props.btn1}
        </button>
      </div>
    </>
  );
};

export default CommonBtn;
