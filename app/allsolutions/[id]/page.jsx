import React from "react";
import Heading from "../../_components/Heading";
import Solution from "../../_components/Solution";
import axios from "axios";
import Singlesolution from "@/app/_components/Singlesolution";
import { WhoWeAssist } from "@/app/_components/WhoWeAssist";
import { AwardsandReco } from "@/app/_components/AwardsandReco";
import GetanExpert from "@/app/_components/GetanExpert";
const getsolution = async (id) => {
  const respsonse = await axios.get(
    `http://localhost:3000/api/solutions/${id}`
  );
  return respsonse.data.singleSolution;
};
const page = async ({ params }) => {
  const id = params.id;
  const solution = await getsolution(id);
  return (
    <>
      {
        <>
          <div className="bg-blue-50">
            <Heading
              heading={solution?.solution_title}
              subheading={solution?.solution_description}
              link={solution?.button_link}
              linktext={solution?.button_text}
            />{" "}
          </div>
          <div className="2xl:container 2xl:mx-auto"><Solution
            buttonlink={solution?.solution_first.button_link}
            buttontext={solution?.solution_first.button_text}
            heading={solution?.solution_first.solution_title}
            points={solution?.solution_first.solution_points}
            imagelink={solution?.solution_first.solution_image}
          />
          <div className=" flex flex-col items-center justify-center">
           
          {solution?.solution_section.map((e, i) => (
            <Singlesolution key={i} index={i} data={e} />

          ))}
         
          </div>
          </div>
          <GetanExpert/>
          <WhoWeAssist/>
        </>
      }

    </>
  );
};

export default page;
