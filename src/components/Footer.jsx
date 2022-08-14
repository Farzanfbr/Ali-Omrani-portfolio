import { VscMail } from "react-icons/vsc";
import { BsTelephone, BsBuilding } from "react-icons/bs";

function Footer() {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-base-300 text-base-content rounded">
        <div className="flex flex-col">
          <div className="flex flex-row justify-around align-center text-center py-1">
            <div>
              <VscMail className="text-xl" />
            </div>
            <div className="pl-4 text-md">aomrani@usc.edu</div>
          </div>
          <div className="flex flex-row justify-around align-center text-center py-1">
            <div>
              <BsBuilding className="text-xl" />
            </div>
            <div className="pl-4 text-md">
              SGM 501, 3620 McClintock Ave, Los Angeles, CA 90089
            </div>
          </div>
          <div className="flex flex-row justify-around align-center text-center py-1">
            <div>
              <BsTelephone className="text-xl" />
            </div>
            <div className="pl-4 text-md">+1 (310) 487 8795</div>
          </div>
        </div>
        <div>
          <p>Copyright © 2022 by Farzan Fariborzi</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
