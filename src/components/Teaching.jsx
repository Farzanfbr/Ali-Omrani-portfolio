import { forwardRef } from "react";

const Teaching = forwardRef((props, ref) => {
  return (
    <div ref={ref} id="Teaching">
      <div className="font-bold text-3xl px-9 py-3 align-center border-b-4 border-base-300 mx-9">
        Teaching AssistantShip
      </div>
      <div className="overflow-auto p-9">
        <table className="table table-compact lg:table-normal table-zebra w-full">
          <thead>
            <tr>
              <th className="max-w-lg">Course</th>
              <th>course professor</th>
              <th>Semester</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Introduction to <br /> software testing <br /> [Chief TA]</td>
              <td>Dr. Khamespanah</td>
              <td>Fall 2018</td>
            </tr>
            <tr>
              <td>Introduction to <br /> Network Security</td>
              <td>Dr. Sayad Haghighi</td>
              <td>Fall 2018</td>
            </tr>
            <tr>
              <td>Operating Systems</td>
              <td>Dr. Kargahi</td>
              <td>Fall 2018</td>
            </tr>
            <tr>
              <td>Databases</td>
              <td>Dr. Shakery</td>
              <td>Fall 2018</td>
            </tr>
            <tr>
              <td>Artificial Intelligence <br /> [Chief TA]</td>
              <td>Dr. Moradi</td>
              <td>Spring 2018</td>
            </tr>
            <tr>
              <td>Introduction to <br /> Network Security</td>
              <td>Dr. Sayad Haghighi</td>
              <td>Spring 2018</td>
            </tr>
            <tr>
              <td>Operating Systems</td>
              <td>Dr. Kargahi</td>
              <td>Spring 2018</td>
            </tr>
            <tr>
              <td>Databases</td>
              <td>Dr. Shakery</td>
              <td>Spring 2018</td>
            </tr>
            <tr>
              <td>Operating Systems</td>
              <td>Dr. Kargahi</td>
              <td>Fall 2017</td>
            </tr>
            <tr>
              <td>Databases</td>
              <td>Dr. Shakery</td>
              <td>Fall 2017</td>
            </tr>
            <tr>
              <td>Theory of Formal <br /> languages and Automata</td>
              <td>Dr. Fadaei</td>
              <td>Spring 2017</td>
            </tr>
            <tr>
              <td>Engineering Probability <br /> and Statistics</td>
              <td>Dr. Bahrak</td>
              <td>Fall 2016</td>
            </tr>
            <tr>
              <td>
                Introduction to <br /> Computing Systems <br /> and Programming
              </td>
              <td>Dr. Moradi, Dr. Hashemi</td>
              <td>Fall 2015</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
});

export default Teaching;
