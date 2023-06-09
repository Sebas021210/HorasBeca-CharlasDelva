import React from "react";
import { useNavigate } from 'react-router-dom';
import { AiOutlineCalendar } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineTeam } from "react-icons/ai";
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule';
import '../menuDelva/menuDelva.css'
import './calendarioDelva.css';

const licenseKey = "GTIlMmhhYn1hfWdoYmJ8Y2V8YWNhYHNia2lhY2lnZ2ggIDw/PCEpMj08YmMTND4yOj99MDw+";

export default function CalendarioDelva() {
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
        navigateAH('/menuDelva');
    };

    React.useEffect(() => {
        ScheduleComponent.Inject(Day, Week, WorkWeek, Month, Agenda);
        ScheduleComponent.licenseKey = licenseKey;
    }, []);

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
                    <li onClick={handleClickNC}><a class="icon icon-new"><AiOutlinePlus  style={{ fontSize: "26px", color: "white", marginRight: "5%"}}/>Nueva Charlas Delva</a></li>
                    <li onClick={handleClickCAL}><a class="icon icon-calendar"><AiOutlineCalendar style={{ fontSize: "26px", color: "white", marginRight: "5%"}}/>Charlas</a></li>
                    <li onClick={handleClickAH}><a class="icon icon-alumnos"><AiOutlineTeam style={{ fontSize: "26px", color: "white", marginRight: "5%"}}/>Historial alumnos</a></li>
                    </ul>
                </nav>
            </div>
        </div>

            <div className="calendario">
                <ScheduleComponent>
                    <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
                </ScheduleComponent>
            </div>
        </div>
    );
}
