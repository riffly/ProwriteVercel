import React from "react";
import img from "../images/img001.jpg";

function ContentHome() {
  return (
    <div>
      <div>
        <img src={img} alt="" />
        <div className=" relative top-0">
          <h1 className=" font-bold text-2xl text-right">Putting Money Where Our Words Are</h1>
          <p className=" text-lg text-right">
            We believe that strong writing skills open minds and doors. As a
            demonstration of our commitment to educational excellence, we donate
            a percentage from every coaching session to help a woman or girl
            find her voice through reading and writing.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContentHome;
