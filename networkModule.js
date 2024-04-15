const os = require('node:os')

//Crea un objeto que contenga cada interfaz como key y como value un array con objetos por cada elemento con familia, dirección e interno
function getNetworkInfo(){

    //Accede a la interfaz
    const net = os.networkInterfaces()

    //Crea el objeto que contendrá las interfaces
    const interfaces = {}

    for(let i in net){
        //Settea el nombre de cada interfaz como key
        const netElement = net[i] //eg   net[ethernet]

        //Crea el array que será el value de la interfaz en la que estamos iterando
        interfaces[i] = []

        //Por cada elemento de la interfaz actual crea un objeto con keys (familia, direccion e interno) y values
        netElement.forEach((element)=>{ //
            const object = {
                Family: element.family,
                Addres: element.address,
                Internal: element.internal
            }
            interfaces[i].push(object)
        })
        
        
    }
    return interfaces
}

module.exports = getNetworkInfo