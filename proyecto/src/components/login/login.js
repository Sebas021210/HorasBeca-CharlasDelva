import React from "react";
import { useNavigate } from 'react-router-dom';
import './login.css';

export default function Login() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/horasBeca');
    };

    return (
        <main>
            <div id="login">
                <form id="login_form" className="form_class" method="post">
                    <img src="https://tienda.uvg.edu.gt/attach/tiendas/Logo-vertical-verde_5a8b26cb76441.jpg" alt="Logo" />
                    <div className="form_div">
                        <label>Login:</label>
                        <input className="field_class" name="login_txt" type="text" placeholder="Ingrese su usuario" autoFocus />
                        <label>Password:</label>
                        <input id="pass" className="field_class" name="password_txt" type="password" placeholder="Ingrese su contraseña" />
                        <button className="submit_class" onClick={handleClick}>Iniciar Sesión</button>
                    </div>
                </form>
            </div>
        </main>
    );
}
