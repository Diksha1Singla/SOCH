import React from "react";
import "./About.css";
import s1 from "../../assets/img/image9.jpg"

const About = () => {
  return (
    <>
      <h4 className="mx-5 mt-4">KNOW ABOUT US</h4>
      <div className=" mt-4 mb-5 firstbox">
        <div className=" fs-1 text-center">
          <div>We are a non-profitable organization</div>
        </div>
       
        <div className=" fs-3 mt-2 p-4 firstbox1 text-center">
          <b>
            SOCH was born of a dream to ensure happier childhoods for all
            childrens. In 2014, Rishabh Chopra – started SOCH with his 6 friends
            and with a mission to stop Child Labour and to protect and promote the rights of children,
            ensuring that they have access to education, healthcare, and a safe
            environment.
          </b>
        </div>
       
  
      </div>

      <div className=" box row mt-4">
        <div className="col-md-3 box1 mt-1 mx-5">
          <div className="fs-1">Our Mission</div>
          <div className="mt-3 fs-5">
            "To protect and promote the rights of children, ensuring their
            access to education, healthcare, and a safe environment. We work
            towards eradicating child labor, exploitation, and abuse, empowering
            children to lead dignified lives with equal opportunities for growth
            and development."
          </div>
        </div>

        <div className="col-md-3 box1 mt-1 mx-5">
          <div className="fs-1">Our Vision</div>
          <div className="mt-3 fs-5">
            "A world where every child's rights are safeguarded, free from the
            shackles of child labor and exploitation. We envision a society that
            prioritizes children's well-being, education, and protection,
            empowering them to shape a better future for themselves and their
            communities."
          </div>
        </div>

        <div className="col-md-3 box1 mt-1 mx-5">
          <div className="mt-1 fs-1">
            "The responsibility of change lies with all of us"
          </div>
          <div className="fs-4 mt-3 text-center">~ Rishabh Chopra</div>
        </div>
      </div>

      <div className="mt-4 thirdbox">
        <div className="fs-1 text-center">Awards & Recognition</div>

        <div className="text-center thirdbox1 mt-1 mb-1">
          In over 9 years, SOCH has received many awards in recognition of our
          work towards enabling better futures for underprivileged children.
        </div>

        <div className="row text-center mt-4">
          <div className="col-md-3 box1 mt-1 mx-5 thirdbox2">
            <div className="fs-1"><box-icon type='solid' name='star'></box-icon></div>
            <div className="mb-3  mt-1 fs-5 ">
             Best NGO Award
            </div>
          </div>

          <div className="col-md-3 box1 mt-1 mx-5 thirdbox2">
            <div className="fs-1"><box-icon name='trophy' type='solid' ></box-icon></div>
            <div className="mb-3  mt-1 fs-5 ">
              State Award
            </div>
          </div>

          <div className="col-md-3 box1 mt-1 mx-5 thirdbox2">
            <div className=" fs-1 ">
            <box-icon type='solid' name='heart'></box-icon>
            </div>
            <div className="mb-3 mt-1 fs-5 ">
              NGO of the year Award
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
