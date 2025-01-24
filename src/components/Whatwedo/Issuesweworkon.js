import React from 'react'
import './Whatwedo.css';
import i1 from "../../assets/img/image1.jpg";
import i2 from "../../assets/img/image6.jpg";
import i3 from "../../assets/img/image3.png";
import i4 from "../../assets/img/image4.jpg";

const Issuesweworkon = () => {
  return (
   
    <div className=" box12 row">
    <h3 className="mb-5">ISSUES WE WORK ON</h3>
    <div className="col-md-3 box112 mt-1 ">
      <div className="fs-1">Child Labour</div>
      <img src={i1} alt="image" className="my-1 box1121" />
      <div className="mt-3 fs-5">
        "Children are not tools for labor; they are the seeds of our future,
        meant to blossom with education, love, and opportunities, not wither
        under the burden of exploitation."
      </div>
    </div>

    <div className="col-md-3 box112 mt-1">
      <div className="fs-1">Child Trafficking</div>
      <img src={i2} alt="image" className="my-1 box1122" />
      <div className="mt-3 fs-5">
        "Every child deserves the freedom to dream, not the chains of
        trafficking that steal their innocence and shatter their hopes."
      </div>
    </div>

    <div className="col-md-3 box112 mt-1">
      <div className="fs-1">Health and Nutrition</div>
      <img src={i3} alt="image" className="my-1 box1123" />
      <div className="mt-3 fs-5">
        "Nourishing the bodies and minds of our children is not just a
        responsibility, it is an investment in a healthier, brighter, and
        more promising future."{" "}
      </div>
    </div>
    <div className="col-md-3 box112 mt-1">
      <div className="fs-1">Education & Livelihood</div>
      <img src={i4} alt="image" className="my-1 box1124" />
      <div className="mt-3 fs-5">
        "Education is the key that unlocks the doors of opportunity,
        empowering children to reach for the stars and realize their full
        potential."
      </div>
    </div>
  </div>
  )
}

export default Issuesweworkon
