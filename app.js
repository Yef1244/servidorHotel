//Configurando variables de entorno
require('dotenv').config()

//Importo el servidor modelo
const ServidorModelo=require("./models/ServidorModelo.js")

//Crear un objeto de la clase servidormodelo
const servidorFPC=new ServidorModelo()

//Despertar el servidor
servidorFPC.despertarServidor()
 
