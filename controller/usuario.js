import { Usuario } from '../helper/sequelizeBD.js'
import { response, request } from 'express'

// * Obtener TODOS los datos por columna
const obtenerUser = async (req = request, res = response) => {
  /*
  // obtener por columnas

  const datosUsuario = req.query

  const arreglo = []

  for (const prop in datosUsuario) {
    if (datosUsuario[prop] !== '') {
      arreglo.push(datosUsuario[prop])
    }
  }

  // Si el arreglo de campos no nulos no está vacío, filtrar por esos campos; si no, excluir la contraseña
  const usuarios = await Usuario.findAll({
    attributes: arreglo.length > 0 ? arreglo : { exclude: ['password'] }
  })

  res.json({
    msg: 'get API - usuario',
    usuarios,
    registros: usuarios.length
  })
  */

  // obtener todos los datos
  const usuarios = await Usuario.findAll()
  const activos = usuarios.filter((e) => e.estado === 'activo').length

  res.json({
    msg: 'get API - usuario',
    usuarios,
    activos,
    inactivos: usuarios.length - activos
  })
}

// * Obtener un usuario por ID
const obtenerUsuarioId = async (req = request, res = response) => {
  const { id } = req.params
  const usuario = await Usuario.findByPk(id)
  res.json({
    msg: 'get API - usuario',
    usuario
  })
}

// * Obtener un usuario por query
const obtenerUsuarioQuery = async (req = request, res = response) => {
  const data = req.query

  // ? De momento la busqueda es exacta y no importa el caseSensitive
  const usuario = await Usuario.findAll({
    where: data
  })
  res.json({
    msg: 'get API - usuario',
    usuario
  })
}

// * Crear un usuario
const crearUser = async (req = request, res = response) => {
  const usuario = req.body

  // verificar si existe el usuario a tráves del correo
  const copia = await Usuario.findOne({ where: { correo: usuario.correo } })

  if (copia) {
    return res.status(400).json({
      msg: 'El correo ya está registrado'
    })
  }

  const data = await Usuario.create(usuario)
  res.json({
    msg: 'Usuario creado correctamente',
    data
  })
}

// * Editar un usuario por ID
const editarUserbyId = async (req = request, res = response) => {
  const { id } = req.params
  const usuario = req.body
  try {
    const resp = await Usuario.update(usuario, { where: { id } })

    res.json({
      msg: resp[0] ? 'Usuario actualizado' : 'Usuario no actualizado'
    })
  } catch (error) {
    res.json({
      msg: 'No se pudo actualizar el usuario',
      error
    })
  }
}

// * Eliminar un usuario por ID
const eliminarUserbyId = async (req = request, res = response) => {
  const id = req.params
  // const resp = await Usuario.destroy({ where: { id } })
  const resp = await Usuario.update({ estado: 'inactivo' }, { where: id })
  res.send(resp ? 'Usuario eliminado' : 'Usuario no eliminado')
}

// * Objeto que contiene las funciones a exportar
export const objU = {
  obtenerUser,
  crearUser,
  obtenerUsuarioId,
  obtenerUsuarioQuery,
  editarUserbyId,
  eliminarUserbyId
}
