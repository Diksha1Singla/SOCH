import React from 'react'
import "./Whatwedo.css";
import imageofwhatwedo from "../../assets/img/childlabour2.jpg";

const Introwhatwedo = () => {
  return (
    <div>
       <div className="row box21">
        <div className="col-md-6">
          <h3>WHAT WE DO</h3>
          <h2 className="mt-4">
            SOCH works with project partners at the grassroots level to create
            sustainable change for India’s children
          </h2>
          <p className="mt-4">
            With your support, we address children’s critical needs by working
            with parents, teachers, communities as well as the children
            themselves. We focus on changing behaviours and practices at the
            grassroots level and influencing public policy at a systemic level –
            thereby creating an ecosystem where children are made the nation’s
            priority.
          </p>
        </div>
        <div className="col-md-6 text-center box211">
          <img src={imageofwhatwedo} alt="image" className="mt-1" />
        </div>
      </div>
    </div>
  )
}

export default Introwhatwedo
