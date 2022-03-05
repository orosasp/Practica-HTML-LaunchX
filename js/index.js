window.onload = () => {
  var nombrePastel = document.getElementsByTagName("h2")[0].innerHTML;
  var descripcionPastel = document.getElementsByTagName("p")[0].innerHTML;
  document.getElementById("descripcion").value =
    nombrePastel + descripcionPastel;
};
