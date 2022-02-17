
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import FavList from './components/FavList/FavList';


function App() {
  return (
    <div>

      <Navbar />

      <Routes>
        <Route path ='/' element={<Home />} />
        <Route path ='/getMovies' element = {<FavList />} /> 
      </Routes>


    </div>
  );
}

export default App;
