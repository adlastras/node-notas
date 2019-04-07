const fs = require('fs');

let listadoPorHacer = [];

const guardar = () => {

    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo grabar', err);
    });
}

const cargar = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}

const getListado = () => {

    cargar();

    return listadoPorHacer;
}

const crear = (descripcion) => {

    cargar();

    let nota = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(nota);

    guardar();

    return nota;
}

const actualizar = (descripcion, completado = true) => {

    cargar();

    let posicion = listadoPorHacer.findIndex(notaPorHacer => notaPorHacer.descripcion === descripcion);

    if (posicion >= 0) {
        listadoPorHacer[posicion].completado = completado;
        guardar();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {

    cargar();

    let nuevoListadoPorHacer = listadoPorHacer.filter(notaPorHacer => notaPorHacer.descripcion !== descripcion);

    if (nuevoListadoPorHacer.length === listadoPorHacer.length) {
        return false;
    } else {
        listadoPorHacer = nuevoListadoPorHacer;
        guardar();
        return true;
    }
}

module.exports = { crear, getListado, actualizar, borrar };