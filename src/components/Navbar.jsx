import logo from "../assets/kevinRushLogo.png";
import resume from "../assets/Salman2025Resume copy.pdf";  // Adjust the file path and extension as necessary
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { ImNewspaper } from "react-icons/im";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/salmanhu/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://github.com/SalmanHussein004" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="mailto:salmanhu004@gmail.com">
          <IoMdMail />
        </a>
        <a href={resume} target="_blank" rel="noopener noreferrer" className="icon-hover">
          <ImNewspaper />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
