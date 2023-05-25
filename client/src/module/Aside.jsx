import React, { useState } from 'react'
import Button from '../components/Button'
import filter from '../assets/svg/filter.svg'
function Aside() {
  const [filtros, setFiltros] = useState(false)
  return (
    <>
      <div className='sm:hidden'>
        <Button valor={filter} fun={() => setFiltros(true)} />
      </div>

      <aside
        className={`absolute w-screen h-screen bg-black opacity-25 text-white top-0 left-0 sm:relative sm:inline-block sm:w-80 sm:min-w-fit sm:h-full ${
          filtros ? 'block' : 'hidden'
        }`}
      >
        <button
          onClick={() => setFiltros(false)}
          className='rounded-full border-2 w-7 h-7 bg-red-500
  sm:hidden'
        >
          X
        </button>
        <span>Hola soy un aside</span>
      </aside>
    </>
  )
}

export default Aside
