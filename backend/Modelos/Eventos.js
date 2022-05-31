const { Schema, model } =  require('mongoose');

const schemaEventos = new Schema({
    titulo:{
        type:String,
        required: true
    },
    descripcion:{
        type:String,
        required: true
    },
    portada:{
        type:String,
        required: true
    },
    particitantes:{
        type: Array,
        default: []
    },
    fecha_inicio:{
        type: Date,
        required: true
    },
    fecha_fin:{
        type: Date,
        required: true
    },
    created_at:{
        type: Date,
        default: Date.now
    },
    updated_at:{
        type: Date,
        default: null
    }
})

module.exports = model('Eventos', schemaEventos);