const getOsInfo = require('./osModule.js');
const getNetworkInfo = require('./networkModule.js');

console.log(getOsInfo(), getNetworkInfo())

console.log("---- OS Info ----")
//Saca por consola cada clave: valor del objeto
for (const [key, value] of Object.entries(getOsInfo())) {
    console.log(`${key}: ${value}`);
}

console.log("")
console.log("---- Network Info ----")
for (const [key, value] of Object.entries(getNetworkInfo())) {
    //Saca por consola la interfaz actual
    console.log("Interfaz:", key)
    //De cada elemento del array de la interfaz actual, saca por consola su familia, direccion e interno
    value.forEach(element => {
        console.log("Family:", element.Family)
        console.log("Addres:", element.Addres)
        console.log("Internal:", element.Internal)
    })
    console.log("")
}