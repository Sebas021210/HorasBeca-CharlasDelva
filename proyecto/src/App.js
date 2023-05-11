import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/login/login.js";
import HorasBeca from "./components/horasBeca/horasBeca.js";
import "./App.css";

class App extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/horasBeca" element={<HorasBeca />} />
                </Routes>
            </Router>
        );
    }
}

export default App;
