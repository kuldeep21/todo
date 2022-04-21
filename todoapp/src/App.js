import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField.tsx';
import Button from './components/Button.tsx';
import ItemList from './components/ItemList.tsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          ToDo App
        </p>
        <InputField></InputField>
        <Button buttonName="Add"></Button>
        <ItemList itemname="Laundry"></ItemList><Button buttonName="Edit"></Button><Button buttonName="Delete"></Button>
        <ItemList itemname="Movie"></ItemList><Button buttonName="Edit"></Button><Button buttonName="Delete"></Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      
    </div>
  );
}

export default App;
