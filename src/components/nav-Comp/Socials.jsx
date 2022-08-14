import { VscGithubAlt, VscEdit } from "react-icons/vsc";
import { RiLinkedinLine } from "react-icons/ri";
import { SiGooglescholar } from "react-icons/si";

function Socials() {
  return (
    <div className="flex justify-evenly mb-[17px]">
      <div className="tooltip tooltip-warning" data-tip="Linkedin">
        <a href="https://www.linkedin.com/in/ali0mrani/" target="_blank">
          <RiLinkedinLine className="text-white border-2 border-white w-10 h-10 p-2 hover:text-primary hover:bg-white hover:border-primary duration-300 ease-linear rounded-lg " />
        </a>
      </div>
      <div className="tooltip tooltip-warning" data-tip="GitHub">
        <a href="https://github.com/Ali-Omrani" target="_blank">
          <VscGithubAlt className="text-white border-2 border-white w-10 h-10 p-2 hover:text-primary hover:bg-white hover:border-primary duration-300 ease-linear rounded-lg " />
        </a>
      </div>
      <div className="tooltip tooltip-warning" data-tip="Google Scholar">
        <a
          href="https://scholar.google.com/citations?user=ltnAaLkAAAAJ&hl=en"
          target="_blank"
        >
          <SiGooglescholar className="text-white border-2 border-white w-10 h-10 p-2 hover:text-primary hover:bg-white hover:border-primary duration-300 ease-linear rounded-lg " />
        </a>
      </div>
      {/* <div>
        <a href="/blog">
          <VscEdit className="text-white border-2 border-white w-10 h-10 p-2 hover:text-primary hover:bg-white hover:border-white duration-300 ease-linear rounded-lg " />
        </a>
      </div> */}
    </div>
  );
}

export default Socials;
