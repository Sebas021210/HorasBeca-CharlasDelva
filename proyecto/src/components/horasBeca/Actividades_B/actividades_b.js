import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { AiOutlineCalendar } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";
import '../menuBeca/menuBeca.css'
import './actividades_b.css'

export default function Actividades_B() {
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
        navigateHA('/alumnos_b');
    };

  const [charlas, setCharlas] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetch('http://localhost:5050/charlas')
      .then(response => response.json())
      .then(data => {
        setCharlas(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSearch = (e) => {
    setSearchText(e.target.value.toLowerCase());
  };

  const filteredData = charlas.filter(charla =>
    charla.nombre_charla.toLowerCase().includes(searchText)
  );

  return (
    <div>
      <div id="sidebar">
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
          <nav className="st-menu st-effect-1" id="menu-1">
            <ul>
            <li onClick={handleClickNA}><a class="icon icon-new" href="#"><AiOutlinePlus style={{ fontSize: "26px", color: "white", marginRight: "5%" }} />Nueva Actividad</a></li>
            <li onClick={handleClickC}><a class="icon icon-calendar" href="#"><AiOutlineCalendar style={{ fontSize: "26px", color: "white", marginRight: "5%" }} />Actividades Horas Beca</a></li>
            <li onClick={handleClickHA}><a class="icon icon-alumnos" href="#"><AiOutlineTeam style={{ fontSize: "26px", color: "white", marginRight: "5%" }} />Historial alumnos</a></li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="formbold-main-wrapper">
        <div className="espacio"></div>
        <div id="Titulo">
          <h1>Actividades Horas Beca</h1>
        <div className="linea"></div> 
        </div>
        <div className="search__container">
          <input id="searchInput" onChange={handleSearch} />
        </div>
        <div className="container">
          <table id="TableInventario">
            <thead>
              <tr>
                <th>Nombre Actividad Horas Beca</th>
                <th>Descripción</th>
                <th>Fecha</th>
                <th>hora</th>
                <th>Cupo de Estudiantes</th>
                <th>Turnos</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map(charla => (
                <tr key={charla.id_charlas}>
                  <td>{charla.nombre_charla}</td>
                  <td>{charla.descripcion}</td>
                  <td>{charla.fecha}</td>
                  <td>{charla.hora}</td>
                  <td>{charla.formato}</td>
                  <td>{charla.comentarios}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}

