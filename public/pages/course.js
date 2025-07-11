// Section course view
export default function course() {

  const div = document.createElement("div")
  div.innerHTML = `
    <h1>
      Bienvenido a la Seccion Course!
    </h1>
    <p>Para visualizar el contenido de la Dashboard ve a la seccion <b>Users</b></p>
  `

  div.classList.add("divMessage")
  return div
}