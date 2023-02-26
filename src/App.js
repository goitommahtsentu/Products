
import './App.css';
import React from "react";
import Products from "./components/Product/Product";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import AddProduct from "./components/newProduct";
import EditProduct from "./components/EditProduct";


function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path='/' element={<Products/>}/>
                    <Route path='/add' element={<AddProduct/>}/>
                    <Route path='/edit/:id' element={<EditProduct/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
