import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-dark text-center p-5 text-white">
      <h1 className="text-white">Techno Academy</h1>
      <p>Best Online Learning Platform</p>
      <hr className="border-bottom" />
      <div>
        <a
          className="text-white fs-3"
          href="https://web.facebook.com/"
          target="blank"
        >
          <FaFacebook />
        </a>
        <a
          className="text-white fs-3 m-2"
          href="https://twitter.com/"
          target="blank"
        >
          <FaTwitter />
        </a>
        <a
          className="text-white fs-3"
          href="https://www.linkedin.com/"
          target="blank"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
