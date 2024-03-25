import './App.css'
import Form from "./form.tsx"
import Title from "./title.tsx";
import Intro from "./intro.tsx";
import List from "./list.tsx";
import Table from "./table.tsx";

function App() {
  return (
    <>
      <Title />
        <Intro />
      <List />
        <Table /><br></br>
        <p><u>Now tell me about yourself!</u></p>
        <Form />
      <div className="card">
      </div>
    </>
  )
}

export default App
