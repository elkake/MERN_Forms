import React, { useState } from 'react'
import logo from '../assets/svg/bd.svg'

function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <nav className='bg-config-vcolor1 text-config-vcolor4 flex justify-between h-10 items-center w-screen sticky top-0 left-0'>
      <i className='w-7 rounded-full h-7 ml-2 bg-config-vcolor4 p-1'>
        <img src={logo}></img>
      </i>

      <ul className='hidden sm:flex '>
        <li className='w-32 hover:bg-config-vcolor3 font-black hover:text-config-vcolor1 duration-100 cursor-pointer h-10 flex justify-center items-center'>
          Usuarios
        </li>
        <li className='w-32 hover:bg-config-vcolor3 font-black hover:text-config-vcolor1 duration-100 cursor-pointer h-10 flex justify-center items-center'>
          Productos
        </li>
        <li className='w-32 hover:bg-config-vcolor3 font-black hover:text-config-vcolor1 duration-100 cursor-pointer h-10 flex justify-center items-center'>
          Ventas
        </li>
        <li className='w-32 hover:bg-config-vcolor3 font-black hover:text-config-vcolor1 duration-100 cursor-pointer h-10 flex justify-center items-center'>
          Reclamos
        </li>
      </ul>

      <button
        onClick={() => setToggleMenu(!toggleMenu)}
        className='sm:hidden w-10 h-10 p-1 py-2 flex flex-col justify-around'
      >
        <div className='w-8 h-1 bg-config-vcolor4 rounded-sm'></div>
        <div className='w-8 h-1 bg-config-vcolor4 rounded-sm'></div>
        <div className='w-8 h-1 bg-config-vcolor4 rounded-sm'></div>
      </button>

      {toggleMenu && (
        <ul className='flex flex-col absolute z-20 top-10 right-0 bg-config-vcolor1 w-40 transition justify-center  sm:hidden'>
          <li className=' p-1 pl-10'>Usuarios</li>
          <li className='p-1 pl-10'>Productos</li>
          <li className='p-1 pl-10 '>Ventas</li>
          <li className='p-1 pl-10'>Reclamos</li>
        </ul>
      )}
    </nav>
  )
}

export default Nav
