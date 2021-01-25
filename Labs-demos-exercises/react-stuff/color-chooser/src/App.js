import './App.css';
import Header from './Header';
import Color from './Color';

function App() {
  return (
    <div className="App">
      <Header/>
      <Color handleClick={console.log("color")}/>
    </div>
  );
}

export default App;
