import React from "react";
import Cybernet from "../../assets/video/cybernets.mp4";
import Card from "../Card/Card";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";
import "./Service.css";
import S1 from "../../assets/cy1.jpeg";
import S2 from "../../assets/cy2.jpeg";
import S3 from "../../assets/cy3.jpeg";
import S4 from "../../assets/cy4.jpeg";
import S5 from "../../assets/cy5.jpeg";
import S6 from "../../assets/cy6.jpg";
import S7 from "../../assets/cy7.png";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Service = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="creative">
      {!darkMode && (
        <video
          className="bva"
          playsInline
          autoPlay
          loop
          muted
          preload="true"
          id="video-background"
        >
          <source src={Cybernet} type="video/mp4" loading="lazy"></source>
        </video>
      )}
      <div className="expend">
        <ReactTyped
          className="adis"
          strings={[
            "Curious to know what I can do?",
            "Come with me!",
            "Here are some Services I render flawlessly",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
        <div className="cardio">
          <motion.div
            initial={{ left: "25%", opacity: "0" }}
            whileInView={{ left: "12rem", opacity: "1" }}
            style={{ left: "8rem" }}
          >
            <Card
              pictures={S1}
              heading={"Security Assessment and Auditing"}
              details={
                "As a network security engineer, I can conduct comprehensive security assessments and audits to identify vulnerabilities within an organization’s network infrastructure. This includes performing penetration testing to simulate cyberattacks, evaluating the effectiveness of existing security measures, and providing detailed reports with actionable recommendations for improvement. I can also assess compliance with industry regulations and standards, ensuring that organizations meet their security obligations."
              }
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: "28rem" }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Card
              pictures={S2}
              heading={"Network Design and Architecture"}
              details={
                "I can design and implement secure network architectures tailored to an organization’s specific needs. This involves developing strategies for segmentation, choosing appropriate firewalls and intrusion detection systems, and ensuring secure communication protocols are in place. My role includes optimizing network configurations to enhance security while maintaining performance, as well as planning for scalability and future growth."
              }
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: "56rem" }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Card
              pictures={S3}
              heading={"Incident Response and Management"}
              details={
                "In the event of a security breach, I can lead incident response efforts to mitigate damage and restore normal operations. This includes investigating security incidents, analyzing attack vectors, and implementing containment strategies. I can also develop and refine incident response plans to ensure swift action in future incidents, as well as conduct post-incident reviews to improve overall security posture."
              }
            />
          </motion.div>{" "}
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, y: "32rem" }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Card
              pictures={S4}
              heading={"Security Awareness Training"}
              details={
                "I can provide security awareness training for employees to educate them about best practices in cybersecurity. This includes developing training materials and programs that cover topics such as phishing awareness, safe internet browsing habits, and the importance of password management. By fostering a culture of security awareness, I can help organizations reduce the likelihood of human error leading to security breaches."
              }
            />
          </motion.div>{" "}
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: "28rem", y: "32rem" }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Card
              pictures={S5}
              heading={"Firewall and Intrusion Prevention System Management"}
              details={
                "I can manage and configure firewalls and intrusion prevention systems (IPS) to safeguard the network against unauthorized access and threats. This includes setting up rules and policies to filter traffic, monitoring logs for suspicious activities, and fine-tuning the systems to minimize false positives. My expertise ensures that these critical security tools function optimally and provide robust protection against evolving threats."
              }
            />
          </motion.div>{" "}
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: "56rem", y: "32rem" }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Card
              pictures={S6}
              heading={"Vulnerability Management and Patch Management"}
              details={
                "I can implement a robust vulnerability management program to identify, evaluate, and remediate security weaknesses in an organization’s systems. This involves conducting regular vulnerability scans, prioritizing findings based on risk, and coordinating patch management processes to ensure timely updates to software and systems. By maintaining a proactive approach to vulnerability management, I help organizations minimize their exposure to potential threats and enhance their overall security posture."
              }
            />
          </motion.div>{" "}
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, y: "64rem" }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Card
              pictures={S7}
              heading={"Security Information and Event Management (SIEM)"}
              details={
                "I can deploy and manage Security Information and Event Management (SIEM) systems to centralize security monitoring and incident response. This includes configuring log collection from various sources, analyzing security events for anomalies, and generating alerts for potential threats. By leveraging SIEM technology, I enable organizations to gain real-time insights into their security posture, enhancing their ability to detect and respond to incidents effectively."
              }
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Service;
