import React from 'react'; 
import Navbar from './components/navbar';
import Filters from './components/Filters';
import FruitCard from './components/FruitCard';
import Items from './components/Items';
import SeasonSpecials from './components/SeasonSpecials';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Navbar />
      <Filters />
      <FruitCard />
      <Items />
      <SeasonSpecials />
      <Footer />
    </>
  );
}

export default App

