import './App.css';
import NavbarComp from './components/NavbarComp'
import TimeClockForm from './components/TimeClockForm'
import Geolocated from './components/Geolocated'
import Coords from './components/Coords'

function App() {
  return (
    <div className="App">
      <NavbarComp/>
      <header className="App-header">
        < TimeClockForm />
        < Coords />
      </header>
    </div>
  );
}

export default App;
