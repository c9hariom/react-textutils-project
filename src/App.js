import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';


function App() {

  const [alert,setAlert] = useState(null);

  let showAlert = (typ,msg)=>{
    setAlert({
      type:typ,
      message:msg
    });

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const [mode,setMode] = useState("light");

  const toggleMode = ()=>{
    if(mode === "light"){
        setMode("dark");
        document.body.style.backgroundColor = "#2b2335";
        document.body.style.color = "white";
        showAlert("Success","Dark Mode has been enabled");
    } else {
      setMode("light");
      document.body.style.color = 'black';
      document.body.style.backgroundColor = 'white';
      showAlert("Success","Dark Mode has been disabled");
    }
  }

  return (
    <Router>
    <>
        <Navbar title="Text-Utils" mode={mode} toggleMode={toggleMode} about="About TextUtils"/>
        <Alert alert={alert}/>
        <div className="container my-3">
        <Routes> {/* Wrap routes with <Routes> */}
            <Route exact path="/" element={<TextForm heading="Enter your heading here" mode={mode} showAlert={showAlert}/>}/>
            <Route path="/about" element={<About />} />
          </Routes>
            {/* <About/> */}
        </div>
      </>
    </Router>
  );
}

export default App;
