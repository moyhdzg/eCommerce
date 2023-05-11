const mongoose = require('mongoose')
const {Schema, model} = mongoose
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},{
    versionKey: false,
    timestamps: true
})

userSchema.pre('save', function(next){
    console.log('----->',this.email)
    console.log('----->',this.password)
    const hashedPassword = bcrypt.hashSync(this.password,12)
    this.password = hashedPassword
    console.log('----->',this.email)
    console.log('----->',this.password)

    next()

})



const userModel = model('usuarios',userSchema)

module.exports = userModel