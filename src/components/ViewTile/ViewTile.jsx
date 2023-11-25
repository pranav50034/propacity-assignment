import React from "react";
import { UilApps, UilListUl } from "@iconscout/react-unicons";
import "./ViewTile.css";

const ViewTile = ({viewType, setViewType}) => {
   return (
      <div className="view-tile-container">
         <div
            className="grid"
            onClick={() => {
               setViewType("grid");
            }}
         >
            <UilApps/>
            {viewType == "grid" && <span>Grid</span>}
         </div>
         <div
            className="list"
            onClick={() => {
               setViewType("list");
            }}
         >
            <UilListUl/>
            {viewType == "list" && <span>List</span>}
         </div>
      </div>
   );
};

export default ViewTile;
