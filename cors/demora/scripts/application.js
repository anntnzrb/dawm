const URL = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits?per_page=100'

const esperar = (ms) => new Promise(res => setTimeout(res, ms))

const peticion1 = async (event) => {
  const respuesta = await fetch(URL);
  const data = await respuesta.json()

  /*Inicio*/
  await esperar(5000);
  /*Fin*/

  document.getElementById("respuesta2").innerHTML = data.length + ' registros';
}

const peticion2 = async (event) => {
  const respuesta = await fetch(URL);
  const res = await fetch(URL);
  const reader = res.body.getReader();

  document.getElementById('estado2').innerHTML = 'Empezando la transmisión'

  // Paso 2: obtener el total de la respuesta
  const contentLength = +res.headers.get('Content-Length');

  // Paso 3: leer la data
  let receivedLength = 0; // bytes recibidos en este momento
  let chunks = []; // arreglo de fragmentos binarios recibidos (conforman el cuerpo)
  while (true) {
    const { done, value } = await reader.read();

    if (done) {
      break;
    }

    chunks.push(value);
    receivedLength += value.length;

    await esperar(3000);

    document.getElementById('estado2').innerHTML += '.'
  }

  // Paso 4: concatenar los framgento en un único Uint8Array
  let chunksAll = new Uint8Array(receivedLength); // (4.1)
  let position = 0;
  for (let chunk of chunks) {
    chunksAll.set(chunk, position); // (4.2)
    position += chunk.length;
  }

  // Paso 5: decodificar en una cadena
  let result = new TextDecoder("utf-8").decode(chunksAll);

  // Listo!
  let data = JSON.parse(result);
  document.getElementById("respuesta2").innerHTML = data.length + ' registros';

  document.getElementById('estado2').innerHTML = 'Listo!'
}

window.onload = () => {
  // Demora en la respuesta
  document.getElementById('cargar2').addEventListener('click', peticion2())
}
