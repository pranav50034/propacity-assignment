import React, { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./App.css";
import Films from "./pages/Films/Films";
import People from "./pages/People/People";
import Vehicles from "./pages/Vehicles/Vehicles";
import Planets from "./pages/Planets/Planets";
import Starships from "./pages/Starships/Starships";
import Species from "./pages/Species/Species";

function App() {

   const [tab, setTab] = useState("");

   return (
      <div className="main">
         <Sidebar tab={tab} setTab={setTab} />
         <Routes>
            <Route
               path="/"
               element={<Home tab={tab} setTab={setTab} />}
            ></Route>
            <Route
               path="/films"
               element={<Films tab={tab} setTab={setTab} />}
            ></Route>
            <Route
               path="/people"
               element={<People tab={tab} setTab={setTab} />}
            ></Route>
            <Route
               path="/planets"
               element={<Planets tab={tab} setTab={setTab} />}
            ></Route>
            <Route
               path="/species"
               element={<Species tab={tab} setTab={setTab} />}
            ></Route>
            <Route
               path="/starships"
               element={<Starships tab={tab} setTab={setTab} />}
            ></Route>
            <Route
               path="/vehicles"
               element={<Vehicles tab={tab} setTab={setTab} />}
            ></Route>
         </Routes>
      </div>
   );
}

export default App;
