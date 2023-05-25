function TrUser({ obj }) {
  return (
    <tr className='hover:bg-white hover:text-config-vcolor1 text-white cursor-pointer'>
      <td className='border-x-2 px-1 h-7 border-config-vcolor1'>{obj.id}</td>
      <td className='border-x-2 px-1 h-7 border-config-vcolor1'>
        {obj.nombre}
      </td>
      <td className='border-x-2 px-1 h-7 border-config-vcolor1'>
        {obj.apellido}
      </td>
      <td className='hidden sm:table-cell border-x-2 px-1 h-7 border-config-vcolor1'>
        {obj.correo}
      </td>
      <td className='hidden sm:table-cell border-x-2 px-1 h-7 border-config-vcolor1'>
        {obj.edad}
      </td>
      <td className='hidden sm:table-cell border-x-2 px-1 h-7 border-config-vcolor1'>
        {obj.telefono}
      </td>
      <td className='sm:hidden border-x-2 px-1 h-7 border-config-vcolor1'>
        <select className='focus:border-orange-300 border-2 rounded-sm w-10 text-config-vcolor1'>
          <option value={'Correo: '}>Correo: {obj.correo}</option>
          <option value={'La Plata'}>Edad: {obj.edad}</option>
          <option value={'asdsadasd'}>Telefono: {obj.telefono}</option>
        </select>
      </td>
      <td className='hidden sm:table-cell'>{obj.provincia}</td>
      <td className='hidden sm:table-cell border-x-2 border-config-vcolor1'>
        {obj.ciudad}
      </td>
      <td className='hidden sm:table-cell'>{obj.direccion}</td>
      <td className='sm:hidden border-x-2 px-1 h-7 border-config-vcolor1'>
        <select className='focus:border-orange-300 border-2 rounded-sm w-10 text-config-vcolor1'>
          <option value={'Buenos Aires'}>Provincia: {obj.provincia}</option>
          <option value={'La Plata'}>Ciudad: {obj.ciudad}</option>
          <option value={'asdsadasd'}>Direccion: {obj.direccion}</option>
          <option value={'B1900'}>Cod. Postal: {obj.postal}</option>
        </select>
      </td>
      <td className='hidden sm:table-cell border-x-2 px-1 h-7 border-config-vcolor1'>
        {obj.postal}
      </td>
    </tr>
  )
}

export default TrUser
