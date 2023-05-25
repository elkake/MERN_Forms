import { useEffect, useState } from 'react'
import { useGlobalContext } from '../../context/GlobalContext'
import { httpUser } from '../../services/httpUser.js'
import { ordenarUsuario } from '../../helper/ordenar.js'
import TrUser from '../../components/TrUser'

function ListarUsuarios() {
  const [usuarios, setUsuarios] = useState([])
  const { listar, setListar, setUsuario } = useGlobalContext()

  useEffect(() => {
    if (listar) {
      httpUser.getUser().then((res) => {
        setUsuarios(res.usuarios)
      })
      setListar(false)
    }
  }, [listar])

  // obteniendo datos de la fila
  const enviarDatosPut = (e) => {
    const element = e.target.closest('tr')
    const id = parseInt(element.firstChild.textContent)

    if (!isNaN(id)) {
      setUsuario(ordenarUsuario(element))
    }
  }

  return (
    <section
      className='h-5/6 w-full px-4 overflow-y-scroll'
      onClick={enviarDatosPut}
    >
      <table className='text-xs  sm:text-base  w-full'>
        <thead>
          <tr className='bg-white'>
            <th className='border-2 border-config-vcolor1  '>id</th>
            <th className='border-r-2 border-y-2 border-config-vcolor1 px-1 '>
              Nombre
            </th>
            <th className='border-r-2 border-y-2 border-config-vcolor1 px-1 '>
              Apellido
            </th>
            <th className='border-r-2 border-y-2 border-config-vcolor1 px-1 sm:hidden'>
              Datos
            </th>
            <th className='border-r-2 border-y-2 border-config-vcolor1 px-1 hidden sm:table-cell'>
              Correo
            </th>
            <th className='border-r-2 border-y-2 border-config-vcolor1 px-1 hidden sm:table-cell'>
              Edad
            </th>
            <th className='border-r-2 border-y-2 border-config-vcolor1 px-1 hidden sm:table-cell'>
              Tel.
            </th>
            <th className='border-r-2 border-y-2 border-config-vcolor1 px-1 hidden sm:table-cell'>
              Provincia
            </th>
            <th className='border-r-2 border-y-2 border-config-vcolor1 px-1 hidden sm:table-cell'>
              Ciudad
            </th>
            <th className='border-r-2 border-y-2 border-config-vcolor1 px-1 hidden sm:table-cell'>
              Direccion
            </th>
            <th className='border-y-2 border-config-vcolor1 px-1 hidden sm:table-cell'>
              Postal
            </th>
            <th className='border-y-2 border-config-vcolor1 px-1 sm:hidden'>
              Zona
            </th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((obj) => {
            if (obj.estado !== 'activo') {
              return null
            }
            return <TrUser key={obj.correo} obj={obj} />
          })}
        </tbody>
      </table>
    </section>
  )
}

export default ListarUsuarios
