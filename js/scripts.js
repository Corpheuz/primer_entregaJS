// Precios de cafes por kilo
const plumaHidalgo=300.00;
const atoyac=265.00;
const coatepec=265.00;
const organicoCertificado=315.00;

// Bebidas
const capuchino=50.00;
const expresso=50.00;
const mocaccino=55.00;
const chocolateArtesanal=55.00;

// Pedir nombre
let mujer="mujer"
let hombre="hombre"

let genero = prompt("¿Cuentanos eres hombre o mujer?");
if (genero === "mujer"){
    let nombreVisitante = prompt("¿Cuál es tu nombre?");
    let saludoMujer = "Hola " +nombreVisitante + " Bienvenida a Café Mictlán";
    alertc(saludoMujer);

} else {
     let nombreVisitante1 = prompt("¿Cuál es tu nombre?");
     let saludoHombre = "Hola " +nombreVisitante1 + " Bienvenido a Café Mictlán";
    alert(saludoHombre);


} 




    


