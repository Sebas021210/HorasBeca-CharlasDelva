import React from "react";
import { useNavigate } from 'react-router-dom';
import {AiOutlineCalendar} from "react-icons/ai";
import {AiOutlinePlus} from "react-icons/ai";
import {AiOutlineTeam} from "react-icons/ai";
import './menuBeca.css'

export default function MenuBeca() {
    const navigateNA = useNavigate();
    const navigateC = useNavigate();
    const navigateHA = useNavigate();

    const handleClickNA = () => {
        navigateNA('/nuevaActividad');
    };

    const handleClickC = () => {
        navigateC('/menuBeca');
    };

    const handleClickHA = () => {
        navigateHA('/menuBeca');
    };

    return (
        <div id ="sidebar">
            <div className="top__links">
                <div className="logo">
                <img
                src="https://camtur.org/wp-content/uploads/2021/01/Logo-UVG-002.jpg"
                alt="Delvalle"
                />
                </div>
                <ul>
                    <li onClick={handleClickNA}>
                        <AiOutlinePlus style={{ fontSize: "27.5px" }}/>
                        <span>Nueva Actividad</span>
                    </li>
                    <li onClick={handleClickC}>
                        <AiOutlineCalendar style={{ fontSize: "27.5px" }}/>
                        <span>Calendario</span>
                    </li>
                    <li onClick={handleClickHA}>
                        <AiOutlineTeam style={{ fontSize: "27.5px", color: "white" }}/>
                        <span>Historial alumnos</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

