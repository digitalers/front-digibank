import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CrearCliente from './Components/CrearCliente/CrearCliente';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/cliente' element={<CrearCliente/>}/>

        {/*<Route path='/listado' element={<Listado/>}/>*/}

      </Routes>
      
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
