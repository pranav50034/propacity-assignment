import React, { useEffect, useState } from "react";
import Searchbar from "../../components/Searchbar/Searchbar";
import ViewTile from "../../components/ViewTile/ViewTile";
import "./Films.css";
import filmlogo from "../../assets/filmlogo.svg";
import { getFilms } from "../../api/api.js";
import { useQuery } from "@tanstack/react-query";
import Card from "../../components/Card/Card.jsx";
import Table from "../../components/Table/Table.jsx";

const Films = (props) => {
   const { setTab, tab } = props;

   const [viewType, setViewType] = useState("grid");

   const { data, isLoading, isError, error } = useQuery({
      queryKey: ["films"],
      queryFn: getFilms,
   });

   useEffect(() => {
      setTab("films");
   }, []);

   return (
      <div className="films">
         <div className="search-container">
            <Searchbar />
         </div>
         <div className="title-container">
            <p className="page-title">Films</p>
            <ViewTile viewType={viewType} setViewType={setViewType} />
         </div>
         <div className={`films-container grid-view`}>
            {isLoading && <p>Loading...</p>}
            {isError && <p>Error fetching data!</p>}
            {data &&
               viewType == "grid" &&
               data.results.map((item, index) => (
                  <Card uniqueKey={index} logo={filmlogo} name={item.title} />
               ))}
         </div>
         <div className="films-container list-view">
            {data && viewType == "list" && (
               <>
                  <table>
                     <thead>
                        <tr>
                           <th className="name">Name</th>
                           <th className="director">Director</th>
                           <th className="release">Release Date</th>
                           <th></th>
                        </tr>
                     </thead>
                     <tbody>
                        {data.results.map((item, index) => (
                           <Table
                              uniqueKey={index}
                              logo={filmlogo}
                              first={item.title}
                              third={item.release_date}
                              second={item.director}
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

export default Films;
