import React from "react";
import TeamStructure from "../outTeam/TeamStructure";
import BottomContent from "./BottomContent";

function OurTeamComp() {
  return (
    <div>
      <div className=" flex justify-center">
        <div className=" mx-5 mb-10 rounded-xl border-4 border-indigo-950 sm:w-1/2 ">
          <div className=" my-5 flex justify-center">
            <h1 className=" text-4xl font-bold">About Prowrite By Design</h1>
          </div>
          <div className=" mx-10 mb-5 justify-center flex">
            <p className=" text-center text-2xl">
              Prowrite by Design is a boutique consulting and coaching firm that
              specializes in supporting doctoral students pursuing professional
              doctorates. Our expert team offers tailored guidance to students
              in various fields, including but not limited to, Education (EdD),
              Business Administration (DBA), Nursing Practice (DNP), Psychology
              (PsyD), Public Health (DrPH), and Health Science (DHS). We
              frequently work with students from these disciplines,
              understanding their specific academic requirements and challenges.
              Our services are designed to provide personalized support at every
              stage of their doctoral journey, from research design and
              methodology selection to data analysis and dissertation editing.
              <br />
              Specializes in providing comprehensive academic coaching and
              support services tailored specifically for traditional doctoral
              degree students, such as those pursuing PhDs across various
              disciplines. <br />
              We understand the unique challenges faced by these students, from
              navigating complex research methodologies to managing the demands
              of dissertation writing. Our goal is to equip these scholars with
              the skills and knowledge necessary to excel in their academic
              journeys, ensuring they have the necessary resources to conduct
              rigorous research, publish their findings, and contribute
              meaningfully to their respective fields. This specialized focus
              allows us to address the distinct needs of traditional doctoral
              candidates, helping them achieve academic success and establish
              their credibility in the academic community.
            </p>
          </div>
        </div>
      </div>

      <TeamStructure
        title="Jessica Parker, Ed.D. – Founder & CEO"
        description="I’m a researcher and educator who is passionate about demystifying
            the research and writing process for scholars. My research interests
            are at the intersection of technology and education; I am
            particularly intrigued by the potential of generative AI for
            academic purposes, exploring how this technology can revolutionize
            how we conduct research, teach, and learn. I invite you to follow my
            research journey on ResearchGate. I have worked with a diverse range
            of researchers and scholars, and I continue to teach Doctor of
            Health Sciences students at MCPHS University. Before founding
            Dissertation by Design, I was a Senior Research Director and managed
            several grants with the Harvard School of Dental Medicine and
            Northeastern University School of Nursing."
      />
      <BottomContent />
    </div>
  );
}

export default OurTeamComp;
