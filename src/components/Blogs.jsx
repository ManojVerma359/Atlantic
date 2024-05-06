import React from "react";
import carimg from "../assets/image/carimg.webp";
import CommonBtn from "./CommonBtn";

const Blogs = () => {
    
  const crd = [
    {
      img: { carimg },
      para: "Industrial lubricant oils ensure smooth machine operation by minimizing friction and wear.",
      btn: "btns ",
    },
    {
      img: { carimg },
      para: "Industrial lubricant oils ensure smooth machine operation by minimizing friction and wear.",
      btn: "btns ",
    },
    {
      img: { carimg },
      para: "Industrial lubricant oils ensure smooth machine operation by minimizing friction and wear.",
      btn: "btns ",
    },
  ];
  const cardsdata = crd.map((crd, i) => (
    <div key={i} className="col-lg-4 col-sm-6 position-relative mt-lg-0 mt-4">
    <button className="btn_date text-white ff_dmSans fs_xxm">10-March-2024</button>
   
    <img className="w-100" src={carimg} alt="#" />
   
     <p className=" text-white max-card pt-3 fw-medium ff_dmSans fs_sm">
       {crd.para}
     </p>
     <div className="max_w mx-auto pt-4">
       <CommonBtn btn1="read more" btn="butn1" />
     </div>
   </div>
    
  ));
  return (
    <div className=" pt-space pb_bottom">
      <div className=" container mx-auto">
      <h1 className="text-white fw_ExtraBold text-center ff_poppins text-uppercase fs_lg ">
      explore our{" "}
                <span className="ff_poppins text_bg fw-normal">blogs</span>
                           </h1>
        <div className=" row pt-sm-5 pt-2 mt-2 mt-sm-4 justify-content-center">{cardsdata}</div>
      </div>
    </div>
    
  );
};
export default Blogs;
