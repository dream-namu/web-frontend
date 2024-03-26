import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { url } from "../../../config/url";
import useLayoutStore from "../../../store/LayoutStore";

const CommonSidebar: React.FC = () => {
  const { isSidebarOpen, toggleSidebar } = useLayoutStore();
  console.log("isSidebarOpen >>", isSidebarOpen);
  return (
    <>
      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <button
          className="sidebar-toggle"
          onClick={() => toggleSidebar(!isSidebarOpen)}
        >
          {isSidebarOpen ? <FaChevronLeft /> : <FaChevronRight />}
        </button>
        <div className="sidebar-header">Menu</div>
        <ul className="sidebar-menu">
          <li>
            <Link to={url.home}>Home</Link>
          </li>
          <li>
            <Link to={url.about}> About</Link>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CommonSidebar;
