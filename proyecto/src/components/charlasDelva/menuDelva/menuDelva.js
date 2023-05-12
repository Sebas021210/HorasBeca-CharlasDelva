import React from "react";
import { useNavigate } from 'react-router-dom';
import { AiOutlineCalendar } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";
import './menuDelva.css'

export default function MenuDelva() {
    const navigateNC = useNavigate();
    const navigateCAL = useNavigate();
    const navigateAH = useNavigate();

    const handleClickNC = () => {
        navigateNC('/nuevaDelva');
    };

    const handleClickCAL = () => {
        navigateCAL('/menuDelva');
    };

    const handleClickAH = () => {
        navigateAH('/menuDelva');
    };

    return (
        <div id="sidebar">
            <div className="top__links">
                <div className="logo">
                    <img
                        src="https://altiplano.uvg.edu.gt/admisiones/images/logo_uvgadmin.png"
                        alt="Delvalle"
                    />
                </div>
                <div className="divisor"></div>
                <ul>
                    <li onClick={handleClickNC}>
                        <AiOutlinePlus style={{ fontSize: "27.5px" }} />
                        <span>Nueva Charla Delva</span>
                    </li>
                    <li onClick={handleClickCAL}>
                        <AiOutlineCalendar style={{ fontSize: "27.5px" }} />
                        <span>Calendario</span>
                    </li>
                    <li onClick={handleClickAH}>
                        <AiOutlineTeam style={{ fontSize: "27.5px", color: "white" }} />
                        <span>Historial alumnos</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

