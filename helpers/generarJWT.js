import jwt from 'jsonwebtoken';

const generarJWT = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: "30d"//en cuanto tiempo va a expirar
    })
    //sign() => genera el json webtoken
    //firma el paylod
    //parametros = objeto, llave privada, objeto con opciones
}

export default generarJWT;