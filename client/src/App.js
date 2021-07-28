import React, { Component } from "react";
import "./index.css"
import {BrowserRouter,Route} from 'react-router-dom'
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";



function App() {
  return (
    <>
    <BrowserRouter>
      <div className="App">

        <div className="grid-container">
          <header className="row">
            <div>
              <a href="/" className="brand">amazonia</a>
            </div>
            <div>
              <a herf="/cart">Cart</a>
              <a herf="/signin">Sign In</a>
            </div>
          </header>
          <main>
            <Route path="/product/:id" component={ProductScreen}></Route>
            <Route path="/" component={HomeScreen} exact></Route>

          </main>
          <footer className="row center">
            All right reserved.
          </footer>
        </div>


      </div>
      </BrowserRouter>
    </>
  );
}


export default App;
