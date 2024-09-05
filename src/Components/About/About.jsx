import React from "react";
import "./About.css";
import Cybernet from "../../assets/video/cybernet.mp4";
import { themeContext } from "../../Context";
import { useContext } from "react";
import Dolapo from "../../assets/dp.jpeg";
import { ReactTyped } from "react-typed";

const About = () => {
  const transition = { duration: 1, type: "spring" };
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="a-content">
      <video
        className="bva"
        playsInline
        autoPlay
        loop
        muted
        id="video-background"
      >
        <source src={Cybernet} type="video/mp4"></source>
      </video>
      <div className="a-left">
        <ReactTyped
          className="ab"
          strings={[
            "Here is a sneak peek into my journey so far",
            "Come with me!",
            "Hi, I am Dolapo Oyegunle",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
        <p className="dpa">
          My name is Dolapo Samson Oyegunle. I fondly like to be called Dolapo.
          I am a Networks Security Engineer who is fascinated by the
          infrastructure of differerent networks, cloud computing and other
          emerging technologies.{" "}
          <p>
            I am a highly skilled and goal-oriented Network Security Engineer
            with a comprehensive background in threat investigations,
            vulnerability assessments, and system security enhancements. Over
            the years, I have honed my expertise in managing complex security
            environments, ensuring that critical infrastructure is safeguarded
            against ever-evolving cyber threats.
          </p>
          My career is distinguished by deep proficiency in using
          industry-leading technologies such as{" "}
          <a className="ayes" href="https://www.paloaltonetworks.com/">
            Palo Alto Networks
          </a>{" "}
          and{" "}
          <a className="ayes" href="https://meraki.cisco.com/">
            Cisco Meraki
          </a>
          , to deploy, manage, and optimize network security solutions. My
          technical acumen extends to advanced firewall management, where I have
          successfully implemented distributive firewall rules, centralized
          management through PANW Panorama, and performed critical upgrades to
          PAN-OS firmware. These efforts have significantly improved network
          traffic flow, system compliance with industry standards, and the
          overall security posture of the organizations I have served. In my
          current role as a Customer Success Engineer at Palo Alto Networks, I
          play a pivotal role in assisting NGFW customers with implementing
          cutting-edge security measures, including the strategic use of APP-ID,
          SSL Decryption, and Policy Optimizer. My hands-on experience with
          deploying device certificates for Cloud-Delivered Security Services
          and conducting bug scrubs on target code exemplifies my commitment to
          delivering tailored, effective security solutions. I also serve as a
          trusted advisor to clients, providing expert guidance during critical
          vulnerabilities such as the GlobalProtect Vulnerability
          (CVE-2024-3400).{" "}
          <p>
            My ability to replicate customer environments and test specific
            behaviors in a lab setting underscores my dedication to ensuring
            that clients receive the highest level of support and insight. My
            journey from a Network Security Intern to a seasoned professional
            reflects my continuous learning and adaptability, making me a
            valuable asset in the field of network security. As I continue to
            evolve in my career, I remain committed to advancing my skills and
            staying at the forefront of cybersecurity developments to better
            protect and serve the digital landscape.
          </p>
        </p>
      </div>
      <div className="a-right">
        <img src={Dolapo} alt="Individual portrait" />
      </div>
    </div>
  );
};

export default About;
