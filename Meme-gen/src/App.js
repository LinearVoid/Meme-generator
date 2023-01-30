import './App.css';
import Navbar from './Components/navbar.js';
import Forma from './Components/formA';
import ImgHolder from './Components/ImgHolder';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Forma className = "Forma"/>
      <p>made in one day by Josh</p>
      <p>Optimized for PC and tablet devices</p>
    </div>
  );
}

export default App;
