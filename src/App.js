import './App.css';
import { Banner } from './Components/Banner/Banner';
import { Header } from './Components/Header/Header';

function App() {
  return (
    <div className="wrapper">
       <div className="container">
      <Header/>
      <Banner/>
      </div>
    </div>
  );
}

export default App;
