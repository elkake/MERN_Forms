import ListarUsuarios from '../module/Usuario/ListarUsuarios'

import Aside from '../module/Aside'
import CrearUsuario from '../module/Usuario/CrearUsuario'
import ActualizarUsuario from '../module/Usuario/ActualizarUsuario'
import EliminarUsuario from '../module/Usuario/EliminarUsuario'
import refresh from '../assets/svg/refresh.svg'
import Button from '../components/Button'
import { useGlobalContext } from '../context/GlobalContext'
function Usuario({ toggleMenu }) {
  const { setListar } = useGlobalContext()
  return (
    <div
      className='text-center w-full h-full max-h-full bg-config-vcolor1'
      onClick={() => toggleMenu(false)}
    >
      <div className='w-full h-full flex justify-center '>
        <Aside />
        <div className='w-10/12 h-full'>
          <div className='flex'>
            <Button
              valor={refresh}
              color='bg-config-vcolor1'
              fun={() => setListar(true)}
            />
            <CrearUsuario />
            <ActualizarUsuario />
            <EliminarUsuario />
          </div>
          <ListarUsuarios />
        </div>
      </div>
    </div>
  )
}

export default Usuario
