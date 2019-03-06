var nombreColores = [
  "White",
  "LightYellow",
  "LemonChiffon",
  "LightGoldenrodYellow",
  "PapayaWhip",
  "Moccasin",
  "PeachPuff",
  "PaleGoldenrod",
  "Bisque",
  "NavajoWhite",
  "Wheat",
  "BurlyWood",
  "Tan",
  "Khaki",
  "Yellow",
  "Gold",
  "Orange",
  "DarkOrange",
  "OrangeRed",
  "Tomato",
  "Coral",
  "DarkSalmon",
  "LightSalmon",
  "LightCoral",
  "Salmon",
  "PaleVioletRed",
  "Pink",
  "LightPink",
  "HotPink",
  "DeepPink",
  "MediumVioletRed",
  "Crimson",
  "Red",
  "FireBrick",
  "DarkRed",
  "Maroon",
  "Brown",
  "Sienna",
  "SaddleBrown",
  "IndianRed",
  "RosyBrown",
  "SandyBrown",
  "Goldenrod",
  "DarkGoldenrod",
  "Peru",
  "Chocolate",
  "DarkKhaki",
  "DarkSeaGreen",
  "MediumAquaMarine",
  "MediumSeaGreen",
  "SeaGreen",
  "ForestGreen",
  "Green",
  "DarkGreen",
  "OliveDrab",
  "Olive",
  "DarkOliveGreen",
  "YellowGreen",
  "LawnGreen",
  "Chartreuse",
  "GreenYellow",
  "Lime",
  "SpringGreen",
  "LimeGreen",
  "LightGreen",
  "PaleGreen",
  "PaleTurquoise",
  "AquaMarine",
  "Cyan",
  "Turquoise",
  "MediumTurquoise",
  "DarkTurquoise",
  "DeepSkyBlue",
  "LightSeaGreen",
  "CadetBlue",
  "DarkCyan",
  "Teal",
  "Steelblue",
  "LightSteelBlue",
  "Honeydew",
  "LightCyan",
  "PowderBlue",
  "LightBlue",
  "SkyBlue",
  "LightSkyBlue",
  "DodgerBlue",
  "CornflowerBlue",
  "RoyalBlue",
  "SlateBlue",
  "MediumSlateBlue",
  "DarkSlateBlue",
  "Indigo",
  "Purple",
  "DarkMagenta",
  "Blue",
  "MediumBlue",
  "DarkBlue",
  "Navy",
  "Thistle",
  "Plum",
  "Violet",
  "Orchid",
  "DarkOrchid",
  "Fuchsia",
  "Magenta",
  "MediumOrchid",
  "BlueViolet",
  "DarkViolet",
  "DarkOrchid",
  "MediumPurple",
  "Lavender",
  "Gainsboro",
  "LightGray",
  "Silver",
  "DarkGray",
  "Gray",
  "DimGray",
  "LightSlateGray",
  "DarkSlateGray",
  "Black"
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById("color-personalizado");
var paleta = document.getElementById("paleta");
var pixeles = document.getElementById("grilla-pixeles");
var color = "";
var pixel = document.querySelectorAll(".pixel");
var cursor = document.getElementById("indicador-de-color");
var colores = document.querySelectorAll(".color-paleta");

for (var i = 0; i < nombreColores.length; i++) {
  var divi = document.createElement("div");
  paleta.appendChild(divi);
  divi.classList.add("color-paleta");
  divi.id = nombreColores[i];
  divi.style.backgroundColor = divi.id;
}

for (var i = 0; i <= 1750; i++) {
  var pixel = document.createElement("div");
  pixeles.appendChild(pixel);
  pixel.classList.add("pixel");
}

function mostrarColor(e) {
  color = e.target.id;
  cursor.style.backgroundColor = color;
}

function cambiarColor(e) {
  e.target.style.backgroundColor = color;
}

paleta.addEventListener("click", mostrarColor);
pixeles.addEventListener("click", cambiarColor);

pixeles.addEventListener("mouseup", function() {
  chequearSiTengoQuePintar(false);
});
pixeles.addEventListener("mousedown", function() {
  console.log("mouse down");
  chequearSiTengoQuePintar(true);
});

function chequearSiTengoQuePintar(pintar) {
  if (pintar) {
    pixeles.addEventListener("mousemove", cambiarColor);
  } else {
    pixeles.removeEventListener("mousemove", cambiarColor);
  }
}

colorPersonalizado.addEventListener("change", function() {
  // Se guarda el color de la rueda en colorActual
  colorActual = colorPersonalizado.value;
  cursor.style.backgroundColor = colorActual;
  color = colorActual;

  // Completar para que cambie el indicador-de-color al colorActual
});
