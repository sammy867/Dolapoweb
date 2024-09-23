import React from "react";
import Cybernet from "../../assets/video/cybernets.mp4";
import Secure from "../../assets/programming.png";
import Server from "../../assets/server.jpg";
import AI from "../../assets/AI.jpg";
import Lock from "../../assets/lock.jpg";
import Box from "../../assets/box.jpg";
import Business from "../../assets/business.jpg";
import Card from "../Card/Card";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skill-container">
        <ReactTyped
          className="adis"
          strings={[
            "My Expertise at a Glance",
            "What I Bring to the Table",
            "Key Competencies That Define Me",
            "Capabilities That Set Me Apart",
            "My Professional Toolkit",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </div>
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
      <div className="remain">
        <motion.div
          initial={{ left: "25%", opacity: "0" }}
          whileInView={{ left: "12rem", opacity: "1" }}
          style={{ left: "8rem" }}
        >
          <Card
            pictures={Secure}
            heading={"Advanced Protocol Knowledge"}
            details={
              "I possess advanced knowledge of networking protocols, including IPSEC, ICMP, TCP/IP, UDP, HTTP(S), DNS, SNMP, Telemetry, TELNET, SSH, RIP, OSPF, DHCP, and LDAP. I have hands-on experience with LAN/WAN configurations, NAT/PAT, SSL, and VPN technologies. Additionally, I am skilled in implementing Access Control Lists to enhance network security and management."
            }
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{ opacity: 1, x: "28rem" }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Card
            pictures={Server}
            heading={"SSL Decryption and Firewall Management"}
            details={
              "I am proficient in Cisco Meraki, including SSL decryption, certificate authority management, and URL filtering. I have extensive experience with AIOps and Strata Cloud Manager, enabling me to optimize network operations effectively. Additionally, I excel in configuring Cisco devices, including routers and switches, to support complex network environments, ensuring reliable and efficient connectivity."
            }
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{ opacity: 1, x: "56rem" }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Card
            pictures={AI}
            heading={"Panorama and NGFW Administration and Deployment"}
            details={
              "I am proficient in enhancing network authentication by integrating services such as LDAP, RADIUS, and TACACS. Additionally, I implement wildcard URL categories to restrict access to specific websites and applications, ensuring robust security and compliance across the network."
            }
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{ opacity: 1, y: "32rem" }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Card
            pictures={Lock}
            heading={"Zone Protection and Network Address translation"}
            details={
              "I am proficient in enhancing network performance and security through the application of Palo Alto technologies such as App-ID, User-ID, and Content-ID. Additionally, I have expertise in designing and implementing Source NAT and Destination NAT on Palo Alto platforms, effectively streamlining network traffic flows for improved efficiency and control.."
            }
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{ opacity: 1, x: "28rem", y: "32rem" }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Card
            pictures={Box}
            heading={"Front-End Development"}
            details={
              "I am skilled in designing modern websites and applications using cutting-edge technologies, including HTML5, CSS3, JavaScript, and Java. I adhere to industry best practices that emphasize code readability, scalability, and maintainability, ensuring that my projects are robust and adaptable to evolving requirements. My approach integrates responsive design principles and efficient coding techniques to optimize performance and enhance user experience."
            }
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{ opacity: 1, x: "56rem", y: "32rem" }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Card
            pictures={Business}
            heading={"Customer Relationship Management"}
            details={
              "I leverage Salesforce for effective Customer Relationship Management (CRM), expertly managing leads, optimizing sales pipelines, and automating marketing campaigns. I streamline customer support by tracking cases and analyzing service metrics while organizing account and contact data to enhance communication. Additionally, I create real-time reports and forecasts of sales trends and integrate Salesforce with various tools, such as email marketing platforms and payment gateways, to ensure seamless business operations."
            }
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
