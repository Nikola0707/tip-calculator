import logo from './logo.svg';
import './App.css';
import Calculator from './components/Calculator.component';

function App() {
  return (
   <div className="app-container">
     <div className="title">
       <span>SPLI</span>
       <span>TTER</span>
     </div>
      <Calculator />
   </div>
  );
}

export default App;
