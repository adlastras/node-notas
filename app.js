//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;

const tareas = require('./tareas/tareas');

const colors = require('colors');

//console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        //console.log("Crear nota");
        let tarea = tareas.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'actualizar':
        //console.log("Actualiza la nota");
        let actualizado = tareas.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'listar':
        //console.log("Mostrar las notas");
        let notasGuardadas = tareas.getListado();
        for (let notaPendiente of notasGuardadas) {
            console.log('--------NOTA-------'.green);
            console.log(notaPendiente.descripcion);
            console.log('Estado: ', notaPendiente.completado);
            console.log('-------------------'.green);
        }
        break;
    case 'borrar':
        //console.log("Borrar nota");
        let borrado = tareas.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log(`${ comando } - No es un comando válido`);
}