const os = require('os');

console.log(os.version()); // muestra nuestra version del kernel.

console.log("version del sistema", os.arch()); // se obtiene la arquitectura (x64 o x86(x32))

console.log("arquitectura", os.cpus()); // sirve para ver informacion sobre mi cpu.

console.log(os.freemem()); // nos muestra la memoria libre con la que contamos nos lo muestra en bytes.

console.log(os.homedir()); // me imprime mi directorio raiz.

console.log("direccion ip local", os.hostname()); // me imprime mi direccion ip local.

console.log("version del sistema", os.platform()); // me imprime la version del sistema operativo

console.log("version del sistema detalla", os.version()); // me imprime la version del sistema operativo





