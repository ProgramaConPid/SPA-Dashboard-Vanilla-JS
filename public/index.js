// Helpful functions and router
import { router } from "./router/router.js";
import Users from "./pages/users.js";
import deleteUser from "./actions/deleteUser.js";
import addUser from "./actions/addUser.js";
import modifyUser from "./actions/modifyUser.js";

// Start the page and show the respective content
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

// Error Messages for inputs - forms
const errorMessages = {
  name: "ERROR, Debes ingresar un nombre valido.",
  email: "ERROR, Debes ingresar un correo electronico valido.",
  phone: "ERROR, Debes ingresar un numero telefonico valido valido.",
  date: "ERROR, Debes ingresar una fecha valida.",
  enrollNumber: "Debes ingresar un numero de inscripcion valido.",
};

document.addEventListener("click", (e) => {
  const modal = document.getElementById("modal");
  const modalModifyUser = document.getElementById("modal__modify");

  // Delete user if user click trash icon
  if (e.target.matches("#trash__icon")) {
    const btn = e.target;
    const userElement = btn.closest(".divUser");
    const userId = userElement.getAttribute("id");

    if (userId) {
      deleteUser(userId).then(() => {
        userElement.remove();
      });
    }
  }

  // Hide modal if user click cancel button
  if (e.target.matches(".btn__cancel")) {
    if (
      modal.classList.contains("active") ||
      modalModifyUser.classList.contains("active")
    ) {
      modal.classList.remove("active");
      modalModifyUser.classList.remove("active");
    }
  }

  // Open modal to modify user if user click pencil icon
  if (e.target.matches("#pencil__icon")) {
    modalModifyUser.classList.add("active");

    const btn = e.target;
    const userElement = btn.closest(".divUser");
    const userId = userElement.getAttribute("id");

    // Elements from the form (modal modify user)
    const formModifyUser = document.getElementById("form__modify--user");
    const inputName = document.getElementById("newName");
    const inputEmail = document.getElementById("newEmail");
    const inputPhone = document.getElementById("newPhone");
    const inputEnrollNumber = document.getElementById("newEnrollNumber");
    const inputDate = document.getElementById("newDate");

    fetch(`http://localhost:3000/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        inputName.value = `${data.name}`;
        inputEmail.value = `${data.email}`;
        inputPhone.value = `${data.phone}`;
        inputEnrollNumber.value = `${data.enrollNumber}`;
        inputDate.value = `${data.dateOfAdmission}`;
      });

    if (modalModifyUser.classList.contains("active")) {
      formModifyUser.addEventListener("submit", async (e) => {
        e.preventDefault();

        const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        // Validate each input value

        if (!inputName.value.trim()) {
          alert(errorMessages.name);
          return;
        }

        if (!inputEmail.value.trim() || regEx.test(inputEmail)) {
          alert(errorMessages.email);
          return;
        }

        if (!inputPhone.value.trim()) {
          alert(errorMessages.phone);
          return;
        }

        if (!inputDate.value.trim()) {
          alert(errorMessages.date);
          return;
        }

        if (!inputEnrollNumber.value.trim()) {
          alert(errorMessages.enrollNumber);
          return;
        }

        // Call modifyUser function and wait until resolve
        await modifyUser(
          userId,
          inputName.value,
          inputEmail.value,
          inputPhone.value,
          inputEnrollNumber.value,
          inputDate.value
        );

        // Upload the new content of users
        const dashboard = document.getElementById("dashboard");
        dashboard.innerHTML = "";
        const usersContent = await Users();
        dashboard.appendChild(usersContent);

        formModifyUser.reset();
        modalModifyUser.classList.remove("active");
      });
    }
  }

  // Open modal to add user if user click the button add new student
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

        // Validate each input value

        if (!inputName.value.trim()) {
          alert(errorMessages.name);
          return;
        }

        if (!inputEmail.value.trim() || regEx.test(inputEmail)) {
          alert(errorMessages.email);
          return;
        }

        if (!inputPhone.value.trim()) {
          alert(errorMessages.phone);
          return;
        }

        if (!inputDate.value.trim()) {
          alert(errorMessages.date);
          return;
        }

        // Call addUser function and wait until resolve
        await addUser(
          inputName.value,
          inputEmail.value,
          inputPhone.value,
          inputDate.value
        );

        // Upload the new content of users
        const dashboard = document.getElementById("dashboard");
        dashboard.innerHTML = "";
        const usersContent = await Users();
        dashboard.appendChild(usersContent);

        form.reset();
        modal.classList.remove("active");
      });
    }
  }
});

// Play a song if user click bell icon
window.addEventListener("click", function playAudioOnce(e) {
  const audio = document.querySelector(".audio__daga--adicta");
  if (e.target.matches(".bx-bell")) {
    audio.play();
    window.removeEventListener("click", playAudioOnce);
  }
});

// Handle the song using space key
window.addEventListener("keydown", function (e) {
  if (
    e.code === "Space" &&
    !["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)
  ) {
    e.preventDefault();
    const audio = document.querySelector(".audio__daga--adicta");
    if (audio) {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }
});

// Run init function when hash(url) change
window.addEventListener("hashchange", init);

// Run init function once the page has loaded
window.addEventListener("DOMContentLoaded", init);
