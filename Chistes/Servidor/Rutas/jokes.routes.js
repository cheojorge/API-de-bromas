const jokesController = require('../Controladores/jokes.controller')

module.exports = app => {
    app.get('/api/joker/', jokesController.allJoker)
    app.get('/api/joker/:id', jokesController.oneJoker)
    app.put('/api/joker/:id', jokesController.updateJoker)
    app.post('/api/joker/', jokesController.createJoker)
    app.delete('/api/joker/:id', jokesController.deleteJoker)
}
