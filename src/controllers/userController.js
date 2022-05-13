const bcrypt = require('bcryptjs')
const userDB = require('../database/userDB')

const createUser = (email, password, fullname) => new Promise(async (resolve, reject) => {
    if(!email || !password || !fullname) {
        return reject({
            message: 'Datos incompletos'
        })
    }

    const dateTime = new Date()
    const salt = await bcrypt.genSalt(10)

    user = {
        email,
        password: await bcrypt.hash(password, salt),
        fullname,
        created_at: dateTime,
        updated_at: dateTime
    }

    userDB.createUser(user)
        .then(data => resolve({
            id: data.insertId,
            ...user
        }))
        .catch(error => {
            if(error.errno === 1062) {
                reject({
                    message: 'Usuario ya existe'
                })
            }

            reject({
                message: 'Ha ocurrido un error al crear el usuario',
                error
            })
        })
})

module.exports = {
    createUser
}