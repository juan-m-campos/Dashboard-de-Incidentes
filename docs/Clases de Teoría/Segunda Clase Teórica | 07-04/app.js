let boton = document.getElementById("btn");

boton.addEventListener("click", function () {
  alert("¡Hola! Has hecho clic en el botón Start.");
});

let temaBtn = document.getElementById("tema");

temaBtn.addEventListener("click", function () {
  let fondo = document.getElementById("fondo");
  if (fondo.src.includes("WXP.jpg")) {
    fondo.src = "/Assets/WXP_Night-2.png";
  } else {
    fondo.src = "/Assets/WXP.jpg";
  }
});
