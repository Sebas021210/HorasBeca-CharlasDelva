import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './login.css';

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = async (e) => {
        e.preventDefault() 
        try {
            const response = await fetch(`http://localhost:5050/usuarios`);
            if (response.ok) {
                const data = await response.json();
                console.log(data);
                const usuarioEncontrado = data.find(usuarios => email === usuarios.correo && password === usuarios.contraseña);
                console.log(usuarioEncontrado);

                if (usuarioEncontrado) {
                    const idRol = usuarioEncontrado.id_rol;
                    if (idRol === 2) {
                        navigate('/menuBeca');
                    } else if (idRol === 3) {
                        navigate('/menuDelva');
                    } else {
                        console.log('Error: Rol no encontrado');
                    }
                } else {
                    console.log('Error: Usuario no encontrado');
                }
            } else {
                console.log('Error: No se pudo obtener la lista de usuarios');
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <main>
            <div id="login">
                <form id="login_form" className="form_class" method="post">
                    <img src="https://tienda.uvg.edu.gt/attach/tiendas/Logo-vertical-verde_5a8b26cb76441.jpg" alt="Logo" />
                    <div className="form_div">
                        <label>Login:</label>
                        <input
                            className="field_class"
                            name="user_txt"
                            type="text"
                            placeholder="Ingrese su usuario"
                            autoFocus
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label>Password:</label>
                        <input
                            id="pass"
                            className="field_class"
                            name="password_txt"
                            type="password"
                            placeholder="Ingrese su contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className="submit_class" onClick={handleClick}>Iniciar Sesión</button>
                    </div>
                </form>
            </div>
        </main>
    );
}
