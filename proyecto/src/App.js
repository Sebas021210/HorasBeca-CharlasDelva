import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/login/login.js";
import Componente1 from "./components/horasBeca/menuBeca/menuBeca.js";
import "./App.css";

class App extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/menuBeca" element={<Componente1 />} />
                </Routes>
            </Router>
        );
    }
}

export default App;
