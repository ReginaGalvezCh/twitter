
//crear boton e items
var milista = document.getElementsByTagName("LI");
var i;
for (i = 0; i < milista.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\uD83D\uDDD1");
  span.className = "cerrar";
  span.appendChild(txt);
  milista[i].appendChild(span);
}

// Click en el btn para cerrar lista
var cerrar = document.getElementsByClassName("cerrar");
var i;
for (i = 0; i < cerrar.length; i++) {
    cerrar[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
}
}

// agregar visto cuando se selecciona un elemto
var lista = document.querySelector('ul');
lista.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
}
}, false);

// crear lista nueva cuando le doy al boton 

function nuevaTarea() {
  var li = document.createElement("li");
  var ingresoValor = document.getElementById("miInput").value;
  var t = document.createTextNode(ingresoValor);
  li.appendChild(t);
  if (ingresoValor === '') {
    alert("Hola escribe algo!");
} else {
    document.getElementById("myUL").appendChild(li);
}
document.getElementById("miInput").value = "";

var span = document.createElement("SPAN");
var txt = document.createTextNode("\uD83D\uDDD1");
span.className = "cerrar";
span.appendChild(txt);
li.appendChild(span);

for (i = 0; i < cerrar.length; i++) {
    cerrar[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
  }
}
}