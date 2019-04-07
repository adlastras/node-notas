const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la nota'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completada o pendiente la nota'
};

const argv = require('yargs')
    .command('crear', 'Crear una nota en la aplicación', { descripcion })
    .command('actualizar', 'Actualiza el estado de una nota en la aplicación', { descripcion, completado })
    .command('borrar', 'Borrar una nota en la aplicación', { descripcion })
    .help()
    .argv;

module.exports = { argv };