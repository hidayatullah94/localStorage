import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Profil } from "./pages/Profil";
import { Gaji } from "./pages/Gaji";
import { DetailGaji } from "./pages/DetailGaji";

// import './App.css'

function App() {
  return (
    <>
      <div className="">
        <Routes>
          <Route path="/" element={<Profil />} />
          <Route path="/gaji" element={<Gaji />}>
            <Route path="/gaji" element={<DetailGaji />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
