import React, { useEffect, useState } from "react";
import Searchbar from "../../components/Searchbar/Searchbar";
import ViewTile from "../../components/ViewTile/ViewTile";
import species from "../../assets/species.svg";
import { getFilms, getSpecies } from "../../api/api.js";
import { useQuery } from "@tanstack/react-query";
import Card from "../../components/Card/Card.jsx";
import Table from "../../components/Table/Table.jsx";

const Species = (props) => {
   const { setTab, tab } = props;

   const [viewType, setViewType] = useState("list");

   const { data, isLoading, isError, error } = useQuery({
      queryKey: ["species"],
      queryFn: getSpecies,
   });

   useEffect(() => {
      setTab("species");
   }, []);

   return (
      <div className="films">
         <div className="search-container">
            <Searchbar />
         </div>
         <div className="title-container">
            <p className="page-title">Species</p>
            <ViewTile viewType={viewType} setViewType={setViewType} />
         </div>
         <div className={`films-container grid-view`}>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error fetching data!</p>}
            {data &&
               viewType == "grid" &&
               data.results.map((item, index) => (
                  <Card uniqueKey={index} logo={species} name={item.name} />
               ))}
         </div>
         <div className="films-container list-view">
            {data && viewType == "list" && (
               <>
                  <table>
                     <thead>
                        <tr>
                           <th className="name">Name</th>
                           <th className="director">Homeworld</th>
                           <th className="release">Lifespan</th>
                           <th></th>
                        </tr>
                     </thead>
                     <tbody>
                        {data.results.map((item, index) => (
                           <Table
                              uniqueKey={index}
                              logo={species}
                              first={item.name}
                              second={item.homeworld}
                              third={item.average_lifespan}
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

export default Species;
