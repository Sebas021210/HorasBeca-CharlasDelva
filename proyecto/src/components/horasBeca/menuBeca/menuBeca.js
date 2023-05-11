
import React from "react";
import {AiOutlineCalendar} from "react-icons/ai";
import {AiOutlinePlus} from "react-icons/ai";
import {AiOutlineTeam} from "react-icons/ai";
import './sidebar.scss'
import React from 'react';


export default function Sidebar() {
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
                    <li>
                        <AiOutlinePlus style={{ fontSize: "27.5px" }}/>
                        <span>Nueva Actividad</span>
                    </li>
                    <li>
                        <AiOutlineCalendar style={{ fontSize: "27.5px" }}/>
                        <span>Calendario</span>
                    </li>
                    <li>
                        <AiOutlineTeam style={{ fontSize: "27.5px", color: "white" }}/>
                        <span>Historial alumnos</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

