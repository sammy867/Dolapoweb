import React from "react";
import "./Intro.css";
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { themeContext } from "../../Context";
import { useContext } from "react";
import Cloud from "../../assets/video/cybernets.mp4";
import DP from "../../assets/bg3.png";
import { ReactTyped } from "react-typed";

const Intro = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
      {!darkMode && (
        <video
          className="bv"
          playsInline
          autoPlay
          loop
          muted
          preload="true"
          id="video-background"
        >
          <source src={Cloud} type="video/mp4" loading="lazy"></source>
        </video>
      )}
      <div className="i-left">
        <div className="i-name">
          <span
            data-text="Discover my work and Let's Journey Together!"
            style={{ color: darkMode ? "white" : "" }}
          >
            Discover my work and Let's Journey Together!
          </span>
          <ReactTyped
            className="typed-text"
            strings={[
              "Dolapo Oyegunle",
              "Fortifying Network Security",
              "Mitigating Security Risks",
              "Maintaining Firewalls",
            ]}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
          <p>
            Results-oriented Network Security Engineer with a proven track
            record in safeguarding critical infrastructure. Proficient in
            conducting in-depth threat investigations, vulnerability
            assessments, and implementing robust security measures to mitigate
            risks. Possessing a strong foundation in firewall management,
            incident response orchestration, and the development of
            comprehensive security policies. Adept at leveraging advanced
            technologies, including{" "}
            <a className="no" href="https://www.paloaltonetworks.com/">
              Palo Alto Networks
            </a>{" "}
            and{" "}
            <a className="no" href="https://meraki.cisco.com/">
              Cisco Meraki
            </a>
            , to fortify network defenses and ensure business continuity.
            Committed to staying ahead of the evolving threat landscape through
            continuous learning and skill development.
          </p>

          <a
            className="btn-1"
            href="https://www.linkedin.com/in/dolapo-o-b56909263/"
          >
            <span>Get to Know Me!</span>
          </a>

          <div className="i-icons">
            <FaGithub style={{ color: darkMode ? "white" : "" }} />
            <FaFacebook />
            <FaInstagram />
            <SiGmail />
            <FaLinkedin />
          </div>
        </div>
      </div>
      <div className="i-right">
        <img className="i-img" src={DP} alt="persona" loading="lazy" />
        <div className="info-overlay">
          <h1>Hi, I am Dolapo Oyegunle</h1>
          <h3>
            A Network Security Engineer specializing in advanced firewall
            management and cybersecurity solutions.
          </h3>
          <button className="btn-2">
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                  ></path>
                </svg>
              </div>
            </div>
            <span>Send</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
