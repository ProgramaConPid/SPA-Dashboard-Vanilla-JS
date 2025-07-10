import { router } from "./router/router.js";
import deleteUser from "./actions/deleteUser.js";
import addUser from "./actions/addUser.js"
import Users from "./pages/users.js";

async function init() {
  let hash = window.location.hash;

  if (!hash || !router[hash]) {
    window.location.hash = "#/";
    return;
  }

  const page = router[hash]; 
  const dashboard = document.getElementById("dashboard");
  dashboard.innerHTML = "";

  const content = await page(); 
  dashboard.appendChild(content);
}

const modal = document.getElementById("modal")
document.addEventListener("click", (e) => {
  if (e.target.matches("#trash__icon")) {
    const btn = e.target;
    const userElement = btn.closest(".divUser");
    const userId = userElement.getAttribute("id");

    if (userId) {
      deleteUser(userId)
        .then(() => {
          userElement.remove();
        });
    }
  }

  if (e.target.matches(".btn__cancel")) {

    if (modal.classList.contains("active")) {
      modal.classList.remove("active")
    }

  }

  if (e.target.matches(".btn__addUser")) {
    modal.classList.add("active");

    if (modal.classList.contains("active")) {
      const form = document.getElementById("form");
      const inputName = document.getElementById("name");
      const inputEmail = document.getElementById("email");
      const inputPhone = document.getElementById("phone");
      const inputDate = document.getElementById("date");

      const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      form.addEventListener("submit", async (e) => {
        e.preventDefault();

        if (!inputName.value.trim()) {
          alert("ERROR, Debes ingresar un nombre valido.")
          return
        }

        if (!inputEmail.value.trim() || regEx.test(inputEmail)) {
          alert("ERROR, Debes ingresar un correo valido.")
          return
        }

        if (!inputPhone.value.trim()) {
          alert("ERROR, Debes ingresar un numero telefonico valido.")
          return
        } 

        if (!inputDate.value.trim()) {
          alert("ERROR, Debes ingresar una fecha valida.")
          return
        }

        await addUser(inputName.value, inputEmail.value, inputPhone.value, inputDate.value);

        const dashboard = document.getElementById("dashboard");
        dashboard.innerHTML = "";
        const usersContent = await Users();
        dashboard.appendChild(usersContent);

        form.reset();
        modal.classList.remove("active"); 
      }) 
    }

  }
});

window.addEventListener("hashchange", init);
window.addEventListener("DOMContentLoaded", init);

window.addEventListener('click', function playAudioOnce(e) {
  const audio = document.querySelector('.audio__daga--adicta');
  if (e.target.matches(".bx-bell")) {
    audio.play();
    window.removeEventListener('click', playAudioOnce);
  }
});
