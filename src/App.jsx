import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Profil } from "./pages/Profil";
import { Gaji } from "./pages/Gaji";

// import './App.css'

function App() {
  return (
    <>
      <div>
        {/* Static sidebar for desktop */}
        <div className=" lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6">
            <div className="flex h-16 shrink-0 items-center text-white">
              <p>PT XYX</p>
            </div>
            <nav className="flex flex-1 flex-col">
              <ul role="list" className="flex flex-1 flex-col gap-y-7">
                <li>
                  <ul role="list" className="-mx-2 space-y-1">
                    <li>
                      <Link
                        to={"/"}
                        className=" text-indigo-200 hover:text-white hover:bg-indigo-700
                          group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                      >
                        Profil
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={"/gaji"}
                        className=" text-indigo-200 hover:text-white hover:bg-indigo-700
                          group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold"
                      >
                        Gaji
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <main className="py-10 lg:pl-72">
          <div className="px-4 sm:px-6 lg:px-8">
            {" "}
            <Routes>
              <Route path="/" element={<Profil />} />
              <Route path="/gaji" element={<Gaji />} />
            </Routes>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
