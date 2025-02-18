import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Productcart from './components/Productcart';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import PaymentQR from './components/PaymentQR';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import WishlistPage from './components/WishlistPage';





function App() {



  return (
  
    <div>


      <Router>
   <Navbar/>
<Routes>
 
  <Route path='/' element = {<Productcart/>}></Route>
  <Route path='/Cart' element = {<Cart/>}></Route>
  <Route path='/Checkout' element = {<Checkout/>}></Route>
  <Route path='/PaymentQR' element = {<PaymentQR/>}></Route>
  <Route path='/Wishlist' element = {<WishlistPage/>}></Route>


</Routes>

  </Router>
  

  
    </div>
    
  )
}

export default App
