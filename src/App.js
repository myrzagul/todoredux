import './App.css';
import Todoitem from "./components/Todoitem/Todoitem";
import { Button, Input } from "./Styles";

function App() {
  return (
    <div className="App">
      <header>
        <Input type="text" placeholder="Input Todo" />
        <Button>Save</Button>
        </header>
        <section>
          {
          [1,2,3].map(() => <Todoitem task="Todo Item" />)
          }   
        </section>
    </div>
      );
}

      export default App;
