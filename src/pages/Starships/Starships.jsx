import React, { useEffect, useState } from "react";
import Searchbar from "../../components/Searchbar/Searchbar";
import ViewTile from "../../components/ViewTile/ViewTile";
import Starship from "../../assets/Starship.svg";
import { getStarships } from "../../api/api.js";
import { useQuery } from "@tanstack/react-query";
import Card from "../../components/Card/Card.jsx";
import Table from "../../components/Table/Table.jsx";

const Starships = (props) => {
   const { setTab, tab } = props;

   const [viewType, setViewType] = useState("list");

   const { data, isLoading, isError, error } = useQuery({
      queryKey: ["starships"],
      queryFn: getStarships,
   });

   useEffect(() => {
      setTab("starships");
   }, []);

   return (
      <div className="films">
         <div className="search-container">
            <Searchbar />
         </div>
         <div className="title-container">
            <p className="page-title">Starships</p>
            <ViewTile viewType={viewType} setViewType={setViewType} />
         </div>
         <div className={`films-container grid-view`}>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error fetching data!</p>}
            {data &&
               viewType == "grid" &&
               data.results.map((item, index) => (
                  <Card uniqueKey={index} logo={Starship} name={item.name} />
               ))}
         </div>
         <div className="films-container list-view">
            {data && viewType == "list" && (
               <>
                  <table>
                     <thead>
                        <tr>
                           <th className="name">Name</th>
                           <th className="director">Model</th>
                           <th className="release">Hyperdrive Rating</th>
                           <th></th>
                        </tr>
                     </thead>
                     <tbody>
                        {data.results.map((item, index) => (
                           <Table
                              uniqueKey={index}
                              logo={Starship}
                              first={item.name}
                              second={item.model}
                              third={item.hyperdrive_rating}
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

export default Starships;
