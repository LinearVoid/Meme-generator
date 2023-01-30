import './App.css';
import Navbar from './Components/navbar.js';
import Forma from './Components/formA';
import ImgHolder from './Components/ImgHolder';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Forma className = "Forma"/>
      <ImgHolder/>
    </div>
  );
}

export default App;
