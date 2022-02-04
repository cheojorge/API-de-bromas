const Broma = require('../Modelos/jokes.model')

module.exports.allJoker = (req,res) => {
    Broma.find()
        .then(jokers => res.json({Broma:jokers}))
        .catch(e => res.json({Mensaje: 'Algo salio mal',error:e}))
}

module.exports.oneJoker = (req,res) => {
    Broma.findOne({ _id: req.params.id })
        .then(joker => res.json({Broma:joker}))
        .catch(e => res.json({Mensaje: 'Algo salio mal',error:e}))
}

module.exports.createJoker = (req, res) => {
    Broma.create(req.body)
        .then(dato => res.json({Broma:dato}))
        .catch(e => res.json({Mensaje: 'Algo salio mal',error:e}))
}

module.exports.updateJoker = (req, res) => {
    Broma.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(dato => res.json({Broma:dato}))
        .catch(e => res.json({Mensaje: 'Algo salio mal',error:e}))
}

module.exports.deleteJoker = (req,res) => {
    Broma.deleteOne({_id: req.params.id})
        .then(dato => res.json({Broma:dato}))
        .catch(e => res.json({Mensaje: 'Algo salio mal',error:e}))
}