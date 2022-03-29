import React from "react";
import Theme from "../Img/theme.jpg";
import Check from "../Img/check.png";
import "../Styles/banner.css";
import { FaEllipsisH, FaHeadphones, FaCheck } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="banner">
      <img src={Theme} alt="" className="bannerImg" />

      <div className="content">
        <div className="breadCrump">
          <p>
            Home <span>/Popular Artist</span>
          </p>
          <i>
            <FaEllipsisH />
          </i>
        </div>
        <div className="artist">
          <div className="left">
            <div className="name">
              <h2>Coldplay</h2>
              <img src={Check} alt="" />
            </div>
            <p>
              <i>
                <FaHeadphones />
              </i>
              21,135,576 <span>Monthly listeners </span>
            </p>
          </div>
          <div className="right">
            <a href="/#">Play</a>
            <a href="/#">
              <i>
                <FaCheck />
              </i>
              Following
            </a>
          </div>
        </div>
      </div>

      <div className="bottomLayer"></div>
    </div>
  );
};

export { Banner };
