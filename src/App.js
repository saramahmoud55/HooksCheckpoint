import './App.css';
import React from 'react';
import Filter from './Components/Filter';
import { Route, Routes,Outlet } from "react-router-dom";
import MovieDetails from './Components/MovieDetails';

function App() {

  function Index() {
    return <div className="text-center">
      <Outlet/></div>;
}
  return (
    <>

      <Routes>
      <Route index element={<Filter/>} />
        <Route path="Home" element={<Index/>}>
          <Route path=":id" element={<MovieDetails/>} />
        </Route>
        
      </Routes>
    </>
  );
}

export default App;
