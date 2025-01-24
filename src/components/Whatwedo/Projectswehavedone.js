import React from 'react'
import "./Whatwedo.css";
import i5 from "../../assets/img/havedone11.jpg";
import i6 from "../../assets/img/Project8.jpg";
import i7 from "../../assets/img/havedone2.jpg";

const Projectswehavedone = () => {
  return (
    <div>
       <div className="row box21">
        <div className="col-md-6">
          <h4>PROJECTS WE HAVE DONE</h4>
          <h1 className="mt-4 mx-5">
            We are creating a place where children with special needs can
            thrive.
          </h1>
        </div>
      </div>

      <div className="box4 mb-5">
        <div className=" box411 box41 mt-1">
          <img src={i5} alt="image" />
          <p className="fs-3 text-center my-1">Mission smile 1K </p>
        </div>
        <div className="box42 box411 mt-1">
          <img src={i6} alt="image" />
          <p className="fs-3 text-center my-1">
            Weekly Food Distribution Drive{" "}
          </p>
        </div>
        <div className="box43 box411 mt-1">
          <img src={i7} alt="image" />
          <p className="fs-3 text-center my-1">Monthly public awareness </p>
        </div>
      </div>
    </div>
  )
}

export default Projectswehavedone
