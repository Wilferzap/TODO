import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import HomePage from "./pages/home/HomePage";
import NotFoundPage from "./pages/404/NotFoundPage";
import AboutPage from "./pages/about-faqs/AboutPage";
import ProfilePage from "./pages/home/ProfilePage";
import TaskListComponent from "./components/container/task_list";

function AppRoutingOne() {
  return (
    <Router>
      <div>
        <aside>
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/profile"}>Profile</Link>
        </aside>
        <main>
          <Routes>
            <Route exact path="/" Component={HomePage}></Route>
            <Route path="/about" Component={AboutPage}></Route>
            <Route path="/faqs" Component={AboutPage}></Route>
            <Route path="/profile" Component={ProfilePage}></Route>
            <Route path="/tasks" Component={TaskListComponent}></Route>

            <Route path="*" Component={NotFoundPage}></Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default AppRoutingOne;
