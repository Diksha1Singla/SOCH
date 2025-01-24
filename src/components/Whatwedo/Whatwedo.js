import React from "react";
import "./Whatwedo.css";
import Issuesweworkon from "./Issuesweworkon";
import Projectswehavedone from "./Projectswehavedone";
import Introwhatwedo from "./Introwhatwedo";

const Whatwedo = () => {
  return (
    <>
     <Introwhatwedo />
      <Issuesweworkon />
      <Projectswehavedone />
    </>
  );
};

export default Whatwedo;
