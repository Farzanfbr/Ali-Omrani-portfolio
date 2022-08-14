import { forwardRef } from "react";

const Education = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="h-screen" id="Education">
      <div className="font-bold text-3xl px-9 py-3 align-center border-b-4 border-base-300 mx-9">
        Education
      </div>
      <div className="flex pb-9 pr-9 pl-9 h-full max-h-[90%] justify-between align-center text-left ">
        <ul className="steps steps-vertical">
          <li data-content="" className="step step-primary">
            <div className="flex flex-col text-left justify-start align-top">
              <div className="text-2xl font-bold">2010 - 2014</div>
              <div className="text-md font-bold">
                Allameh Helli High School — Diploma — Math and Physics
                Discipline
              </div>
              <div className="text-sm">GPA 4/4 (19.92/20)</div>
              <div className="text-sm">
                Affiliated with NODET (National Organization for Development of
                Exceptional Talents)
              </div>
            </div>
          </li>
          <li data-content="" className="step step-primary">
            <div className="flex flex-col text-left justify-start align-top pt-7">
              <div className="text-2xl font-bold">2014 - 2019</div>
              <div className="text-md font-bold">
                University of Tehran — B.Sc. — Computer Engineering - Software
              </div>
              <div className="text-sm">
                Cumulative GPA 3.9/4 (18.45/20) — ranked 2nd in the CE track
              </div>
              <div className="text-sm">Last 2 year's GPA 4/4 (19.43/20)</div>
              <div className="text-sm">Best Thesis Award</div>
            </div>
          </li>
          <li data-content="" className="step">
            <div className="flex flex-col text-left justify-start align-top pt-2">
              <div className="text-2xl font-bold">2020 - Present</div>
              <div className="text-md font-bold">
                University of Southern California — Ph.D. — Computer Science
              </div>
              <div className="text-sm">
                Member of Computational Social Science Laboratory
              </div>
              <div className="text-sm">Advisor: Morteza Dehghani</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
});

export default Education;
