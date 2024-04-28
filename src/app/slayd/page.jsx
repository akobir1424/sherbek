"use client";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import "./TrendingSlider.css";
const TrendingSlider = () => {
  const filteredItems = [
    // {
    //   img: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png",
    // },
    // {
    //   img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/340px-CSS3_logo_and_wordmark.svg.png",
    // },
    // {
    //   img: "https://i0.wp.com/theicom.org/wp-content/uploads/2016/03/js-logo.png?fit=500%2C500&ssl=1&w=640",
    // },
    // {
    //   img: "https://www.lassfar.com/img/all/skills/react-2.png",
    // },
  ];

  const slideLeft = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 200;
  };

  const slideRight = () => {
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 200;
  };
  return (
    <>
      <div className=" w-[440px]  ">
        <div className="bg  w-[438px] h-[87px] justify-center flex items-center  rounded-[20px] ">
          <h2 className="text-[60px] text-[white]">Skills</h2>
        </div>
        <p className="text-white mt-[20px] border-b border-[#12F7D6]">
          I am striving to never stop learning and improving
        </p>
        <div className="mt-[30px]">
          <div className="row-container" id="slider">
            {filteredItems.map((item) => (
              <div key={item.id} className="row-item">
                <div className="item-header">
                  <img className="img" src={item.img} alt="product" />
                </div>
              </div>
            ))}
          </div>
          <div className="title-btns">
            <div className="btns ">
              <button title="scroll left" onClick={slideLeft}>
                <AiOutlineArrowLeft />
              </button>

              <button
                className="ml-[300px]"
                title="scroll right "
                onClick={slideRight}
              >
                <AiOutlineArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TrendingSlider;
