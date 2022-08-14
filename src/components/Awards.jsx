import { forwardRef } from "react";

const Awards = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="h-screen" id="Honors & Awards">
      <div className="font-bold text-3xl px-9 py-3 align-center border-b-4 border-base-300 mx-9">
        Honors & Awards
      </div>
      <div className="p-9 overflow-auto">
        <table className="rounded-lg table table-zebra table-compact lg:table-normal w-full flex justify-around shadow-lg">
          <thead>
            <tr>
              <th>Name</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="max-w-[15%]">
                  Best Bachelors Thesis Award from Tap30 and University of
                  Tehran
                </div>
              </td>
              <td>2019</td>
            </tr>
            <tr>
              <td>
                Ranked 2nd in Cumulative GPA among near 100 students in Computer
                Engineering
              </td>
              <td>2018</td>
            </tr>
            <tr>
              <td>
                DAAD scholarship for Summer internship under IAESTE program
              </td>
              <td>2017</td>
            </tr>
            <tr>
              <td>Won F.O.E. (Faculty of Engineering) Award</td>
              <td>2016</td>
            </tr>
            <tr>
              <td>
                Ranked 115th among near 300000 Students in university entrance
                exam
              </td>
              <td>2014</td>
            </tr>
            <tr>
              <td>3rd Place in RoboCup Iran Open 2012 junior soccer league</td>
              <td>2012</td>
            </tr>
            <tr>
              <td>Accepted as an exceptional talent in NODET</td>
              <td>2007</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
});

export default Awards;
