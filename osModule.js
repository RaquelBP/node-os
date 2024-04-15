const os = require('node:os')

function getOsInfo() {
    const osInfo={
        Name: os.platform(),
        Type: os.type(),
        Version: os.version(),
        Architecture: os.arch(),
        CPUs: os.cpus().length,
        TotalMemory: Math.round((os.totalmem()/1048576)*100)/100 + " MB",
        FreeMemory: Math.round((os.freemem()/1048576)*100)/100 + " MB"
    }
    return osInfo
}

module.exports = getOsInfo