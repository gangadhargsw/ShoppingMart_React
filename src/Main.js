import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./components/home/home.tsx";
import AllOffers from "./components/pages/all-offers/alloffers.tsx"
import MobilesandTablets from "./components/pages/mobiles-tablets/mobiles&tablets.tsx"
import Electronics from "./components/pages/electronics/electronics.tsx"
import TVandAppliances from "./components/pages/tv-appliances/tv&appliances.tsx"
import Fashions from "./components/pages/fashions/fashions.tsx"
import Beauty from "./components/pages/beauty/beauty.tsx"
import HomeandFurniture from "./components/pages/home-furniture/home&furniture.tsx"
import Flights from "./components/pages/flights/flights.tsx"
import Grocery from "./components/pages/grocery/grocery.tsx"

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => {
    return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/alloffers" element={<AllOffers />} />
        <Route path="/mobilesandtablets" element={<MobilesandTablets />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/tvandappliances" element={<TVandAppliances />} />
        <Route path="/fashions" element={<Fashions />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/homeandfurniture" element={<HomeandFurniture />} />
        <Route path="/flights" element={<Flights />} />
        <Route path="/grocery" element={<Grocery />} />
      </Routes>
      </BrowserRouter>
    </>
);
    }

export default Main;
