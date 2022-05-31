const { Schema, model } =  require('mongoose');

const schemaPublicaciones = new Schema({
    idUsuario:{
        type:String,
        required: true
    },
    descripcion:{
        type:String,
        default: ""
    },
    reacciones:{
        type:Array,
        default: []
    },
    comentarios:{
        type:Array,
        default: []
    },
    media:{
        type: Array,
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

module.exports = model('Publicaciones', schemaPublicaciones);