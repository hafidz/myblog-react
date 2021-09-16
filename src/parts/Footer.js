import {
  FaYoutube,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaGooglePlay,
} from "react-icons/fa";
import React from "react";

export default function Footer() {
  return (
    <footer className="footer text-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Location</h4>
            <p className="lead mb-0">
              Bandung
              <br />
              Indonesia
            </p>
          </div>
          <div className="col-lg-6 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Follow Me</h4>
            <a
              className="btn btn-outline-light btn-social mx-1"
              href="https://www.youtube.com/channel/UCX9vSj_71fzwDBGGyEQ5Z9Q"
              target="blank"
            >
              <FaYoutube />
            </a>
            <a
              className="btn btn-outline-light btn-social mx-1"
              target="blank"
              href="https://www.instagram.com/alhuseiin47/"
            >
              <FaInstagram />
            </a>
            <a
              className="btn btn-outline-light btn-social mx-1"
              target="blank"
              href="https://www.linkedin.com/in/hafiz-husein/"
            >
              <FaLinkedinIn />
            </a>
            <a
              target="blank"
              className="btn btn-outline-light btn-social mx-1"
              href="https://github.com/hafidz"
            >
              <FaGithub />
            </a>
            <a
              className="btn btn-outline-light btn-social mx-1"
              target="blank"
              href="https://play.google.com/store/apps/dev?id=7415597112563689559"
            >
              <FaGooglePlay />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
