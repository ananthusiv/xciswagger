// ProductPage.js
import React from "react";
import "./productpage.css";

function ProductPage() {
  return (
    <div className="container-fluid ProductPage">
      <div className="row">
        {/* Arrow Group Section */}
        <div className="col-lg-4 col-md-6 order-md-2">
          <div className="arrow-group" id="arrowGroup">
            <div className="arrow-item">
              <img className="arrow-1" src="images/arrow.png" alt="arrow-1" />
              <p>CLASSY CARBON STEEL FRAME</p>
            </div>
            <div className="arrow-item">
              <img className="arrow-2" src="images/arrow.png" alt="arrow-2" />
              <p>ZERO SHOCK SUSPENSION</p>
            </div>
            <div className="arrow-item">
              <img className="arrow-3" src="images/arrow.png" alt="arrow-3" />
              <p>FAST & DYNAMIC DISC BRAKES</p>
            </div>
            <div className="arrow-item">
              <img className="arrow-4" src="images/arrow.png" alt="arrow-4" />
              <p>21 HI-SPEED SHIMANO GEARS</p>
            </div>
            <div className="arrow-item">
              <div className="size-guide-container">
                <img
                  className="size-guide"
                  id="size-guide-image"
                  src="images/size guide.png"
                  alt="size-guide"
                />
                <a className="size-guide-text" href="your-link-here">
                  size-guide
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Product Images Section */}
        <div className="col-lg-8 col-md-6 order-md-1">
          <img
            className="bg2-image img-fluid"
            src="images/bg2.png"
            alt="background"
          />
          <img
            className="product2 img-fluid"
            src="images/xci swagger (2).png"
            alt="product"
            id="product2"
          />
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
