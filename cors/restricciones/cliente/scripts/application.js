const URL1 = "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits?per_page=100"
const URL2 = "http://localhost:8080/restricciones/servidor/commits_ilya.json"

const esperar = (ms) => new Promise(res => setTimeout(res, ms))

const peticion = async (event) => {
  const respuesta = await fetch(URL2);
  const data = await respuesta.json()
}

const sobrecargar = async (event) => {
  for (let vez = 0; vez < 500; ++vez) {
    // Llame a la función peticion
    /*Inicio*/
    peticion();
    /*Fin*/

    document.getElementById("respuesta3").innerHTML = 'Peticion ' + (vez + 1)
    await esperar(1)
  }
}

window.onload = () => {
  //Restricciones en el servidor
  document.getElementById('cargar3').addEventListener('click', sobrecargar())
}
