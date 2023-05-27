import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { AiOutlineCalendar } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";
import '../menuDelva/menuDelva.css'
import './alumnos.css'

export default function Alumnos() {
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

  const [historial, setHistorial] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('http://localhost:5050/historial_estudiantes')
      .then(response => response.json())
      .then(data => {
        setHistorial(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  const filteredData = historial.filter(item =>
    item.nombres.toLowerCase().includes(search)
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
              <li onClick={handleClickNC}>
                <a className="icon icon-new" href="#">
                  <AiOutlinePlus style={{ fontSize: "26px", color: "white", marginRight: "5%" }} />Nueva Charla Delva
                </a>
              </li>
              <li onClick={handleClickCAL}>
                <a className="icon icon-calendar" href="#">
                  <AiOutlineCalendar style={{ fontSize: "26px", color: "white", marginRight: "5%" }} />Charlas
                </a>
              </li>
              <li onClick={handleClickAH}>
                <a className="icon icon-alumnos" href="#">
                  <AiOutlineTeam style={{ fontSize: "26px", color: "white", marginRight: "5%" }} />Historial alumnos
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="formbold-main-wrapper">
        <div className="espacio"></div>
        <div id="Titulo">
          <h1>Historial Alumnos</h1>
          <div className="linea"></div>
        </div>
        <div className="search__container">
          <input id="searchInput" onChange={handleSearch} />
        </div>
        <div className="container_1">
          <table id="TableInventario">
            <thead>
              <tr>
                <th>Carnet</th>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Charlas Delva</th>
                <th>Charlas Delva Realizadas</th>
                <th>Charlas Delva Faltantes</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map(item => (
                <tr key={item.carne}>
                  <td>{item.carne}</td>
                  <td>{item.nombres}</td>
                  <td>{item.apellidos}</td>
                  <td>{item.charlas_delva}</td>
                  <td>{item.act_charlas_delva}</td>
                  <td>{item.fal_charlas_delva}</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}

