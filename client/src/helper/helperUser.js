import { getMunicipios } from '../services/getZone.js'
import validator from 'validator'

const errores = {
  vacio: 'Todos los campos son obligatorios',
  email: 'El correo no es valido',
  edad: 'La edad no es valida',
  telefono: 'El telefono no es valido',
  contrasena: 'Las contraseñas no coinciden',
  contrasenaCorta: 'La contraseña debe tener al menos 4 caracteres',
  correcto: 'Cambios realizados correctamente',
  cero: 0
}

export function validarUsuario(datosObtenidos, tipo) {
  if (tipo === 'post') {
    for (const key in datosObtenidos) {
      if (datosObtenidos[key] === '') {
        return errores.vacio
      }
    }
  }

  if (!validator.isEmail(datosObtenidos.correo)) {
    return errores.email
  }

  if (!validator.isInt(datosObtenidos.edad, { min: 18, max: 120 })) {
    return errores.edad
  }

  const telefono = datosObtenidos.telefono.replace(/\s/g, '')
  const regex = /\+\d+/
  if (regex.test(telefono)) {
    return errores.telefono
  }

  if (datosObtenidos.password.length < 4) {
    return errores.contrasenaCorta
  }

  if (datosObtenidos.password !== datosObtenidos.repassword) {
    return errores.contrasena
  }

  return { cero: errores.cero, correcto: errores.correcto }
}

export const obtenerCiudades = async (idProvincia) => {
  if (idProvincia !== '') {
    console.log(idProvincia)
    const res = await getMunicipios(idProvincia)
    if (idProvincia === '02') {
      return [{ id: '020144', nombre: 'Buenos Aires GBA' }]
    }
    return res
  }
  return []
}
