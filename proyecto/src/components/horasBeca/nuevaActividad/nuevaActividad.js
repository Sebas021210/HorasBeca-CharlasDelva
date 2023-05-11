import React from "react";
import { useNavigate } from 'react-router-dom';
import { AiOutlineCalendar } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";
import './nuevaActividad.css';

export default function NuevaActividad() {
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
        <div>
            <div id="sidebar">
                <div className="top__links">
                    <div className="logo">
                        <img
                            src="https://camtur.org/wp-content/uploads/2021/01/Logo-UVG-002.jpg"
                            alt="Delvalle"
                        />
                    </div>
                    <ul>
                        <li onClick={handleClickNA}>
                            <AiOutlinePlus style={{ fontSize: "27.5px" }} />
                            <span>Nueva Actividad</span>
                        </li>
                        <li onClick={handleClickC}>
                            <AiOutlineCalendar style={{ fontSize: "27.5px" }} />
                            <span>Calendario</span>
                        </li>
                        <li onClick={handleClickHA}>
                            <AiOutlineTeam style={{ fontSize: "27.5px", color: "white" }} />
                            <span>Historial alumnos</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="formbold-main-wrapper">
                <div class="formbold-form-wrapper">
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
                            <input
                                type="text"
                                name="description"
                                id="description"
                                placeholder="Descripción de la actividad"
                                class="formbold-form-input"
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
                            <input
                                type="text"
                                name="turnos"
                                id="turnos"
                                placeholder="Descripción de la actividad"
                                class="formbold-form-input"
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
