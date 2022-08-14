import { forwardRef } from "react";

const Research = forwardRef((props, ref) => {
  return (
    <div ref={ref} id="Research">
      <div className="font-bold text-3xl px-9 py-3 align-center border-b-4 border-base-300 mx-9">
        Research & Volunteer Work
      </div>
      <div className="p-9 grid lg:grid-cols-2 gap-3">
        <div
          tabIndex="0"
          className="collapse collapse-open border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Technical Committee, RoboCup Asia-Pacific (RCAP) 2018
          </div>
          <div className="collapse-content">
            <ul className="list-disc list-inside px-9 py-1">
              Affiliated with the Junior Soccer League, activities include:
              <li className="px-9 py-1">Organizing the event</li>
              <li className="px-9 py-1">Qualifying teams through interviews</li>
              <li className="px-9 py-1">
                esign of technical challenge to assess technical knowledge of
                team members
              </li>
              <li className="px-9 py-1">Conducting games as a referee</li>
            </ul>
          </div>
        </div>
        <div
          tabIndex="0"
          className="collapse collapse-open border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Technical Committee, RoboCup Iran Open Competitions
          </div>
          <div className="collapse-content">
            <ul className="list-disc list-inside px-9 py-1">
              Affiliated with the Junior Soccer League, activities include:
              <li className="px-9 py-1">
                Design and Implementation of a web based helper app for referees
                to store match events
              </li>
              <li className="px-9 py-1">Organizing the event</li>
              <li className="px-9 py-1">Qualifying teams through interviews</li>
              <li className="px-9 py-1">
                esign of technical challenge to assess technical knowledge of
                team members
              </li>
              <li className="px-9 py-1">Conducting games as a referee</li>
            </ul>
          </div>
        </div>
        <div
          tabIndex="0"
          className="collapse collapse-open border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Research Assistant, Cognitive Systems Lab, University of Tehran
          </div>
          <div className="collapse-content">
            <ul className="list-disc list-inside px-9 py-1">
              Working on attention mechanism
            </ul>
            <ul className="list-disc list-inside px-9 py-1">
              More specifically on how attention can be used to incorporate side
              information to both accelerate learning and improve generalization
            </ul>
            <ul className="list-disc list-inside px-9 py-1">
              Under supervision of Dr. Majid Nili Ahmadabadi
            </ul>
            <ul className="list-disc list-inside px-9 py-1">
              Got familiar with reinforcement learning and concepts of cognitive
              science
            </ul>
          </div>
        </div>
        <div
          tabIndex="0"
          className="collapse collapse-open border border-base-300 bg-base-100 rounded-box"
        >
          <div className="collapse-title text-xl font-medium">
            Intern, Fraunhofer IDMT, Ilmenau, Germany
          </div>
          <div className="collapse-content">
            <ul className="list-disc list-inside px-9 py-1">
              Built a singing voice detection system using deep convolutional
              neural networks
            </ul>
            <ul className="list-disc list-inside px-9 py-1">
              Achieved comparable accuracy using 1000 times less data than the
              reference paper by Jan Schluter
            </ul>
            <ul className="list-disc list-inside px-9 py-1">
              Worked with Keras, Theano, Tensorflow, and Pytorch.
            </ul>
            <ul className="list-disc list-inside px-9 py-1">
              Under supervision of Dr.-Ing. Estefania Cano Ceron and Stylianos
              Ioannis Mimilakis
            </ul>
            <ul className="list-disc list-inside px-9 py-1">
              Got familiar with deep learning, convolutional neural networks,
              recurrent neural networks and music information retrieval
              techniques through the following courses:
              <li className="px-9 py-1">
                Convolutional Neural Networks for Visual Recognition course from
                Stanford
              </li>
              <li className="px-9 py-1">
                Neural Networks for Machine Learning course from Geoffrey Hinton
                on Coursera [partially]
              </li>
            </ul>
          </div>
        </div>
        <div
          tabIndex="0"
          className="collapse collapse-open border border-base-300 bg-base-100 rounded-box lg:col-span-2"
        >
          <div className="collapse-title text-xl font-medium">
            Research on CDR of Iran's mobile operators, University of Tehran
          </div>
          <div className="collapse-content">
            <ul className="list-disc list-inside px-9 py-1">
              Built graphs from CDR data and analyzed several graph
              characteristics
            </ul>
            <ul className="list-disc list-inside px-9 py-1">
              Found out about anomalies and the reasons behind them including
              the following
              <li className="px-9 py-1">
                Spammers in the network trying to do mass advertising through
                text messages
              </li>
              <li className="px-9 py-1">
                Peak of the network usage just before certain holidays due to of
                the large volume of greetings
              </li>
              <li className="px-9 py-1">
                Irregularities in the pattern of text message traffic due to a
                popular TV show that had a soccer result prediction competition
                through text messages
              </li>
            </ul>
            <ul className="list-disc list-inside px-9 py-1">
              worked under the supervision of Dr. Behnam Bahrak
            </ul>
            <ul className="list-disc list-inside px-9 py-1">
              Got familiar with D3 / neo4j graph database / R / Python through
              the following course
              <li className="px-9 py-1">
                Graph Analytics for Big Data on Coursera from University of
                California San Diego
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
})

export default Research;
