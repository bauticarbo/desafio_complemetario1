let numeroTabla = prompt("Ingrese un número para calcular su tabla");
while (numeroTabla == "") {
  alert("Por favor ingrese un numero");
  numeroTabla = prompt("Ingrese un número para calcular su tabla");
}
for (let i = 1; i <= 10; i++) {
  let msgAlert =
    numeroTabla + " multiplicado por " + i + " es igual a " + numeroTabla * i;
  alert(msgAlert);
}
