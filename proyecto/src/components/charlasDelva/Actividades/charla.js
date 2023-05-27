import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { AiOutlineCalendar } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";
import '../menuDelva/menuDelva.css'
import './charla.css'

export default function Charla() {
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
          <h1>Charlas Delva</h1>
          <div className="linea"></div>
        </div>
        <div className="search__container">
          <input id="searchInput" onChange={handleSearch} />
        </div>
        <div className="container_4">
          <table id="TableInventario">
            <thead>
              <tr>
                <th>Nombre Charla</th>
                <th>Descripción</th>
                <th>Fecha</th>
                <th>hora</th>
                <th>Formato</th>
                <th>Comentarios</th>
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

