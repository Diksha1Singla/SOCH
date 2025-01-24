import React from "react";
import "./Contact.css";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiFillPhone,
} from "react-icons/ai";

const Contact = () => {
  return (
    <>
      <div className="row box">
        <div className="col-md-7">
          <h3 className="my-3">KNOW ABOUT US</h3>
          <h1 className="mt-2">We'd love to hear from you</h1>
          <p className="mt-3 fs-5">
            Have any question in mind or want to enquire? Please feel free to
            contact us through the form or the following details.
          </p>
          <p className="fs-5">
            Ask us anything and we'll help you find the answers within 24hours.
          </p>
        </div>


        <div className="col-md-5">
          <div>
            <h2 className="mt-2">Let's talk! </h2>
            <AiFillPhone className="fs-2" /> <p>+91 9876543210</p>
            <AiFillMail className="fs-2" /> <p>Sochngo@gmail.com</p>
          </div>
          <div className="mt-4">
            <h2>Head Office </h2>
            <p className="fs-5">37C, Chandigarh</p>
          </div>
          <div className="mt-4">
            <a
              href="https://github.com/Diksha1Singla"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub className="foot-icon fs-2 mt-1" />
              GitHub
            </a>
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
            <a
              href="https://www.linkedin.com/in/diksha1singla"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin className="foot-icon fs-2 mt-1" />
              Linkedin
            </a>
            &nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
            <a
              href="https://www.instagram.com/singla_dikshaa"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram className="foot-icon fs-2 mt-1" />
              Instagram
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
