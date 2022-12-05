import './App.css';
import {
  BrowserRouter,
  Routes, Route
} from "react-router-dom";

import Task1 from './Task1';
import Task2 from './Task2';
import Header from './Header';
import Listing from './Listing';

function App() {
  return (
    <BrowserRouter>
      <Header /> 
      <Routes>
        <Route path="task1" element={<Task1 />} />
        <Route path="task1/listing" element={<Listing />} />
        <Route path="task2" element={<Task2 />} />
      </Routes>  
      
    </BrowserRouter>
  );
}

export default App;
