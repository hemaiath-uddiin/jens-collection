
import './App.css';
import Home from './Component/Home/Home';
import {

  Routes,
  Route,
} from "react-router-dom";
import Features from './Component/Features/Features';
import Navbar from './Component/Nabvar/Navbar';
import Loging from './Component/Loging/Loging';
import Register from './Component/Register/Register';
import Product from './Component/Product/Product';
import RequireAuth from './Component/RequireAuth/RequireAuth';
import SingleItem from './Component/SingleItem/SingleItem';
import Footer from "./Component/Footer/Footer"

function App() {


  return (
    <div className="App ">
       <Navbar></Navbar>  
       
       
       
      <Routes>
        <Route path="/" element={<Home></Home>}> </Route>

        <Route path="/feature" element={<Features />}></Route>
        <Route path="/loging" element={<Loging />}></Route>
        <Route path="/details/:id" element={<SingleItem />}></Route>
        
        <Route path="/register" element={<Register />}></Route>
        <Route path="/product" element={ 
           <RequireAuth>  <Product />  </RequireAuth>
       
      
      
      }></Route> 

        
      </Routes>



      <Footer></Footer>
     


    </div>

  );
}

export default App;
