'use client'
import Chart from "./Chart"
import Respuesta from "./Respuesta";
import puntuacion from "./puntuacion";

const Grafica = () => {

  let storage;
  if (process.browser) {
    storage = JSON.parse(localStorage.getItem("form"))
  }

  let amount = puntuacion()

  return (
    <div>
      <h1>RESULTADOS.</h1>
      <h1>Diagnóstico inicial de búsqueda de empleo.</h1>
      <h1>Nombre: {storage?.datos_personales.nombre_completo}</h1>
      <Chart />
      <Respuesta category="cv" amount={amount?.cv} />
      <Respuesta category="entrevista" amount={amount?.entrevista} entrevista6={storage?.entrevista.results.pregunta1} />
      <Respuesta category="empleo" amount={amount?.empleo} />
      <Respuesta category="linkedin" amount={amount?.linkedin} />
      <Respuesta category="objetivos" amount={amount?.objetivos} />
    </div>
  )
}

export default Grafica;