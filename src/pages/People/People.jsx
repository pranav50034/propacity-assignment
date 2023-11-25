import React, { useEffect, useState } from 'react';
import "./People.css"
import { useQuery } from '@tanstack/react-query';
import { getPeople, getPersonSpecies } from '../../api/api';
import Table from '../../components/Table/Table';
import Users from "../../assets/Users.svg"
import Card from '../../components/Card/Card';
import Searchbar from '../../components/Searchbar/Searchbar';
import ViewTile from '../../components/ViewTile/ViewTile';

let id= 1;

const People = ({tab, setTab}) => {

    const [viewType, setViewType] = useState("list");

    const { data, isLoading, isError, error } = useQuery({
       queryKey: ["people"],
       queryFn: getPeople,
    });

    const { sdata, sisLoading, sisError, serror } = useQuery({
       queryKey: ["specificSpecies"],
       queryFn: getPersonSpecies(id),
    });

    id = id+1;

    useEffect(() => {
        setTab("people")
    }, [])
  return (
     <div className="people">
        <div className="search-container">
           <Searchbar />
        </div>
        <div className="title-container">
           <p className="page-title">People</p>
           <ViewTile viewType={viewType} setViewType={setViewType} />
        </div>
        <div className={`films-container grid-view`}>
           {isLoading && <p>Loading...</p>}
           {isError && <p>Error fetching data!</p>}
           {data &&
              viewType == "grid" &&
              data.results.map((item, index) => (
                 <Card uniqueKey={index} logo={Users} name={item.name} />
              ))}
        </div>
        <div className="films-container list-view">
           {data && viewType == "list" && (
              <>
                 <table>
                    <thead>
                       <tr>
                          <th className="name">Name</th>
                          <th className="director">Birth Date</th>
                          <th className="release">Species</th>
                          <th></th>
                       </tr>
                    </thead>
                    <tbody>
                       {data.results.map((item, index) => (
                          <Table
                             uniqueKey={index}
                             logo={Users}
                             first={item.name}
                             second={item.birth_year}
                             third={sdata ? sdata.name : "NA"}
                          />
                       ))}
                    </tbody>
                 </table>
              </>
           )}
        </div>
     </div>
  );
}

export default People