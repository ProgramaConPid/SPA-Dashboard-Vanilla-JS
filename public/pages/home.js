export default function Home() {

  const div = document.createElement("div")
  div.innerHTML = `
    <h1>
      Bienvenido a la Seccion Home!
    </h1>
    <p>Para visualizar el contenido de la Dashboard ve a la seccion <b>Users</b></p>
  `

  div.classList.add("divMessage")
  return div
}