import React from "react";
import { useNavigate } from 'react-router-dom';
import { AiOutlineCalendar } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";
import '../menuDelva/menuDelva.css'
import './nuevaDelva.css'

export default function NuevaDelva() {
    const navigateNC = useNavigate();
    const navigateCAL = useNavigate();
    const navigateAH = useNavigate();

    const handleClickNC = () => {
        navigateNC('/nuevaDelva');
    };

    const handleClickCAL = () => {
        navigateCAL('/charla');
    };

    const handleClickAH = () => {
        navigateAH('/alumnos');
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
                        <li onClick={handleClickNC}><a class="icon icon-new" href="#"><AiOutlinePlus  style={{ fontSize: "26px", color: "white", marginRight: "5%"}}/>Nueva Charla Delva</a></li>
                        <li onClick={handleClickCAL}><a class="icon icon-calendar" href="#"><AiOutlineCalendar style={{ fontSize: "26px", color: "white", marginRight: "5%"}}/>Charlas</a></li>
                        <li onClick={handleClickAH}><a class="icon icon-alumnos" href="#"><AiOutlineTeam style={{ fontSize: "26px", color: "white", marginRight: "5%"}}/>Historial alumnos</a></li>
                    </ul>
                </nav>
            </div>
        </div>

            <div class="formbold-main-wrapper">
                <div className="espacio"></div>
                <div class="formbold-form-wrapper">
                    <h1>Nueva Charla Delva</h1>
                    <div className="linea"></div>      
                    <form method="POST">
                        <div class="formbold-mb-5">
                            <label for="name" class="formbold-form-label"> Charla Delva </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Nombre de la charla delva"
                                class="formbold-form-input"
                            />
                        </div>

                        <div class="formbold-mb-5">
                            <label for="description" class="formbold-form-label"> Descripción </label>
                            <textarea
                                type="text"
                                name="description"
                                id="description"
                                placeholder="Descripción de la charla delva"
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

                        <div class="formbold-input-radio-wrapper">
                            <label for="ans" class="formbold-form-label">
                                Formato de la charla delva
                            </label>

                            <div class="formbold-radio-flex">
                                <div class="formbold-radio-group">
                                    <label class="formbold-radio-label">
                                        <input
                                            class="formbold-input-radio"
                                            type="radio"
                                            name="ans"
                                            id="ans"
                                        />
                                        Presencial
                                        <span class="formbold-radio-checkmark"></span>
                                    </label>
                                </div>

                                <div class="formbold-radio-group">
                                    <label class="formbold-radio-label">
                                        <input
                                            class="formbold-input-radio"
                                            type="radio"
                                            name="ans"
                                            id="ans"
                                        />
                                        Virtual
                                        <span class="formbold-radio-checkmark"></span>
                                    </label>
                                </div>

                                <div class="formbold-radio-group">
                                    <label class="formbold-radio-label">
                                        <input
                                            class="formbold-input-radio"
                                            type="radio"
                                            name="ans"
                                            id="ans"
                                        />
                                        Híbrido
                                        <span class="formbold-radio-checkmark"></span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="formbold-mb-5">
                            <label for="description" class="formbold-form-label"> Comentarios </label>
                            <textarea
                                type="text"
                                name="description"
                                id="description"
                                placeholder="Comentarios..."
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

