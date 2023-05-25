import React, { useState, useRef, useEffect } from 'react'
import Options from '../../components/Options'
import { useGlobalContext } from '../../context/GlobalContext'
import { enviarUsuario } from '../../helper/enviarUsuario'
import { httpUser } from '../../services/httpUser'
import { obtenerCiudades } from '../../helper/helperUser'

function FormUser({ tipo, setCerrar, value }) {
  const { isUser, objUsuario, crudActions } = useGlobalContext()
  const [datosObtenidos, setDatosObtenidos] = useState(isUser)
  const [idProvincia, setIDProvincia] = useState('')
  const [ciudades, setCiudades] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const provinciaRef = useRef()

  // obteniendo las ciudades
  useEffect(() => {
    if (tipo === crudActions.put) {
      setIDProvincia(provinciaRef.current.selectedOptions[0].id)
      setDatosObtenidos(objUsuario)
    }
  }, [])

  // obteniedo las ciudades
  useEffect(() => {
    obtenerCiudades(idProvincia).then((res) => {
      setCiudades(res)
      setDatosObtenidos({ ...datosObtenidos, ciudad: res[0]?.nombre || '' })
    })
  }, [idProvincia])

  const obtainData = (e) => {
    if (e.target.name === 'provincia') {
      const id = e.target.selectedOptions[0].id
      if (id !== '' || id !== 0) setIDProvincia(id)
    }
    setDatosObtenidos({ ...datosObtenidos, [e.target.name]: e.target.value })
  }
  // todo submit form-----------------------------------
  const submitData = (e) => {
    e.preventDefault()

    const data = enviarUsuario(datosObtenidos, tipo)
    setErrorMessage(data)
  }

  // TODO -----------------------------------------------------

  return (
    <div className='w-screen bg-gray-900 bg-opacity-60 flex justify-center items-center absolute z-30 top-0 left-0 h-screen sm:h-screen'>
      <div className='bg-config-vcolor1 max-w-md w-80 rounded-lg shadow-2xl relative'>
        <button
          className='absolute top-1 left-1 rounded-full bg-white w-6 h-6 text-config-vcolor1 font-black'
          onClick={() => setCerrar(false)}
        >
          X
        </button>
        <h1 className='font-bold text-xl flex justify-center items-center h-12 text-white'>
          USUARIO
        </h1>
        <section className='' id='get_usuarios'>
          <form
            onSubmit={(e) => submitData(e)}
            className='flex flex-col w-11/12 m-auto'
            action=''
          >
            {tipo === crudActions.put && (
              <input
                onChange={obtainData}
                name='id'
                className='w-full mt-1 rounded-sm py-1 px-2 bg-vcolor2 shadow-inner  '
                type='text'
                value={objUsuario.id}
                disabled
                placeholder='ID'
                readOnly
              />
            )}
            <input
              onChange={obtainData}
              name='nombre'
              className='w-full mt-1 rounded-sm py-1 px-2 bg-vcolor2 shadow-inner  '
              type='text'
              placeholder='Nombre'
              defaultValue={tipo === crudActions.put ? objUsuario.nombre : ''}
            />

            <input
              onChange={obtainData}
              name='apellido'
              className='w-full mt-1 rounded-sm p-1 px-2 bg-vcolor2 shadow-inner  '
              type='text'
              placeholder='Apellido'
              defaultValue={tipo === crudActions.put ? objUsuario.apellido : ''}
            />

            <input
              onChange={obtainData}
              name='correo'
              className='w-full mt-1 rounded-sm p-1 px-2 bg-vcolor2 shadow-inner  '
              type='email'
              placeholder='Correo'
              defaultValue={tipo === crudActions.put ? objUsuario.correo : ''}
            />

            <input
              onChange={obtainData}
              name='edad'
              className='w-full mt-1 rounded-sm p-1 px-2 bg-vcolor2 shadow-inner  '
              type='number'
              placeholder='Edad'
              min={18}
              max={120}
              defaultValue={tipo === crudActions.put ? objUsuario.edad : ''}
            />

            <input
              onChange={obtainData}
              name='telefono'
              className='w-full mt-1 rounded-sm p-1 px-2 bg-vcolor2 shadow-inner  '
              type='text'
              placeholder='+541234567890'
              defaultValue={tipo === crudActions.put ? objUsuario.telefono : ''}
            />

            <select
              onChange={obtainData}
              ref={provinciaRef}
              className='w-full mt-1 rounded-sm p-1 px-2  shadow-inner  '
              name='provincia'
              defaultValue={
                tipo === crudActions.put ? objUsuario.provincia : 'Provincia'
              }
            >
              <option value={'Provincia'} disabled>
                Provincia
              </option>
              {JSON.parse(sessionStorage.getItem('provincias')).map((prov) => {
                if (
                  prov.nombre ===
                  'Tierra del Fuego, Antártida e Islas del Atlántico Sur'
                ) {
                  prov.nombre = 'Tierra del Fuego'
                }

                if (prov.nombre === 'Ciudad Autónoma de Buenos Aires') {
                  prov.nombre = 'Buenos Aires GBA'
                }

                return (
                  <Options
                    key={prov.id}
                    id={prov.id}
                    value={prov.nombre}
                    children={prov.nombre}
                  />
                )
              })}
            </select>

            <select
              onChange={obtainData}
              className='w-full mt-1 rounded-sm p-1 px-2 bg-vcolor2 shadow-inner  '
              type='text'
              placeholder='Provincia'
              name='ciudad'
              defaultValue={
                tipo === crudActions.put ? objUsuario.ciudad : 'Ciudad'
              }
            >
              {ciudades.map((ciud) => (
                <Options
                  key={ciud.id}
                  id={ciud.id}
                  value={ciud.nombre}
                  children={ciud.nombre}
                />
              ))}
            </select>

            <input
              onChange={obtainData}
              name='direccion'
              className='w-full mt-1 rounded-sm p-1 px-2 bg-vcolor2 shadow-inner '
              type='text'
              placeholder='Direccion'
              defaultValue={
                tipo === crudActions.put ? objUsuario.direccion : ''
              }
            />

            <input
              onChange={obtainData}
              name='postal'
              className='w-full mt-1 rounded-sm p-1 px-2 bg-vcolor2 shadow-inner '
              type='text'
              placeholder='Codigo Postal'
              defaultValue={tipo === crudActions.put ? objUsuario.postal : ''}
            />

            <input
              onChange={obtainData}
              name='password'
              className='w-full mt-1 rounded-sm p-1 px-2 bg-vcolor2 shadow-inner  '
              type='password'
              placeholder='Password'
            />

            <input
              onChange={obtainData}
              name='repassword'
              className='w-full mt-1 rounded-sm p-1 px-2 bg-vcolor2 shadow-inner  '
              type='password'
              placeholder='Confirmar Password'
            />
            <span className='text-red-500 text-xs mt-1 text-center'>
              {errorMessage}
            </span>

            <input
              onChange={obtainData}
              name='n'
              className='flex justify-center items-center border-2 w-full h-8 rounded-xl text-black font-black my-2 bg-config-vcolor1 hover:bg-config-vcolor4 transition-all duration-100'
              type='submit'
              value={value}
            />
          </form>
        </section>
      </div>
    </div>
  )
}

export default FormUser
