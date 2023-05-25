import { useState, useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import Button from '../../components/Button.jsx'
import trash from '../../assets/svg/trash.svg'
import { useGlobalContext } from '../../context/GlobalContext'
import { httpUser } from '../../services/httpUser'
import check from '../../assets/svg/true.svg'
import back from '../../assets/svg/false.svg'

function EliminarUsuario() {
  const [cerrar, setCerrar] = useState(false)
  const { usuario, setListar } = useGlobalContext()

  const deleteUser = async () => {
    const data = await httpUser.deleteUser(usuario[0])
    if (data === 200) {
      alert('Usuario eliminado correctamente')
      setCerrar(false)
      setListar(true)
    }
  }

  return (
    <>
      <Button valor={trash} fun={() => setCerrar(true)} />
      {cerrar && (
        <div className='w-screen bg-gray-900 bg-opacity-60 flex justify-center items-center absolute z-30 top-0 left-0 h-screen sm:h-screen'>
          <div className='bg-config-vcolor1 max-w-md w-80 rounded-lg shadow-2xl relative'>
            <h1>ESTA SEGURO DE ELIMINAR AL USUARIO {usuario[0]}</h1>
            <div>
              <Button
                fun={deleteUser}
                valor={check}
                color='bg-green-500 hover:bg-green-600'
              />
              <Button
                fun={() => setCerrar(false)}
                valor={back}
                color='bg-red-300 hover:bg-red-400'
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default EliminarUsuario
