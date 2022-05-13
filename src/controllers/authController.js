require('dotenv').config()
const userDB = require('../database/userDB')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const login = (email, password) => new Promise((resolve, reject) => {
    if(!email || !password) {
        reject({
            message: 'Datos incompletos'
        })
    }

    userDB.login(email)
        .then(async data => {
            if(!data) {
                return reject({
                    message: 'Usuario y/o contraseña incorrecta'
                })
            }

            try {
                const authorized = await bcrypt.compare(password, data.password)

                if(authorized) {
                    const token = jwt.sign({id: data.id}, process.env.JWT_SECRET, { expiresIn: '1d' })

                    return resolve({
                        email: data.email,
                        fullname: data.fullname,
                        token
                    })
                } else {
                    return reject({
                        message: 'Usuario y/o contraseña incorrecta'
                    })  
                }
            } catch (error) {
                reject({
                    message: 'Ha ocurrido un error al iniciar sesión',
                    error
                })
            }
        })
        .catch(error => console.log(error))
})

module.exports = {
    login
}