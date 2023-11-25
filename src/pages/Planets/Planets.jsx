import React, { useEffect, useState } from "react";
import Searchbar from "../../components/Searchbar/Searchbar";
import ViewTile from "../../components/ViewTile/ViewTile";
import Planet from "../../assets/Planet.svg";
import { getPlanets } from "../../api/api.js";
import { useQuery } from "@tanstack/react-query";
import Card from "../../components/Card/Card.jsx";
import Table from "../../components/Table/Table.jsx";

const Planets = (props) => {
   const { setTab, tab } = props;

   const [viewType, setViewType] = useState("list");

   const { data, isLoading, isError, error } = useQuery({
      queryKey: ["planets"],
      queryFn: getPlanets,
   });

   useEffect(() => {
      setTab("planets");
   }, []);

   return (
      <div className="films">
         <div className="search-container">
            <Searchbar />
         </div>
         <div className="title-container">
            <p className="page-title">Planets</p>
            <ViewTile viewType={viewType} setViewType={setViewType} />
         </div>
         <div className={`films-container grid-view`}>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error fetching data!</p>}
            {data &&
               viewType == "grid" &&
               data.results.map((item, index) => (
                  <Card uniqueKey={index} logo={Planet} name={item.name} />
               ))}
         </div>
         <div className="films-container list-view">
            {data && viewType == "list" && (
               <>
                  <table>
                     <thead>
                        <tr>
                           <th className="name">Name</th>
                           <th className="director">Climate</th>
                           <th className="release">Gravity</th>
                           <th></th>
                        </tr>
                     </thead>
                     <tbody>
                        {data.results.map((item, index) => (
                           <Table
                              uniqueKey={index}
                              logo={Planet}
                              first={item.name}
                              second={item.climate}
                              third={item.gravity}
                           />
                        ))}
                     </tbody>
                  </table>
               </>
            )}
         </div>
      </div>
   );
};

export default Planets;
