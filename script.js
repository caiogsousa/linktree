function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/assets/lais-light.png")
    // html.classList.remove("light")
  } else {
    img.setAttribute("src", "./assets/assets/lais-dark.png")
    //  html.classList.add("light")
  }
}
