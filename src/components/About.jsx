import { forwardRef } from "react";

const About = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="lg:h-screen" id="Home">
      <div className="font-bold text-3xl px-9 py-3 align-center border-b-4 border-base-300 mx-9">
        About Me
      </div>
      <div className=" grid gap-4 grid-cols-1 lg:grid-cols-2 p-9 justify-center align-center content-center text-left">
        <div className="max-w-[95%]">
          <ul className="list-none list-inside lg:list-disc">
            <li>
              I am currently a first-year Ph.D. student at the{" "}
              <a
                href="https://www.cs.usc.edu/"
                target="_blank"
                className="text-info hover:text-warning"
              >
                Computer Science Department
              </a>{" "}
              of{" "}
              <a
                href="https://www.usc.edu/"
                target="_blank"
                className="text-info hover:text-warning"
              >
                {" "}
                University of Southern California (USC)
              </a>{" "}
              where I am a member of the{" "}
              <a
                href="https://dornsife.usc.edu/labs/cssl"
                target="_blank"
                className="text-info hover:text-warning"
              >
                Computational Social Science Laboratory (CSSL)
              </a>
              , advised by{" "}
              <a
                href="https://morteza-dehghani.net/"
                target="_blank"
                className="text-info hover:text-warning"
              >
                Prof. Morteza Dehghani
              </a>
              . At CSSL, we are a group of social psychologists and computer
              scientists who aim to answer questions from the world of social
              sciences using a mixture of methods ranging from Natural Language
              Processing and statistical analysis to classic psychological
              surveys and experiments.
            </li>
            <br />
            <br />
            <li>
              My research involves coming up with (sometimes unconventional) NLP
              solutions to these questions, implementing them, and validating
              their results. More recently, I have become interested in the
              fairness of machine learning systems. My goal is to get insight
              from fields of economics, public policy, social psychology,
              ethics, and computer science through collaboration to make NLP
              systems less unfair!
            </li>
          </ul>
        </div>
        <div className="max-w-[95%]">
          <ul className="list-none list-inside lg:list-disc">
            <li>
              Prior to CSSL, I finished my B.Sc. in computer engineering
              (majoring in software) at the{" "}
              <a
                href="https://ece.ut.ac.ir/en"
                target="_blank"
                className="text-info hover:text-warning"
              >
                Department of Electrical and Computer Engineering, University of
                Tehran
              </a>{" "}
              in August 2019. I tried to use my bachelor's to build a solid
              bedrock for my future research. So in addition to taking many
              optional graduate-level courses on math and computer science, I
              started by investigating the Call Data Records of Iran's top
              mobile operators at the Data Science Laboratory at the University
              of Tehran as a keen freshman. Then, trying to stay at the edge of
              research, I spent the 2017 summer at{" "}
              <a
                href="https://www.idmt.fraunhofer.de/en.html"
                target="_blank"
                className="text-info hover:text-warning"
              >
                Fraunhofer IDMT
              </a>{" "}
              in Germany researching on the applications of Deep Learning to
              Music Information Retrieval. After Fraunhofer, following my
              passion to better understand human behavior, I spent a year as a
              Research Assistant at the Cognitive Systems Laboratory at the
              University of Tehran where I compeleted my thesis on utilizing
              attention mechansim in neural networks and won the Best Thesis
              Award for it.
            </li>
            <br />
            <br />
            <li>
              During my bachelors, I was also affiliated with{" "}
              <a
                href="http://robocupap.org/"
                target="_blank"
                className="text-info hover:text-warning"
              >
                RoboCup Asia-Pacific (RCAP) 2018
              </a>
              , a super-regional headquarter representing the{" "}
              <a
                href="https://www.robocup.org/"
                target="_blank"
                className="text-info hover:text-warning"
              >
                RoboCup Federation
              </a>{" "}
              , coordinating RoboCup activities in the Asia Pacific region.
              Before joining University of Tehran, I was a high school student
              at the{" "}
              <a
                href="https://www.helli.ir/portal/"
                target="_blank"
                className="text-info hover:text-warning"
              >
                Allameh Helli Highschool
              </a>{" "}
              which is affiliated with{" "}
              <a
                href="https://en.wikipedia.org/wiki/National_Organization_for_Development_of_Exceptional_Talents"
                target="_blank"
                className="text-info hover:text-warning"
              >
                NODET
              </a>
              .
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
});

export default About;
