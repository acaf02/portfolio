import logo from "../assets/analogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-3">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 h-12" src={logo} alt="logo" />
      </div>
      <div className="m-9 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/ana-carolina-alves-farias-8a998b266/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.github.com/acaf02 "
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/acaf02/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
