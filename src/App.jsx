import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import MapPage from './components/MapPage';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='flexing'>
        <div>
      <HomePage/>

        </div>
        <div>
      <MapPage/>

        </div>
      </div>
    </div>
  );
}

export default App;
