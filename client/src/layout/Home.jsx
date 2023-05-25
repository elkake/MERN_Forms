import React, { useEffect, useState } from 'react'
import Usuario from './Usuario'
import { GlobalContext } from '../context/GlobalContext'
import { getProvincias } from '../services/getZone.js'
import Nav from './Nav'

function Home() {
  const [toggleMenu, setToggleMenu] = useState(false)

  useEffect(() => {
    // ? obteniendo datos de zona y enviandolos a la session storage
    if (
      !sessionStorage.getItem('provincias') ||
      sessionStorage.getItem('provincias') === 'undefined'
    ) {
      getProvincias().then((res) => {
        sessionStorage.setItem('provincias', res)
      })
    }
  }, [])

  return (
    <div className='h-screen flex flex-col'>
      <Nav />

      <GlobalContext>
        <div className='text-black w-full grow h-5/6'>
          <Usuario toggleMenu={setToggleMenu} />
        </div>
      </GlobalContext>
    </div>
  )
}

export default Home
