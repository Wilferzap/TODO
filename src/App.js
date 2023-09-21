import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/pure/greeting";
import GreetingF from "./components/pure/greetingF";
import TaskListComponent from "./components/container/task_list";
import GreetingStyled from "./components/pure/greetingStyled";
import Child from "./components/pure/child";
import Father from "./components/container/father";
import LoginForm from "./components/pure/forms/loginForm";
import LoginFormik from "./components/pure/forms/loginFormik";
import RegisterFormik from "./components/pure/forms/registerFormik";
import AsyncExample from "./components/pure/AsyncExample";
import AxiosExample from "./components/pure/AxiosExample";
import AxiosCRUDExample from "./components/pure/AxiosCRUDExample";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* componente propio */}
      {/* <GreetingF name="Wilson"></GreetingF> */}

      {/* <GreetingStyled name="Wilson"></GreetingStyled> */}
      {/* </header> */}
      {/* <TaskListComponent></TaskListComponent> */}
      {/* <Child></Child> */}
      {/* <Father></Father> */}
      {/* <LoginFormik></LoginFormik> */}
      {/* <RegisterFormik></RegisterFormik> */}

      {/* Ejemplos de asincronia */}
      {/* <AsyncExample></AsyncExample> */}
      {/* <AxiosExample></AxiosExample> */}
      <AxiosCRUDExample></AxiosCRUDExample>
    </div>
  );
}

export default App;
