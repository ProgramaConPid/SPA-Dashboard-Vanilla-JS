// Section users view
export default async function Users() {
  const divContainer = document.createElement("div");
  const divSearch = document.createElement("div");
  const divAddUser = document.createElement("div");
  const divContainerUsers = document.createElement("div");

  divSearch.innerHTML = `
    <i class='bx bx-arrow-left-circle'></i> 
    <div class="container__search">
      <div class="search__input">
        <input type="search" placeholder="Search...">
        <i class='bx bx-search'></i> 
      </div>
      <i class='bx bx-bell'></i> 
    </div>
  `;

  divAddUser.innerHTML = `
    <h2>Students List</h2>
    <div class="container__addUser">
      <i class='bx bx-carets-up-down'></i> 
      <button class="btn__addUser" id="btn__addUser">ADD NEW STUDENT</button>
    </div>
  `;

  try {
    const response = await fetch("http://localhost:3000/users");

    if (!response.ok) {
      throw new Error("Error al conectar con el servidor!");
    }

    const data = await response.json();
    const dataLength = data.length > 0

    // Validate if db.json has at least one user
    if (dataLength) {
      data.forEach(user => {
        // Render each user
        const divUser = document.createElement("div"); 
        divUser.classList.add("divUser")
        divUser.id = `${user.id}`
        divUser.innerHTML = `
          <div class="user__name">
            <img class="img__user" src="../assets/user--img.jpg">
            <p class="user__name--text">${user.name}</p>
          </div>
  
          <div class="user__info--info">
            <p>${user.email}</p>
            <p>${user.phone}</p>
            <p>${user.enrollNumber}</p>
            <p>${user.dateOfAdmission}</p>
          </div>
  
          <div class="user__btns">
            <i class='bx bx-pencil' id="pencil__icon"></i> 
            <i class='bx bx-trash-alt' id="trash__icon"></i> 
          </div>
        `;
        divContainerUsers.appendChild(divUser);
      });
    } else {
      // Default message if db.json has no users
      const divUser = document.createElement("div"); 
      divUser.classList.add("divUserMessage")
      divUser.innerHTML = `
        <h1>Aún no hay usuarios registrados.</h1>
      `
      divContainerUsers.appendChild(divUser)
    }

  } catch (err) {
    alert(err);
    divContainer.innerHTML = `<h1>${err}</h1>`;
  }

  // Add classes to each section
  divContainer.classList.add("dashboard__content")
  divAddUser.classList.add("divAddUser");
  divSearch.classList.add("divSearch");
  divContainerUsers.classList.add("divContainerUsers");

  // Add each section to the main container
  divContainer.append(divSearch, divAddUser, divContainerUsers);

  // Container that contains each section
  return divContainer;
}
