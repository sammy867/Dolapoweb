import React from "react";
import "./About.css";
import Cybernet from "../../assets/video/cybernets.mp4";
import { themeContext } from "../../Context";
import { useContext } from "react";
import Dolapo from "../../assets/dp.jpeg";
import { ReactTyped } from "react-typed";
import Card from "../Card/Card";
import { motion } from "framer-motion";
import Ameripac from "../../assets/Ameripaclogo.png";
import Palo from "../../assets/Palobg.png";
import Fortinet from "../../assets/fortinet.png";
import Cisco from "../../assets/cisbg.png";
import Avantor from "../../assets/avantor.png";
const About = () => {
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
        preload="true"
      >
        <source src={Cybernet} type="video/mp4"></source>
      </video>
      <div className="a-left">
        <ReactTyped
          className="ab"
          strings={[
            "Here is a sneak peek into my journey so far!",
            "Come with me!",
            "Hi, I am Dolapo Oyegunle",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
        <p className="dpa">
          My name is <strong>Dolapo Samson Oyegunle</strong>. I fondly like to
          be called Dolapo. I am a <strong>Networks Security Engineer</strong>{" "}
          who is fascinated by the infrastructure of differerent networks, cloud
          computing and other emerging technologies.{" "}
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
        <img src={Dolapo} alt="Individual portrait" loading="lazy" />
      </div>
      <div className="here">
        <p>Highlighting My Professional Experiences...</p>
        <div className="cards">
          <motion.div
            initial={{ left: "25%", opacity: "0" }}
            whileInView={{ left: "12rem", opacity: "1" }}
            style={{ left: "8rem" }}
          >
            <Card
              pictures={Ameripac}
              heading={"Network Security Engineer at Ameripac"}
              details={
                "Deployed new hardware to replace end-of-life and end-of-support devices, while creating reports on device status and firewall configurations. Managed firewall backups, restores, and upgrades, and configured GlobalProtect, IPsec, and SSL VPNs on Palo Alto firewalls to ensure secure connectivity. Centrally maintained and configured Palo Alto and Fortinet firewalls, utilizing App-ID to enhance traffic control. Implemented High Availability to minimize downtime and configured threat prevention features including antivirus, antispyware, and DoS protection to bolster network security."
              }
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: "28rem" }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Card
              pictures={Palo}
              heading={"Customer Success Engineer NGFW at Palo Alto Networks"}
              details={
                "As a Technical Resource at Palo Alto Networks, I supported NGFW customers with advanced security deployments like Marijuana URL Filtering, SSL Decryption, and APP-ID updates. I addressed critical vulnerabilities such as GlobalProtect (CVE-2024-3400) by guiding customers on applying security measures and testing features in lab environments. I provided tailored support with bug scrubs, code recommendations, and policy optimizations using Panorama, while also helping restrict access to apps like TikTok with wildcards."
              }
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "-100%" }} // Use x instead of left
            whileInView={{ opacity: 1, x: "56rem" }} // Animate to position
            transition={{ duration: 1, delay: 1 }} // Add delay if needed
          >
            <Card
              pictures={Fortinet}
              heading={"Network Security Engineer at Fortinet"}
              details={
                "I created and maintained network topology documentation for new branch offices and analyzed system logs to identify security issues and inefficiencies. I was responsible for configuring and maintaining Fortigate, FortiManager, and FortiAnalyzer, while constantly monitoring the performance of all security appliances in the production environment. Additionally, I manually updated service packs, drivers, and applications to enhance system performance. I also documented network issues and their resolutions for future reference."
              }
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "-100%" }} // Use x instead of left
            whileInView={{ opacity: 1, y: "32rem" }} // Animate to position
            transition={{ duration: 1, delay: 0.5 }} // Add delay if needed
          >
            <Card
              pictures={Cisco}
              heading={"Network Security Engineer at Cisco"}
              details={
                "At Cisco Networks, I managed and deployed advanced security solutions to safeguard critical infrastructure. My responsibilities included configuring and maintaining Palo Alto firewalls, implementing security policies, and performing system upgrades. I also handled the setup of secure VPN connections and managed threat prevention features. Additionally, I collaborated with clients to address security concerns, provided expert guidance, and ensured robust protection against evolving cyber threats."
              }
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "-100%" }} // Use x instead of left
            whileInView={{ opacity: 1, x: "28rem", y: "32rem" }} // Animate to position
            transition={{ duration: 1, delay: 0.5 }} // Add delay if needed
          >
            <Card
              pictures={Avantor}
              heading={"Firewall Engineer at Avantor"}
              details={
                "I performed PAN-OS firmware upgrades on firewalls to maintain system reliability and centrally managed multiple Palo Alto firewalls using the PANW Panorama M-500 platform. I implemented distributive firewall rules to enhance network traffic flow and security while ensuring compliance with industry standards. Additionally, I participated in a firewall migration from FortiGate to Palo Alto, using Expedition to minimize downtime and ensure seamless transitions. My work also included configuring Cisco devices to support complex network environments and being on-call for network security issues."
              }
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
