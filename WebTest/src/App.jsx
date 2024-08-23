import { Fragment } from "react";
import Titulo from "./componentes/titulo";
import Pie from './componentes/pie';
import Ciudad from "./componentes/Ciudad";

function App() {
  return (
    <>
      <Titulo />
      <Ciudad
        nombre='Lima'
        descripcion='Capital del Perú'
        imagen='https://c4.wallpaperflare.com/wallpaper/911/492/963/arbol-naturaleza-paisajes-prado-wallpaper-preview.jpg'
      />
      <Pie />
    </>
  );
}

export default App;