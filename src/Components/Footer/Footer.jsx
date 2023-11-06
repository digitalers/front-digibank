import React from "react";
import './Footer.css';
import qr from '../Assets/QR_code_for_mobile_English_Wikipedia.svg';
import imgfinanc from '../Assets/BCRA_USF_Naranja.png';
const Footer = ()=>{
    return (
        <div>
        <div className="footerDiv">
            <section className="qr">
                <img src={qr} alt="codigoQR" width='120px'/>
                <div className="digi">
                <h4>¿Necesitás ayuda?</h4>
                <p>Chateá con <strong>Digi</strong>, nuestra asistente virtual de DigiBank. <br/>Sólo tenés que escanear el código QR y vas a poder resolver tus consultas las 24 horas.</p>
                </div>
            </section>
        </div>
        <section className="redes">
            <ul className="redes_lista">
            <li>Contáctenos</li>
            <li>Teléfonos útiles</li>
            <li>Redes</li>
            <li>Sucursales y cajeros</li>
            </ul>
        </section>
        <section className="infoFinanc">
            
            <ul className="informacionImp"> 
                <li>Defensa al Consumidor </li>
                <li>Información al usuario financiero</li>
                <li>Términos y condiciones</li>
                <li>Comisiones, cargos y tasas</li>
            </ul>
            <img src={imgfinanc} alt="img-info-usuario-financ" width='350px' height='125px' />
        </section>

            <div className="footerP">
            <p> - Banco DigiBank Argentina S.A 2023 - </p>

            </div>
        </div>
        
    )
}
export default Footer;