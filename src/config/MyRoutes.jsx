import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Details from "../pages/Details";

export default function MyRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/:category" element={<Catalog></Catalog>}></Route>
        <Route path="/:category/:id" element={<Details></Details>}></Route>
        <Route
          path="/:category/search/:keyword"
          exact
          element={<Catalog></Catalog>}
        ></Route>
      </Routes>
    </div>
  );
}
