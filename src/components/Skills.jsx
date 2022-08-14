import { motion, useInView } from "framer-motion";
import { forwardRef, useRef } from "react";
import Lang from "./skill-comp/Lang";
import Tools from "./skill-comp/Tools";

const Skills = forwardRef((props, ref) => {
  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, { once: true });

  return (
    <div ref={ref} id="Skills">
      <div className="font-bold text-3xl px-9 py-2 align-center border-b-4 border-base-300 mx-9">
        Skills
      </div>
      <div className="p-9">
        <div className="card bg-base-200 shadow-2xl card-bordered rounded-lg">
          <div className="card-body">
            <div className="card-title uppercase font-bold">
              programming Skills
            </div>
            <br />
            <div>
              <p>PYTHON | C | C++ | JAVA | MATLAB</p>
              <div className="my-2 h-2 w-full bg-gray-300 shadow-progbar rounded-xl relative">
                <motion.div
                  className="h-full w-[90%] bg-primary absolute rounded-xl"
                  initial={{ scaleX: 0, opacity: 0, originX: 0 }}
                  animate={{
                    scaleX: isInView ? 1 : 0,
                    opacity: isInView ? 1 : 0,
                  }}
                  transition={{
                    ease: "linear",
                    duration: 1,
                    from: 0,
                  }}
                  ref={inViewRef}
                ></motion.div>
              </div>
            </div>
            <div>
              <p>TENSORFLOW | PYTORCH | KERAS | THEANO</p>
              <div className="my-2 h-2 w-full bg-gray-300 shadow-progbar rounded-xl relative">
                <motion.div
                  className="h-full w-[80%] bg-primary absolute rounded-xl"
                  initial={{ scaleX: 0, opacity: 0, originX: 0 }}
                  animate={{
                    scaleX: isInView ? 1 : 0,
                    opacity: isInView ? 1 : 0,
                  }}
                  transition={{
                    ease: "linear",
                    duration: 1,
                    from: 0,
                  }}
                  ref={ref}
                ></motion.div>
              </div>
            </div>
            <div>
              <p>VERILOG | VHDL</p>
              <div className="my-2 h-2 w-full bg-gray-300 shadow-progbar rounded-xl relative">
                <motion.div
                  className="h-full w-[50%] bg-primary absolute rounded-xl"
                  initial={{ scaleX: 0, opacity: 0, originX: 0 }}
                  animate={{
                    scaleX: isInView ? 1 : 0,
                    opacity: isInView ? 1 : 0,
                  }}
                  transition={{
                    ease: "linear",
                    duration: 1,
                    from: 0,
                  }}
                  ref={ref}
                ></motion.div>
              </div>
            </div>
            <div>
              <p>JAVASCRIPT | NODE.JS | REACT | HTML | CSS</p>
              <div className="my-2 h-2 w-full bg-gray-300 shadow-progbar rounded-xl relative">
                <motion.div
                  className="h-full w-[80%] bg-primary absolute rounded-xl"
                  initial={{ scaleX: 0, opacity: 0, originX: 0 }}
                  animate={{
                    scaleX: isInView ? 1 : 0,
                    opacity: isInView ? 1 : 0,
                  }}
                  transition={{
                    ease: "linear",
                    duration: 1,
                    from: 0,
                  }}
                  ref={ref}
                ></motion.div>
              </div>
            </div>
            <div>
              <p>TEX | LATEX</p>
              <div className="my-2 h-2 w-full bg-gray-300 shadow-progbar rounded-xl relative">
                <motion.div
                  className="h-full w-[60%] bg-primary absolute rounded-xl"
                  initial={{ scaleX: 0, opacity: 0, originX: 0 }}
                  animate={{
                    scaleX: isInView ? 1 : 0,
                    opacity: isInView ? 1 : 0,
                  }}
                  transition={{
                    ease: "linear",
                    duration: 1,
                    from: 0,
                  }}
                  ref={ref}
                ></motion.div>
              </div>
            </div>
            <div>
              <p>SQL | CYPHER</p>
              <div className="my-2 h-2 w-full bg-gray-300 shadow-progbar rounded-xl relative">
                <motion.div
                  className="h-full w-[80%] bg-primary absolute rounded-xl"
                  initial={{ scaleX: 0, opacity: 0, originX: 0 }}
                  animate={{
                    scaleX: isInView ? 1 : 0,
                    opacity: isInView ? 1 : 0,
                  }}
                  transition={{
                    ease: "linear",
                    duration: 1,
                    from: 0,
                  }}
                  ref={ref}
                ></motion.div>
              </div>
            </div>
            <div>
              <p>BASHSCRIPT | R</p>
              <div className="my-2 h-2 w-full bg-gray-300 shadow-progbar rounded-xl relative">
                <motion.div
                  className="h-full w-[40%] bg-primary absolute rounded-xl"
                  initial={{ scaleX: 0, opacity: 0, originX: 0 }}
                  animate={{
                    scaleX: isInView ? 1 : 0,
                    opacity: isInView ? 1 : 0,
                  }}
                  transition={{
                    ease: "linear",
                    duration: 1,
                    from: 0,
                  }}
                  ref={ref}
                ></motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Tools />
      <Lang />
    </div>
  );
});
export default Skills;
