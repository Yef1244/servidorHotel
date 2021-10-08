const express = require('express')

//IMPORTAR LA FUNCION PARA CONECTARME CON LA BD
const { conectarBD }=require(`../database/conexion.js`)

//IMPORTAR LAS RUTAS DEL SERVIDOR
const rutas =require('../routes/rutas.js')

class ServidorModelo {

    constructor() {

        this.app = express()
        //this.despetarBD()
        this.enrutarPeticiones()

    }

    despertarServidor() {

        this.app.listen(process.env.PUERTO,function(){
            console.log(`Servidor encendido ${process.env.PUERTO}`)
        })

    }

    enrutarPeticiones() {

        this.app.use('/',rutas)

    }

    despetarBD() {

        conectarBD()

    }

}

module.exports=ServidorModelo