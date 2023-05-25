import { postFetch } from './hooks/postFetch.js'
import { getFetch } from './hooks/getFetch.js'
import { putFetch } from './hooks/putFetch.js'
import { deleteFetch } from './hooks/deleteFetch.js'

const getUser = async (id) => {
  try {
    const response = await getFetch('http://localhost:3000/usuario')
    return response
  } catch (e) {
    console.log(
      'No se pudo obtener la lista de usuarios \n verifique que la bd este activa'
    )
  }
}

const postUser = async (postData) => {
  try {
    const data = await postFetch('http://localhost:3000/usuario', postData)
    return data
  } catch (e) {
    alert('No se pudo crear el usuario')
  }
}

const putUser = async (id, putData) => {
  try {
    const data = await putFetch(
      `http://localhost:3000/usuario/datos/${id}`,
      putData
    )
    return data
  } catch (e) {
    alert('No se pudo editar el usuarios')
  }
}

const deleteUser = async (id) => {
  try {
    const data = await deleteFetch(`http://localhost:3000/usuario/datos/${id}`)
    return data
  } catch (e) {
    alert('No se pudo eliminar el usuario')
  }
}

export const httpUser = {
  getUser,
  postUser,
  putUser,
  deleteUser
}
