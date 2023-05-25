/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Button from '../../components/Button'
import crearUsuario from '../../assets/svg/createUser.svg'
import FormUser from './FormUser'
import { useGlobalContext } from '../../context/GlobalContext'
function CrearUsuario() {
  const [mostrar, setMostrar] = useState(false)
  const { crudActions } = useGlobalContext()

  return (
    <>
      <Button valor={crearUsuario} fun={() => setMostrar(true)} />
      {mostrar && (
        <FormUser
          tipo={crudActions.post}
          setCerrar={setMostrar}
          value={'CREAR'}
        />
      )}
    </>
  )
}

export default CrearUsuario
