import React from "react";
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Notes from './components/Notes';
import NavBar from "./components/NavBar"
import Login from "./components/Login"
import Signup from "./components/Signup"
import Forgetpassword from "./components/Forgetpassword"
import Wishes from './components/Wishes';
import Note from "./components/Note";

function App() {

   

    return (

      <div className="bg-gray-50 dark:bg-black">
        <BrowserRouter>
        <NavBar  />
        <Wishes />
        <Routes>
        <Route path="/note" element={<div>
                <Note />
            </div>} />
        <Route path="/login" element={<div>
                <Login />
            </div>} />
            <Route path="/" element={<div className="bg-gray-50 dark:bg-black ">
            <div>
                <Header />
                <Notes />
            </div>
        </div>} />
         <Route path="/signup" element={
        <div>
        <Signup />
        
                </div>
        } />
         <Route path="/forgetpassword" element={
        <div>
<Forgetpassword />
 
        </div>
        } />
        </Routes>
        </BrowserRouter>
        </div>
    );
}

export default App;
