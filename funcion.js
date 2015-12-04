function descargaArchivo() {
  // Obtener la instancia del objeto XMLHttpRequest
  if(window.XMLHttpRequest) {
    peticion_http = new XMLHttpRequest();
  }
  else if(window.ActiveXObject) {
    peticion_http = new ActiveXObject("Microsoft.XMLHTTP");
  }
 
  // Preparar la funcion de respuesta
  peticion_http.onreadystatechange = cambiaColor;
 
  // Realizar peticion HTTP
  peticion_http.open('GET', 'https://floating-badlands-2133.herokuapp.com/color', true);
  peticion_http.send(null);
 
  function cambiaColor() {
    if(peticion_http.readyState == 4) {
      if(peticion_http.status == 200) {
        // console.log(peticion_http.responseText);

        var objeto = JSON.parse(peticion_http.responseText);
        console.log(objeto.color)
        console.log(peticion_http)


        var body = document.querySelector("body");
        body.style.backgroundColor = objeto.color;


      }
    }
  }
}
 
window.onload = descargaArchivo;



