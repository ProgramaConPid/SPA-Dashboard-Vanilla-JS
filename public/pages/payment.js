// Section payment view
export default function Payment() {

  const div = document.createElement("div")
  div.innerHTML = `
    <h1>
      Bienvenido a la Seccion Payment!
    </h1>
    <p>Para visualizar el contenido de la Dashboard ve a la seccion <b>Users</b></p>
  `

  div.classList.add("divMessage")
  return div
}