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
var grillaPixeles = document.getElementById("grilla-pixeles");
var color = "";
var pixel = document.querySelectorAll(".pixel");
var cursor = document.getElementById("indicador-de-color");
var colores = document.querySelectorAll(".color-paleta");
var pixeles = [];
var botonBatman = document.getElementById("batman");
var botonWonder = document.getElementById("wonder");
var botonFlash = document.getElementById("flash");
var botonInvisible = document.getElementById("invisible");
var guardar = document.getElementById("guardar");

for (var i = 0; i < nombreColores.length; i++) {
  var divi = document.createElement("div");
  paleta.appendChild(divi);
  divi.classList.add("color-paleta");
  divi.id = nombreColores[i];
  divi.style.backgroundColor = divi.id;
}

for (var i = 0; i <= 1750; i++) {
  var pixel = document.createElement("div");
  grillaPixeles.appendChild(pixel);
  pixel.classList.add("pixel");
  pixeles.push(pixel);
}

function mostrarColor(e) {
  color = e.target.id;
  cursor.style.backgroundColor = color;
}

function cambiarColor(e) {
  e.target.style.backgroundColor = color;
}

paleta.addEventListener("click", mostrarColor);
grillaPixeles.addEventListener("click", cambiarColor);

grillaPixeles.addEventListener("mouseup", function() {
  chequearSiTengoQuePintar(false);
});
grillaPixeles.addEventListener("mousedown", function() {
  chequearSiTengoQuePintar(true);
});

function chequearSiTengoQuePintar(pintar) {
  if (pintar) {
    grillaPixeles.addEventListener("mousemove", cambiarColor);
  } else {
    grillaPixeles.removeEventListener("mousemove", cambiarColor);
  }
}



var borrar = document.getElementById("borrar");
borrar.addEventListener("click", function(){
  
    $( ".pixel" ).each(function() {
      $("#grilla-pixeles").css("background-color", "white");
      
      $( this ).animate({opacity:"0.5"});
      
      $(this).css("background-color", "white");
      $(this).animate({opacity:"1"},200)
    });
     
  
  }

  );

  botonBatman.addEventListener('click', function(){
    cargarSuperheroe(batman);
  } );
  botonWonder.addEventListener('click', function(){
    cargarSuperheroe(wonder);
  } );
  botonFlash.addEventListener('click', function(){
    cargarSuperheroe(flash);
  } );
  botonInvisible.addEventListener("click", function(){
    cargarSuperheroe(invisible);
  })

guardar.addEventListener("click", guardarPixelArt);


  colorPersonalizado.addEventListener("change", function() {
  // Se guarda el color de la rueda en colorActual
  colorActual = colorPersonalizado.value;
  cursor.style.backgroundColor = colorActual;
  color = colorActual;

  // Completar para que cambie el indicador-de-color al colorActual
});

