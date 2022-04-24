import logo from './logo.svg';
import './App.css';
import InputField from './components/InputField.jsx';
import Button from './components/Button.jsx';
import ItemList from './components/ItemList.tsx';
import Header from './Header.jsx';
import containerTodo from './containerTodo.jsx';
import React,{useState} from 'react';

function App() {
  const [textFieldValue,setTextFieldValue] = useState("")
  const [listContents,setListContents] =useState(["Laundry"]);
  
  const handleAdd =()=>{
    setListContents([...listContents,textFieldValue]);
    console.log("text",listContents);
  }
  const handleChange = (event) =>{
    setTextFieldValue(event.target.value);
  }
  return (
    <div className="App">
      
      <Header/>
      <containerTodo className="containerBody">
        <InputField value={textFieldValue} handleChange={handleChange}/>
        <Button buttonName="Add" onclick={handleAdd}></Button>
        {listContents.map((listitem)=><><ItemList itemname={listitem}></ItemList> <Button buttonName="Edit"></Button><Button buttonName="Delete"></Button></>)}
       
        </containerTodo>
        
      
      
      
    </div>
  );
}

export default App;
