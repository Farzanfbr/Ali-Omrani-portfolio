import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Tools() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="px-9 py-2">
      <div className="card bg-base-200 shadow-2xl card-bordered rounded-lg mb-2">
        <div className="card-body">
          <div className="card-title uppercase font-bold">Tools</div>
          <br />
          <div>
            <p>KALI | OPENSSL | BEEF</p>
            <div className="my-2 h-2 w-full bg-gray-300 shadow-progbar rounded-xl relative">
              <motion.div
                className="h-full w-[70%] bg-primary absolute rounded-xl"
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
            <p>SELENIUM | GRINDER</p>
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
            <p>ANTLR</p>
            <div className="my-2 h-2 w-full bg-gray-300 shadow-progbar rounded-xl relative">
              <motion.div
                className="h-full w-[70%] bg-primary absolute rounded-xl"
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
            <p>QUARTUS | MULTISIM</p>
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
            <p>MODELSIM | CODEVISION | QTSPIM | XILINX ISE</p>
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
            <p>VIRTUALBOX | VMWARE | MININET</p>
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
            <p>VIM | INTELLIJ | PYCHARM</p>
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
        </div>
      </div>
    </div>
  );
}

export default Tools;
