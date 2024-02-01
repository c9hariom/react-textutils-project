import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

let name = "Hariom Singh"
function App() {
  return (
    <>
    <Navbar title="Text-Utils" about="About TextUtils"/>
    <div className="container my-3">
      <TextForm heading="Enter your heading here"/>
    </div>
    </>
  );
}

export default App;
