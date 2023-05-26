import React from "react";
import { useNavigate } from 'react-router-dom';
import { AiOutlineCalendar } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";
import '../menuBeca/menuBeca.css'
import './nuevaActividad.css';

export default function NuevaActividad() {
    const navigateNA = useNavigate();
    const navigateC = useNavigate();
    const navigateHA = useNavigate();

    const handleClickNA = () => {
        navigateNA('/nuevaActividad');
    };

    const handleClickC = () => {
        navigateC('/actividades');
    };

    const handleClickHA = () => {
        navigateHA('/menuBeca');
    };

    return (
        <div>
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
                        <li onClick={handleClickNA}><a class="icon icon-new" href="#"><AiOutlinePlus  style={{ fontSize: "26px", color: "white", marginRight: "5%"}}/>Nueva Actividad</a></li>
                        <li onClick={handleClickC}><a class="icon icon-calendar" href="#"><AiOutlineCalendar style={{ fontSize: "26px", color: "white", marginRight: "5%"}}/>Calendario</a></li>
                        <li onClick={handleClickHA}><a class="icon icon-alumnos" href="#"><AiOutlineTeam style={{ fontSize: "26px", color: "white", marginRight: "5%"}}/>Historial alumnos</a></li>
                    </ul>
                </nav>
            </div>
        </div>

            <div class="formbold-main-wrapper">
                <div className="espacio"></div>
                <div class="formbold-form-wrapper">
                    <h1>Nueva Actividad</h1>
                    <div className="linea"></div>
                    <form method="POST">
                        <div class="formbold-mb-5">
                            <label for="name" class="formbold-form-label"> Actividad </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Nombre de la actividad"
                                class="formbold-form-input"
                            />
                        </div>
                        <div class="formbold-mb-5">
                            <label for="description" class="formbold-form-label"> Descripción </label>
                            <textarea
                                type="text"
                                name="description"
                                id="description"
                                placeholder="Descripción de la actividad"
                                class="formbold-form-input-big"
                            />
                        </div>
                        <div class="flex flex-wrap formbold--mx-3">
                            <div class="w-full sm:w-half formbold-px-3">
                                <div class="formbold-mb-5 w-full">
                                    <label for="date" class="formbold-form-label"> Fecha </label>
                                    <input
                                        type="date"
                                        name="date"
                                        id="date"
                                        class="formbold-form-input"
                                    />
                                </div>
                            </div>
                            <div class="w-full sm:w-half formbold-px-3">
                                <div class="formbold-mb-5">
                                    <label for="time" class="formbold-form-label"> Hora </label>
                                    <input
                                        type="time"
                                        name="time"
                                        id="time"
                                        class="formbold-form-input"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="formbold-mb-5">
                            <label for="turnos" class="formbold-form-label"> Turnos y links </label>
                            <textarea
                                type="text"
                                name="turnos"
                                id="turnos"
                                placeholder="Descripción de la actividad"
                                class="formbold-form-input-big"
                            />
                        </div>
                        <div>
                            <button class="formbold-btn">Agregar actividad</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
