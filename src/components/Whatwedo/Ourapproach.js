import React from "react";
import "./Whatwedo.css";
import ourapproach from "../../assets/img/approachpic.jpeg";

const Ourapproach = () => {
  return (
    <div>
      <div className="row box21">
        <div className="col-md-6">
          <h2>OUR APPROACH</h2>
          <p className="mt-4 fs-3">
            As a leader in child protection, we use a holistic approach to
            address pressing issues of children such as child labour, child
            trafficking, child marriage, child sexual abuse, education, health &
            nutrition and livelihood for parents. Working in close partnerships
            with visionary donors, governments, businesses, communities,
            families and children, we strive towards creating a child friendly
            world.
          </p>
        </div>
        <div className="col-md-6 text-center box211">
          <img src={ourapproach} alt="image" className="mt-3" />
        </div>
      </div>
    </div>
  );
};

export default Ourapproach;
