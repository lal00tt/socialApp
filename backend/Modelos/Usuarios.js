const { Schema, model } =  require('mongoose');

const schemaUsuarios = new Schema({
    nombre:{
        type:String,
        required: true
    },
    nickname:{
        type:String,
        required: true
    },
    ap:{
        type:String,
        required: true
    },
    am:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    img:{
        type:String,
        default: 'https://as1.ftcdn.net/v2/jpg/03/53/11/00/1000_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg'
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

module.exports = model('Usuarios', schemaUsuarios);