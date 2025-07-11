# SPA Dashboard - Vanilla JS

A single-page application (SPA) dashboard built with vanilla JavaScript, designed for managing users (students) with full CRUD (Create, Read, Update, Delete) operations. The dashboard features a modern UI, modal forms, and dynamic routing without frameworks.

## 📁 Project Structure

```
public/
  index.html
  index.js
  css/
    style.css
  assets/
    user--img.jpg
    new--user--img.avif
    severino--sleeping.webp
    18 - Daga Adicta - Luigi 21 Plus FT. J Alvarez  El Patán (1).mp3
  data/
    db.json
  actions/
    addUser.js
    deleteUser.js
    modifyUser.js
  pages/
    home.js
    course.js
    users.js
    payment.js
    report.js
    settings.js
  router/
    router.js
package.json
```

## 🎯 Purpose

This project demonstrates how to build a fully functional dashboard SPA using only vanilla JavaScript, HTML, and CSS. It is intended for educational purposes, showcasing:
- SPA routing without frameworks
- Modular code organization
- CRUD operations with a mock backend (JSON server)
- Responsive and modern UI/UX

## 🚀 Main Functionalities

- **SPA Routing:** Navigation between Home, Course, Users, Payment, Report, and Settings sections without page reloads ([router.js](public/router/router.js)).
- **User Management:** 
  - List all users ([users.js](public/pages/users.js))
  - Add new users via modal form ([addUser.js](public/actions/addUser.js))
  - Edit user details in a modal ([modifyUser.js](public/actions/modifyUser.js))
  - Delete users ([deleteUser.js](public/actions/deleteUser.js))
- **Search Bar:** UI for searching users (logic can be extended).
- **Notifications:** Bell icon plays an audio notification.
- **Responsive Design:** Clean and modern layout ([style.css](public/css/style.css)).
- **Mock Data:** User data stored in [db.json](public/data/db.json) (compatible with [JSON Server](https://github.com/typicode/json-server)).

## 🗂️ Important Sections

- **public/index.html:** Main HTML file, includes modals for adding and editing users.
- **public/index.js:** Entry point, handles routing, event listeners, and main logic.
- **public/pages/**: Contains JS modules for each dashboard section.
- **public/actions/**: Contains JS modules for user CRUD operations.
- **public/router/router.js:** SPA router configuration.
- **public/data/db.json:** Mock database for users.
- **public/css/style.css:** All styles for the dashboard.

## ⚙️ How to Run

1. **Install [JSON Server](https://github.com/typicode/json-server):**
   ```sh
   npm install -g json-server
   ```
2. **Start the mock backend:**
   ```sh
   json-server --watch public/data/db.json --port 3000
   ```
3. **Open `public/index.html` in your browser.**

## 👨‍💻 Author

- **Felipe Marin**

## ⚖️ License & Rights

This project is licensed under the ISC License.  
All rights reserved © Felipe Marin.

You are free to use, modify, and distribute this project for educational and non-commercial purposes. Please give credit to the author.

---

Enjoy exploring and learning from this SPA Dashboard project!