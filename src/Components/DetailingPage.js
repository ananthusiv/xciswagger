// DetailingPage.js
import React from "react";
import "./detailing.css";

export const DetailingPage = () => {
  return (
    <div className="detailing-container">
      <div className="detailing-clip-path">
        <div className="detailing-group">
          <img className="detailing-img1" alt="Clip path group" src="images/xci part 1.png" />
          <img className="detailing-img2" alt="Clip path group" src="images/xci part 2.png" />
          <img className="detailing-img3" alt="Clip path group" src="images/xci part 3.png" />
          <img className="detailing-img4" alt="Clip path group" src="images/xci part 4.png" />

          {/* Drawing horizontal and vertical lines */}
          <div className="line-horizontal"></div>
          <div className="line-vertical"></div>
        </div>
      </div>
    </div>
  );
};

export default DetailingPage;
