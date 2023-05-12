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
        navigateCAL('/calendarioDelva');
    };

    const handleClickAH = () => {
        navigateAH('/menuDelva');
    };

    return (
        <div id ="sidebar">
            <div className="top__links">
                <div className="logo_black">
                    <div className="logo">
                    <img
                    src="https://altiplano.uvg.edu.gt/admisiones/images/logo_uvgadmin.png"
                    alt="Delvalle"
                    />
                    </div>
                </div>    
                <div className="divisor"></div>
                <div className="divisor_2"></div>
                <nav class="st-menu st-effect-1" id="menu-1">
                    <ul>
                        <li onClick={handleClickNC}><a class="icon icon-new" href="#"><AiOutlinePlus  style={{ fontSize: "26px", color: "white", marginRight: "5%"}}/>Nueva Charla Delva</a></li>
                        <li onClick={handleClickCAL}><a class="icon icon-calendar" href="#"><AiOutlineCalendar style={{ fontSize: "26px", color: "white", marginRight: "5%"}}/>Calendario</a></li>
                        <li onClick={handleClickAH}><a class="icon icon-alumnos" href="#"><AiOutlineTeam style={{ fontSize: "26px", color: "white", marginRight: "5%"}}/>Historial alumnos</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

