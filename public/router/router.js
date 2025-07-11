// Import each view as a function
import Home from "../pages/home.js"
import Course from "../pages/course.js"
import Users from "../pages/users.js"
import Payment from "../pages/payment.js"
import Report from "../pages/report.js"
import Settings from "../pages/settings.js"

// Available routes-views
const router = {
  "#/": Home,
  "#/course": Course,
  "#/users": Users,
  "#/report": Report,
  "#/payment": Payment,
  "#/settings": Settings
}

export { router }