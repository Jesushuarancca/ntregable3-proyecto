const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    codigo: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        require: true
    },
    correo: {
        type: String,
        require: true
    },
    edad: {
        type: String,
        require: true
    },
    gradoEstudios: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('User', userSchema);