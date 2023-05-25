export const ordenarUsuario = (usuarios) => {
  const arrayDom = Array.from(usuarios.children)

  const arrayNormal = []
  arrayDom.forEach((elemento) => {
    if (!elemento.innerHTML.includes('<select')) {
      arrayNormal.push(elemento.innerHTML)
    }
  })

  return arrayNormal
}
