const express = require('express')
const app = express();


require('./Servidor/Configuracion/mongoose.config')

app.use(express.json(),express.urlencoded({extended:true}))

const allMyJokeRoutes = require('./Servidor/Rutas/jokes.routes');

allMyJokeRoutes(app);

app.listen(8000, () => {console.log('el servidor esta levantado en el puerto 8000')})



