import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education";
import Awards from "./components/Awards";
import Research from "./components/Research";
import Teaching from "./components/Teaching";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import useIntersectionObserver from "./hooks/intersection";
const Menus = [
  {
    name: "Home",
    icon: "home-outline",
    dis: "translate-y-[0px]",
  },
  {
    name: "Education",
    icon: "school-outline",
    dis: "translate-y-[56px]",
  },
  {
    name: "Honors & Awards",
    icon: "trophy-outline",
    dis: "translate-y-[112px]",
  },
  {
    name: "Research",
    icon: "search-outline",
    dis: "translate-y-[168px]",
  },
  {
    name: "Teaching",
    icon: "book-outline",
    dis: "translate-y-[224px]",
  },
  {
    name: "Skills",
    icon: "construct-outline",
    dis: "translate-y-[280px]",
  },
  {
    name: "Projects",
    icon: "code-slash-outline",
    dis: "translate-y-[336px]",
  },
];

function App() {
  const [scrolling, setScrolling] = useState(false);
  const section1Ref = useRef();
  const section2Ref = useRef();
  const section3Ref = useRef();
  const section4Ref = useRef();
  const section5Ref = useRef();
  const section6Ref = useRef();
  const section7Ref = useRef();
  const entry1 = useIntersectionObserver(section1Ref, {});
  const entry2 = useIntersectionObserver(section2Ref, {});
  const entry3 = useIntersectionObserver(section3Ref, {});
  const entry4 = useIntersectionObserver(section4Ref, {});
  const entry5 = useIntersectionObserver(section5Ref, {});
  const entry6 = useIntersectionObserver(section6Ref, {});
  const entry7 = useIntersectionObserver(section7Ref, {});

  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!scrolling) {
      if (entry1) {
        if (entry1.isIntersecting) {
          setActive(0);
        }
      }
      if (entry2) {
        if (entry2.isIntersecting) {
          setActive(1);
        }
      }
      if (entry3) {
        if (entry3.isIntersecting) {
          setActive(2);
        }
      }
      if (entry4) {
        if (entry4.isIntersecting) {
          setActive(3);
        }
      }
      if (entry5) {
        if (entry5.isIntersecting) {
          setActive(4);
        }
      }
      if (entry6) {
        if (entry6.isIntersecting) {
          setActive(5);
        }
      }
      if (entry7) {
        if (entry7.isIntersecting) {
          setActive(6);
        }
      }
    }
  }, [entry1, entry2, entry3, entry4, entry5, entry6, entry7]);

  const handleMenuClick = (i) => {
    setScrolling(true);
    setActive(i);
    setTimeout(() => {
      setScrolling(false);
    }, 1000);
  };
  return (
    <div className="lg:grid lg:grid-cols-5 hero1">
      <div>
        <Navbar
          active={active}
          onClick={(i) => handleMenuClick(i)}
          Menus={Menus}
        />
      </div>
      <div className="lg:col-span-4 hero1">
        <About ref={section1Ref} />
        <Education ref={section2Ref} />
        <Awards ref={section3Ref} />
        <Research ref={section4Ref} />
        <Teaching ref={section5Ref} />
        <Skills ref={section6Ref} />
        <Projects ref={section7Ref} />
        <Footer />
      </div>
    </div>
  );
}

export default App;
