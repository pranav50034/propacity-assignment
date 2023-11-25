import React, { useState } from "react";
import starwarslogo from "../../assets/starwarslogo.svg";
import { UilFolder, UilAngleRight } from "@iconscout/react-unicons";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = (props) => {

   const {tab, setTab} = props;

   const navigate = useNavigate();

   return (
      <div className="sidebar-container">
         <img
            src={starwarslogo}
            className="logo"
            onClick={() => {navigate("/")}}
         />
         <div className="sidemenu-container">
            <ul className="sidemenu">
               <li className="menu-item"  style={tab==="films" ? {backgroundColor: "#cb1a80"} : {}} onClick={() => {setTab("films");navigate("/films");}} ><UilFolder />Films<UilAngleRight className="icon" /></li>
               <li className="menu-item"  style={tab==="people" ? {backgroundColor: "#cb1a80"} : {}} onClick={() => {setTab("people");navigate("/people")}} ><UilFolder />People<UilAngleRight className="icon" /></li>
               <li className="menu-item"  style={tab==="planets" ? {backgroundColor: "#cb1a80"} : {}} onClick={() => {setTab("planets");navigate("/planets")}} ><UilFolder />Planets<UilAngleRight className="icon" /></li>
               <li className="menu-item"  style={tab==="species" ? {backgroundColor: "#cb1a80"} : {}} onClick={() => {setTab("species");navigate("/species")}} ><UilFolder />Species<UilAngleRight className="icon" /></li>
               <li className="menu-item"  style={tab==="starships" ? {backgroundColor: "#cb1a80"} : {}} onClick={() => {setTab("starships");navigate("/starships")}} ><UilFolder />Starships<UilAngleRight className="icon" /></li>
               <li className="menu-item"  style={tab==="vehicles" ? {backgroundColor: "#cb1a80"} : {}} onClick={() => {setTab("vehicles");navigate("/vehicles");}} ><UilFolder />Vehicles<UilAngleRight className="icon" /></li>
            </ul>
         </div>
      </div>
   );
};

export default Sidebar;
