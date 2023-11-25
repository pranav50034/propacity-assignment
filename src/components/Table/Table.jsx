import React from 'react';
import filmlogo from "../../assets/filmlogo.svg";
import { UilEllipsisV } from "@iconscout/react-unicons";
import { getPersonSpecies } from '../../api/api';
import { useQuery } from '@tanstack/react-query';
import Menu from '../Menu/Menu';

const Table = ({logo, first, second, third, uniqueKey}) => {


  return (
     <tr key={uniqueKey}>
        <td
           style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--x2)",
           }}
        >
           <img src={logo} alt="" />
           {first}
        </td>
        <td>{second}</td>
        <td>{third}</td>
        <td>
           <Menu />
        </td>
     </tr>
  );
}

export default Table


