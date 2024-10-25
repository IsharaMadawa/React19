import './App.css'
import LoginOld from "./components/login";
import LoginAction from "./components/login-action";
import LoginReact19 from "./components/login-react-19";

function App() {

  return (
    <div>
      <LoginOld />
      <hr />
      <h2>with actions</h2>
      <LoginAction />
      <hr />
      <h2>with useActionState</h2>
      <LoginReact19 />
    </div>
  )
}

export default App