const { Schema, model } =  require('mongoose');

const schemaPublicaciones = new Schema({
    titulo:{
        type:String,
        required: true
    },
    descripcion:{
        type:String,
        required: true
    },
    reacciones:{
        type:Array,
        default: []
    },
    media:{
        type: String,
        default: null
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