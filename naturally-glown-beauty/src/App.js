import { BrowserRouter, Switch, Route } from "react-router-dom";

import './App.css';
import index from "./components/pages/index.js"
import Aboutus from "./components/pages/Aboutus.js"
import Products from "./components/pages/Products.js"
import Contactus from "./components/pages/Contactus.js"
import NavBar from "./components/pages/NavBar.js"
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
   <BrowserRouter>
   <NavBar />
    <Switch>
      <Route component={index} path='/' exact />
      <Route component={Aboutus} path='/aboutus' />
      <Route component={Products} path='/products' />
      <Route component={Contactus} path='/contactus' />
    </Switch>
   </BrowserRouter>
  );
}

export default App;