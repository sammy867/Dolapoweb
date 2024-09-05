import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import "./Sidebar.css";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const sidebarRef = useRef(null);

  const showSidebar = () => setSidebar(!sidebar);

  // Sidebar data excluding Home
  const SidebarData = [
    {
      title: "Home",
      path: "/",
      icon: <AiIcons.AiFillHome />,
      cName: "nav-text",
    },
    {
      title: "About",
      path: "/about",
      icon: <AiIcons.AiFillInfoCircle />,
      cName: "nav-text",
    },
    {
      title: "Services",
      path: "/services",
      icon: <FaIcons.FaBriefcase />,
      cName: "nav-text",
    },
    {
      title: "Skills",
      path: "/skills",
      icon: <FaIcons.FaTools />,
      cName: "nav-text",
    },
    {
      title: "Portfolio",
      path: "/portfolio",
      icon: <AiIcons.AiFillFolderOpen />,
      cName: "nav-text",
    },
  ];

  // Handle closing the sidebar when clicking outside of it
  const handleClickOutside = (event) => {
    if (
      sidebar &&
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target)
    ) {
      setSidebar(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <>
      <div className="menu-bars">
        <div className="toggle-icon" onClick={showSidebar}>
          {sidebar ? <MdIcons.MdOutlineClose /> : <FaIcons.FaBars />}
        </div>
      </div>
      <nav
        className={sidebar ? "nav-menu active" : "nav-menu"}
        ref={sidebarRef}
      >
        <ul className="nav-menu-items">
          <li className="navbar-toggle">
            <div
              className="menu-bars"
              onClick={(e) => {
                e.preventDefault();
              }}
            ></div>
          </li>
          {SidebarData.map((item, index) => (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
