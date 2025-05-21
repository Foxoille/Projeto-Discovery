function toggleMode() {
  // -- Recupera o html --
  const html = document.documentElement
  // -- Adiciona ou remove a class light -> change mode.
  html.classList.toggle("light")

  // -- Recupera a <img>
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Imagem do Mike sorrindo com oculos escuros, e uma jaqueta de couro preta sobre fundo degradé de roxo para azul."
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Imagem do mike sorrindo num fundo laranja, com oculos e camiseta preta."
    )
  }
}
