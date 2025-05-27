import "./App.css"
import { CountdownTimer2 } from "./components/countdown-timer"
import { Accordion } from "./components/accordion"

function App() {
  const initialTime = 3
  const sections = [
    { title: "Section 1", description: "Content for section 1" },
    { title: "Section 2", description: "Content for section 2", expanded: true },
  ]
  return (
    <>
      <CountdownTimer2 initialTime={initialTime} />
      <Accordion sections={sections} />
    </>
  )
}

export default App
