import { httpUser } from '../services/httpUser.js'
import { validarUsuario } from './helperUser.js'

export function enviarUsuario(datosObtenidos, tipo) {
  const { id, ...datos } = datosObtenidos
  console.log(datosObtenidos)
  const res = validarUsuario(datos, tipo)

  if (res.cero !== 0) {
    return res
  }

  if (tipo === 'post') {
    httpUser.postUser(datos).then((data) => {
      console.log(data)
    })
    return res.correcto
  }

  if (tipo === 'put') {
    httpUser.putUser(id, datos).then((data) => {
      console.log(data)
    })
    return res.correcto
  }
}
