import React from 'react';
import Menu from '../Menu/Menu';


const Card = ({logo, name, uniqueKey}) => {
  return (
     <div className="films-container grid-view" key={uniqueKey}>
        <div className="film-container">
           <div className="img-container">
              <img src={logo} alt="" />
           </div>
           <div className="name-container">
              <div className="left">
                 <img src={logo} alt="" />
                 {name}
              </div>
              <div className="right">
                 <Menu />
              </div>
           </div>
        </div>
     </div>
  );
}

export default Card