import React, { useState } from 'react'
import Button from '../../components/Button'
import edit from '../../assets/svg/edit.svg'
import FormUser from './FormUser'
import { useGlobalContext } from '../../context/GlobalContext'
function ActualizarUsuario() {
  const [mostrar, setMostrar] = useState(false)
  const { crudActions } = useGlobalContext()
  const mostrarModal = () => {
    setMostrar(true)
  }

  return (
    <>
      <Button valor={edit} fun={mostrarModal} />
      {mostrar && (
        <FormUser
          tipo={crudActions.put}
          setCerrar={setMostrar}
          value={'EDITAR'}
        />
      )}
    </>
  )
}

export default ActualizarUsuario
