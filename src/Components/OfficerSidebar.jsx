// my code

import React, { useState } from 'react';
import { BiBookAlt, BiHome, BiMessage, BiSolidReport, BiStats, BiTask, BiChevronLeft, BiChevronRight, BiTrain, BiLogoDiscord, BiLogOut, BiCurrentLocation } from "react-icons/bi";
import { Link, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
const OfficerSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const handleToggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleLogout = () => {
    // Clear user data from localStorage or any other storage
    localStorage.removeItem("authToken"); // Example: remove the stored token
    localStorage.removeItem("user"); // Optional: remove user details

    // Optionally clear other application state (e.g., Redux, Context API, etc.)

    // Redirect to login page
    navigate("/login");
  };

  return (
    <div>
      <Navbar/>
   
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-gray-900 ${
          isCollapsed ? 'w-20' : 'w-64'
        } transition-all duration-300 fixed top-20 left-0 h-[calc(100vh-5rem)] z-10`}
      >
        {/* Logo and Sidebar Toggle */}
        <div className="flex items-center justify-between p-2">
          {/* <h2
            className={`text-white text-lg font-semibold transition-all ${
              isCollapsed ? 'hidden' : 'block'
            }`}
          >
            Sangam
          </h2> */}
          {/* <button
            onClick={handleToggleSidebar}
            className="text-white text-2xl hover:text-gray-400 transition-colors"
          >
            {isCollapsed ? <BiChevronRight /> : <BiChevronLeft />}
          </button> */}
        </div>

        {/* Menu List */}
        <div className="mt-8 overflow-y-auto">
          <Link
            to="/"
            className={`flex items-center gap-4 p-5 transition-colors ${
              location.pathname === '/'
                ? 'bg-gray-700 text-yellow-500'
                : 'text-white hover:bg-gray-700'
            }`}
          >
            <BiHome className="text-2xl" />
            {!isCollapsed && <span>Dashboard</span>}
          </Link>
          <Link 
            to="/taskManager" 
            className={`flex items-center gap-4 p-5 transition-colors ${location.pathname === '/taskManager' ? 'bg-gray-700 text-yellow-500' : 'text-white hover:bg-gray-700'}`}
          >
            <BiTask className="text-2xl" />
            {!isCollapsed && <span>Tasks</span>}
          </Link>
          <Link 
            to="/projects" 
            className={`flex items-center gap-4 p-5 transition-colors ${location.pathname === '/projects' ? 'bg-gray-700 text-yellow-500' : 'text-white hover:bg-gray-700'}`}
          >
            <BiBookAlt className="text-2xl" />
            {!isCollapsed && <span>Projects</span>}
          </Link>
          {/* <Link 
            to="/projectdetails" 
            className={`flex items-center gap-4 p-5 transition-colors ${location.pathname === '/projectdetails' ? 'bg-gray-700 text-yellow-500' : 'text-white hover:bg-gray-700'}`}
          >
            <BiBookAlt className="text-2xl" />
            {!isCollapsed && <span>Project Desc</span>}
          </Link> */}
          {/* <Link 
            to="/projectmanagement" 
            className={`flex items-center gap-4 p-5 transition-colors ${location.pathname === '/projectmanagement' ? 'bg-gray-700 text-yellow-500' : 'text-white hover:bg-gray-700'}`}
          >
            <BiSolidReport className="text-2xl" />
            {!isCollapsed && <span>Project Management</span>}
          </Link> */}
          <Link 
            to="/resources" 
            className={`flex items-center gap-4 p-5 transition-colors ${location.pathname === '/resources' ? 'bg-gray-700 text-yellow-500' : 'text-white hover:bg-gray-700'}`}
          >
            <BiStats className="text-2xl" />
            {!isCollapsed && <span>Resources</span>}
          </Link>
          <Link 
            to="/training" 
            className={`flex items-center gap-4 p-5 transition-colors ${location.pathname === '/training' ? 'bg-gray-700 text-yellow-500' : 'text-white hover:bg-gray-700'}`}
          >
            <BiTrain className="text-2xl" />
            {!isCollapsed && <span>Training</span>}
          </Link> 
          <Link 
            to="/discussion" 
            className={`flex items-center gap-4 p-5 transition-colors ${location.pathname === '/discussion' ? 'bg-gray-700 text-yellow-500' : 'text-white hover:bg-gray-700'}`}
          >
            <BiTrain className="text-2xl" />
            {!isCollapsed && <span>Discussion</span>}
          </Link> 
         
          <Link 
            to="/gisnew" 
            className={`flex items-center gap-4 p-5 transition-colors ${location.pathname === '/gisnew' ? 'bg-gray-700 text-yellow-500' : 'text-white hover:bg-gray-700'}`}
          >
            <BiCurrentLocation className="text-2xl" />
            {!isCollapsed && <span>GeoLocation InterFace</span>}
          </Link>
          <Link 
            to="/BidSystem" 
            className={`flex items-center gap-4 p-5 transition-colors ${location.pathname === '/BidSystem' ? 'bg-gray-700 text-yellow-500' : 'text-white hover:bg-gray-700'}`}
          >
            <BiCurrentLocation className="text-2xl" />
            {!isCollapsed && <span>BidSystem</span>}
          </Link>
          {/* <Link 
            to="/Bidding" 
            className={`flex items-center gap-4 p-5 transition-colors ${location.pathname === '/Bidding' ? 'bg-gray-700 text-yellow-500' : 'text-white hover:bg-gray-700'}`}
          >
            <BiCurrentLocation className="text-2xl" />
            {!isCollapsed && <span>Bidding</span>}
          </Link> */}
          <Link 
            to="/login" 
            onClick={handleLogout}
            className={`flex items-center gap-4 p-5 transition-colors ${location.pathname === '/logout' ? 'bg-gray-700 text-yellow-500' : 'text-white hover:bg-gray-700'}`}
          >
            <BiLogOut className="text-2xl" />
            {!isCollapsed && <span>Logout</span>}
          </Link>
        </div>
      </div>

      {/* Main Content Area */}
      <div
        // className={`transition-all duration-300 w-full ml-${isCollapsed ? '20' : '64'}`}
        // style={{ marginLeft: isCollapsed ? '5rem' : '16rem' ,marginTop:500}}
        className={`transition-all duration-300 w-full`}
        style={{
          marginLeft: isCollapsed ? '5rem' : '16rem', // Adjust based on sidebar width
          paddingTop: '5rem', // Match the height of the Navbar
        }}
      >
        {/* Your main content goes here */}
       
      </div>
    </div>
    </div>
  );
};

export default OfficerSidebar;
