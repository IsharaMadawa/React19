import './App.css'
import Container from "./components/container";
import ContainerNew from "./components/container-new";

function App() {

  return (
    <div>
      <h1>forwardRef</h1>
      <Container />
      <br />
      <h1>refs as Prop</h1>
      <ContainerNew />
    </div>
  )
}

export default App