import 'bootstrap/dist/js/bootstrap';
import logo from './logo.svg';
import './App.css';
import BingMap from './components/bingmaps-react/BingMapsReact';
import SetCoordinate from './components/set-coordinates/SetCoordinates';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BingMap />
      <SetCoordinate />
      </header>
    </div>
  );
}

export default App;
