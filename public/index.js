import { router } from "./router/router.js";
import deleteUser from "./actions/deleteUser.js";

async function init() {
  let hash = window.location.hash;

  if (!hash || !router[hash]) {
    window.location.hash = "#/";
    return;
  }

  const page = router[hash]; // puede ser async
  const dashboard = document.getElementById("dashboard");
  dashboard.innerHTML = "";

  const content = await page(); // esperar si es una función async
  dashboard.appendChild(content);
}

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
});


window.addEventListener("hashchange", init);
window.addEventListener("DOMContentLoaded", init);
