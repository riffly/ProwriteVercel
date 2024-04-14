import React from "react";
import TeamStructure from "../outTeam/TeamStructure";
import BottomContent from "./BottomContent";

function OurTeamComp() {
  return (
    <div>
      <div className=" flex justify-center">
        <div className=" mx-10 mb-10 rounded-xl border-4 border-indigo-950 sm:w-1/2 ">
          <div className=" my-5 flex justify-center">
            <h1 className=" text-4xl font-bold">About Prowrite By Design</h1>
          </div>
          <div className=" mx-10 mb-10 flex justify-center">
            <p className=" text-center text-2xl">
              Prowrite is a specialized professional consulting, research, and
              writing firm dedicated to assisting clinicians and medical
              students who are immersed in the pursuit of professional
              doctorates. Our seasoned team extends customized mentorship and
              academic support specifically for the healthcare sector,
              accommodating the unique needs of disciplines.
              <br />
              <br />
              We are intimately familiar with the rigorous academic demands and
              complex challenges that medical professionals face. Our services
              are finely tuned to guide you through every segment of your
              doctoral odyssey—from conceptualizing a research design and
              choosing the appropriate methodology, through the intricacies of
              data analysis, to the nuanced refinements of manuscript editing.{" "}
              <br />
              <br />
              Our mission is to furnish medical scholars with the necessary
              academic prowess and comprehensive resources required for
              mastering complex clinical research, crafting impactful research
              papers, and making significant contributions to the medical field.
              Our specialized attention ensures that each step towards your
              doctoral achievement is taken with confidence, paving the way for
              your academic accomplishments to enhance your professional
              standing and enrich the medical community at large.
            </p>
          </div>
        </div>
      </div>

      <TeamStructure
        title="Meet the Brilliant Minds of Team Alpha at Prowrite.US!"
        description="We are thrilled to introduce you to our extraordinary team of experts at Prowrite.US. Leading Team Alpha, we have three exceptional leaders:🔬 Doc Andrie, a seasoned Research Scientist renowned for his insightful analyses and innovative approaches to complex problems.📝 Doc Balley, our gifted Writer, whose eloquent prose and sharp wit bridge the gap between intricate research and accessible understanding.🩺 Doc Fiona, a compassionate and dedicated Doctor, whose expertise in medical research is enhancing lives every day.Supporting these incredible professionals, we have a dynamic team of 77 passionate Research Specialists. Together, they delve into diverse fields, pushing boundaries and pioneering new paths in scientific inquiry and applied knowledge.Stay tuned as we explore groundbreaking projects and discover new horizons. Join us on this journey of exploration and excellence!"
      />
      <BottomContent />
    </div>
  );
}

export default OurTeamComp;
