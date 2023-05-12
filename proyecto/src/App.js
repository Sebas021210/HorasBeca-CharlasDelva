import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/login/login.js";
import MenuBeca from "./components/horasBeca/menuBeca/menuBeca.js";
import MenuDelva from "./components/charlasDelva/menuDelva/menuDelva.js";
import NuevaActividad from "./components/horasBeca/nuevaActividad/nuevaActividad.js";
import NuevaDelva from "./components/charlasDelva/nuevaDelva/nuevaDelva.js";
import CalendarioBeca from "./components/horasBeca/calendarioBeca/calendarioBeca.js";
import CalendarioDelva from "./components/charlasDelva/calendarioDelva/calendarioDelva.js";
import "./App.css";

class App extends Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route>
                        <Route path="/menuBeca" element={<MenuBeca />} />
                        <Route path="/nuevaActividad" element={<NuevaActividad />} />
                        <Route path="/calendarioBeca" element={<CalendarioBeca />} />
                    </Route>
                    <Route>
                        <Route path="/menuDelva" element={<MenuDelva />} />
                        <Route path="/nuevaDelva" element={<NuevaDelva />} />
                        <Route path="/calendarioDelva" element={<CalendarioDelva />} />
                    </Route>
                </Routes>
            </Router>
        );
    }
}

export default App;
