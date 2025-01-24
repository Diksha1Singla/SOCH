import React from "react";
import CirclePercentage from "./CirclePercentage";
import "./Howwespend.css";

const Howwespend = () => {
  const percentages = {
    clothes: 40,
    food: 25,
    drinks: 25,
    bath: 10,
  };
  return (
    <div className="howwespend">
      <div className="row">
        <div className="col-md-8 mt-3 mb-2">
          <h1 className="mb-3 fs-1">How we spend your donation and where it goes</h1>
          <p className="my-1 fs-5 mb-3">
            We understand that when you make a donation, you want to know
            exactly where your money is going and we pledge to be transparent!
          </p>
          <div className="row" style={{ fontSize: "17px" }}>
            <div className="col-md-3">
              <div
                style={{
                  width: "15px",
                  height: "15px",
                  backgroundColor:"blueviolet",
                }}
              ></div>
              <span>40% Feeding the poor</span>
            </div>
            <div className="col-md-3">
              <div
                style={{
                  width: "15px",
                  height: "15px",
                  backgroundColor: "yellow",
                }}
              ></div>
              <span>25% Healthcare</span>
            </div>
            <div className="col-md-3">
              <div
                style={{
                  width: "15px",
                  height: "15px",
                  backgroundColor: "orange",
                }}
              ></div>
              <span>25% Education</span>
            </div>
            <div className="col-md-3">
              <div
                style={{
                  width: "15px",
                  height: "15px",
                  backgroundColor: "green",
                }}
              ></div>
              <span>10% Housing</span>
            </div>
          </div>
        </div>
        <div className="col-md-4 text-center mt-4">
          <CirclePercentage percentages={percentages} />
        </div>
      </div>
    </div>
  );
};

export default Howwespend;
