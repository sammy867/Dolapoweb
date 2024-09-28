import React, { useState, useEffect, useRef } from "react";
import "./Portfolio.css";
import Cybernet from "../../assets/video/cybernets.mp4";
import { FaArrowDown } from "react-icons/fa";
import Salary from "../../assets/Salary1.jpeg";
import Tax from "../../assets/SalaryApp.jpeg";
import Study from "../../assets/StudyApp.jpeg";
import Java from "../../assets/phone.jpg";
import Website from "../../assets/web.png";
import { ReactTyped } from "react-typed";

const PortfolioItem = ({ title, image, link, paragraph }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleContent = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (contentRef.current && !contentRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      className={`content-box ${isOpen ? "open" : ""}`}
      onClick={toggleContent}
      ref={contentRef}
    >
      <div className="title">
        <span className="titleText">{title}</span>
        <span className={`arrow ${isOpen ? "open" : ""}`}>
          <FaArrowDown />
        </span>
      </div>
      {isOpen && (
        <div className="content">
          <div className="portleft">
            <p>{paragraph}</p>
            <p>
              <a href={link}>See more on GitHub</a>
            </p>
          </div>
          <div className="portright">
            <img src={image} alt={title} />
          </div>
        </div>
      )}
    </div>
  );
};

const Portfolio = () => {
  // Data for the portfolio items
  const portfolioItems = [
    {
      title: "Study Time",
      image: Study,
      link: "https://github.com/DolapoOye/AvgStudyTime",
      paragraph:
        "This C++ program was developed to calculate the average number of hours a student spent studying both math and programming on a daily basis. By prompting the user to input the total number of hours dedicated to each subject over a specified period, the program efficiently computed the daily average for both disciplines. Built using C++, it utilized simple input and output operations, along with basic arithmetic functions, to ensure accurate calculations. Its primary aim was to help students track and optimize their study schedules by providing a clear breakdown of how time was distributed between math and programming. The use of C++ ensured quick execution and a smooth user experience, making it a valuable tool for managing academic productivity.",
    },
    {
      title: "Portfolio Website",
      image: Website,
      link: "https://github.com/sammy867/Dolapoweb",
      paragraph:
        "Leveraging modern technologies such as HTML5, CSS3, and JavaScript, I developed a dynamic portfolio website that showcases my professional skills and personal journey. This platform serves as a digital resume, highlighting my work, achievements, and growth while providing an engaging experience for visitors to explore who I am and what I offer. Through intuitive design and responsive elements, the website effectively communicates my brand and connects me with potential opportunities",
    },
    {
      title: "JavaFx",
      image: Java,
      link: "https://github.com/DolapoOye/samples",
      paragraph:
        "Using Java, I developed a versatile tool that allows users to explore and execute JavaFX samples with customizable options and build configurations. This tool offers flexibility in running various JavaFX projects, providing a seamless interface to test different scenarios and streamline the development process across multiple build tools.",
    },
    {
      title: "Taxer",
      image: Tax,
      link: "https://github.com/DolapoOye/Sales-tax",
      paragraph:
        "I developed this Java-based application supported by C++ to simplify tax calculations, enabling users to accurately compute their taxes while identifying potential savings. By automating the complex and time-consuming process of manual tax computation, this tool reduces errors and provides an efficient solution for managing tax obligations. It incorporates precise tax algorithms and logic, ensuring users receive reliable and detailed breakdowns of their tax liabilities without the need for manual calculations.",
    },
    {
      title: "PayCode",
      image: Salary,
      link: "https://github.com/DolapoOye/Paycode",
      paragraph:
        "I built this program using the Java programming language to calculate the salary and bi-weekly pay of managers, as well as the weekly and bi-weekly pay for other employees. By implementing Java’s robust capabilities, I automated payroll calculations and incorporated distinct salary structures for different roles. This approach ensures accurate compensation breakdowns while minimizing administrative effort. The program effectively handles various pay schedules and delivers clear, real-time outputs, making it an invaluable tool for precise and efficient employee payroll management.",
    },
  ];

  return (
    <div className="port">
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
      <div className="persona">
        <ReactTyped
          className="adis"
          strings={[
            "Portfolio",
            "Catch a Glimpse of some of my best works",
            "Browse a selection of my work",
            "Explore a Sample of My Projects",
            "Discover a few of my projects",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />

        {/* Map through portfolio items */}
        <div className="special">
          {portfolioItems.map((item, index) => (
            <PortfolioItem
              key={index}
              title={item.title}
              image={item.image}
              link={item.link}
              paragraph={item.paragraph}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
