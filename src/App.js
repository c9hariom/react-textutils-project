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

  const toggleMode = (cls)=>{
    if(cls !=="dark"){
      //console.log("entered");
      document.body.className = "bg-"+cls;
    } if(cls === "dark" && mode === "light"){
        setMode("dark");
        document.body.classList.remove("bg-primary","bg-success","bg-warning","bg-danger","bg-info");
      document.body.style.backgroundColor = "#2b2335";
        document.body.style.color = "white";
        document.getElementById("blackNwhite").classList.remove("bg-black");
        document.getElementById("blackNwhite").classList.add("bg-white");
        
        // showAlert("Success","Dark Mode has been enabled");
    } 
    if(cls === "dark" && mode === "dark") {
      setMode("light");
      document.body.classList.remove("bg-primary","bg-success","bg-warning","bg-danger","bg-info");
      document.body.style.color = 'black';
      document.body.style.backgroundColor = 'white';
      document.getElementById("blackNwhite").classList.add("bg-black");
        document.getElementById("blackNwhite").classList.remove("bg-white");
        
      // showAlert("Success","Dark Mode has been disabled");
    }
  }

  return (
    <Router>
    <>
        <Navbar title="Text-Utils" mode={mode}  toggleMode={toggleMode} about="About"/>
        <Alert alert={alert}/>
        <div className="container my-3">
        <Routes> {/* Wrap routes with <Routes> */}
            <Route exact path="/" element={<TextForm heading="" mode={mode} showAlert={showAlert}/>}/>
            <Route path="/about" element={<About mode={mode} />} />
          </Routes>
            {/* <About/> */}
        </div>
      </>
    </Router>
  );
}

export default App;
