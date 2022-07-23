import React from "react";
import "./Footer.css";
import { FiInstagram } from "react-icons/fi";
import { SiUpwork } from "react-icons/si";
import { FiGithub } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Link to="/" className="footer_logo">
        Vensan Store
      </Link>
      <ul className="permalinks">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Main">Main</Link>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.instagram.com/vens_12.06/" target="_blank">
          <FiInstagram />
        </a>
        <a
          href="https://www.upwork.com/freelancers/~013d38b18a0d01544c"
          target="_blank"
        >
          <SiUpwork />
        </a>
        <a href="https://github.com/VensanDrot" target="_blank">
          <FiGithub />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; VensanStore. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
