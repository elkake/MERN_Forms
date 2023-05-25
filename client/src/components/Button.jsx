import React from 'react'

function Button({ valor, fun, color, width = '14' }) {
  return (
    <button
      className={`flex justify-center items-center border-2 w-${width} h-8 rounded-3xl text-black font-black m-2  ${color}`}
      onClick={fun}
    >
      <img className='w-10/12 h-5/6 invert' src={valor} alt='' />
    </button>
  )
}

export default Button
