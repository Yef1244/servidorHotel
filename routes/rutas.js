//Importando una clase de express (Router)
const { Router }=require("express")

//Usar esa clase:
const rutas=Router()

//Listado de Rutas:
rutas.get('/avanzada/v1/jugadores', function (req, res) {
    res.send('Estoy procesando un GET ()')
  })
  
rutas.post('/avanzada/v1/jugadores', function (req, res) {
      res.send('Estoy procesando un POST ()')
})

rutas.put('/avanzada/v1/jugadores', function (req, res) {
      res.send('Estoy procesando un PUT ()')
})
  
rutas.delete('/avanzada/v1/jugadores', function (req, res) {
      res.send('Estoy procesando un DELETE ()')
})

//Exportar las rutas
module.exports=rutas