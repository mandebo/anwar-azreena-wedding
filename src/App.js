import logo from './logo.svg';
import './App.css';
import Frontphoto from './images/normal-front.png';
import Backphoto from './images/normal-back.png';
import Back from './components/Back';
import Map from './components/Map';



function App() {
  return (
    <div className="master shadow ">
       <img src= { Frontphoto } />
       <img src= { Backphoto } />
       <Back/>
       <Map/>
       
    </div>

   
  );
}

export default App;
