
import './App.css';
import { MyMeals } from './MyMeals';

function App() {
  return (
    <div>
      <h1>Menu Plan</h1>
      <input
      type="text"
      placeholder="Add a meal"
      />
      <button>Add</button>
      
      <MyMeals text="WE GOT HERE"/>
    </div>
  )
}

export default App;
