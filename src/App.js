import { Outlet, Route, Routes } from 'react-router-dom';
import './App.css';

import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';





function App() {
  return (
    <div className="App">
      <Navbar/>
      <CountriesList/>
      <CountryDetails/>
    </div>
  );
}

export default App;
