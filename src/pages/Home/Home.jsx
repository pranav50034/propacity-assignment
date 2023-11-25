import React, { useEffect } from 'react';
import "./Home.css"

const Home = ({setTab, tab}) => {
   useEffect(() => {
      setTab("")
   },[])
  return (
     <div className="home">
        <div className="hero-section">
           <div className="img-container">
              <img className='hero-img'
                 src="https://wallpapers.com/images/featured/star-wars-plzcoaffexgf4h81.webp"
                 alt=""
              />
           </div>
           <p className="hero-title">Welcome to Star Wars Dashboard</p>
           <p className="hero-desc">
              Star Wars is an American epic space opera multimedia franchise
              created by George Lucas, which began with the eponymous 1977 film
              and quickly became a worldwide pop culture phenomenon.
           </p>
        </div>
     </div>
  );
}

export default Home