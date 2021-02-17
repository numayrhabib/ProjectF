import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'

function App() {
  return (
    <div className="App">
      <Greet name= "num" name2="test">
        <button>yo</button>
      </Greet>
      <Greet name= "nig" name2="test"/>
      <Greet name= "num2" name2="test"/>
      <Welcome/>
      <Hello/>
    </div>
  );
}

export default App;
