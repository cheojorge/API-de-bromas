const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup:{
        type: String,
        required: [true, 'Broma es requerida'],
        minlength: [10, 'Minimo de caracteres 10']
    },
    punchline: {
        type: String,
        required: [true, 'Resolucion es requerida'],
        minlength: [3, 'Minimo de caracteres 3']
    }
},{timestamps:true});

const Broma = mongoose.model('Broma', JokeSchema);
module.exports = Broma