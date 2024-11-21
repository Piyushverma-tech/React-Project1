import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import Header from './Components/Header.js';
import Main from './Components/Main.js';
import Footer from './Components/Footer.js';
import { Routes, Route } from "react-router-dom";
import TableReservation from './Components/TableReservation.js';



function App() {
  return (
    <>
    <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/reservation" element={<TableReservation/>} />
      </Routes>
      <Footer />
     </>
  );
}

export default App;
