import { useContext, createContext, useState } from 'react'

const MiContexto = createContext()

export const useGlobalContext = () => {
  const data = useContext(MiContexto)
  return data
}

export const GlobalContext = ({ children }) => {
  const [listar, setListar] = useState(false)
  const [usuario, setUsuario] = useState([])

  const isUser = {
    id: '',
    nombre: '',
    apellido: '',
    correo: '',
    edad: '',
    telefono: '',
    provincia: '',
    ciudad: '',
    direccion: '',
    postal: '',
    password: '',
    repassword: ''
  }
  const objUsuario = {
    id: usuario[0],
    nombre: usuario[1],
    apellido: usuario[2],
    correo: usuario[3],
    edad: usuario[4],
    telefono: usuario[5],
    provincia: usuario[6],
    ciudad: usuario[7],
    direccion: usuario[8],
    postal: usuario[9]
  }

  const crudActions = {
    post: 'post',
    put: 'put',
    delete: 'delete'
  }
  return (
    <MiContexto.Provider
      value={{
        listar,
        setListar,
        usuario,
        objUsuario,
        setUsuario,
        crudActions,
        isUser
      }}
    >
      {children}
    </MiContexto.Provider>
  )
}
