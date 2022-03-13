import './App.css';
import Character from './pages/Character';
import CharactersList from './pages/CharactersList';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Search from './pages/Search';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/gql-react-test' element={<CharactersList />} />
        <Route path='/gql-react-test/search' element={<Search />} />
        <Route path='/gql-react-test/:id' element={<Character />} />
      </Routes>
    </div>
  );
}

export default App;
