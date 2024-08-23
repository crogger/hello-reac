import { Fragment } from "react";
import './Estilos.css'

function Ciudad({nombre, descripcion, imagen}){
    return(
        <>
          <div className="ciudad">
               <h3 className="cidad_titulo">{nombre}</h3>
               <p className="cidad_descripcion">{descripcion}</p>
               <img src={imagen} alt= {nombre} />
          </div>   
        </>
    );
}