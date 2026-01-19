import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [bg, setBg] = useState('light');


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const toggleBg = (color) => {
    setBg(color);
    document.body.style.backgroundColor = color;
    if (color === '#f7c1cc') {
      document.body.style.color = 'black';
    }
    else if (color === '#2B2E34') {
      document.body.style.color = 'white';
    }
    else {
      document.body.style.color = 'white';
    }
  }
  return (
    <>

      <Router>
        <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode} toggleBg={toggleBg} />
        <Alert alert={alert} />
        <Routes>
        <Route path="/about" element={<About mode={mode} />} />
        <Route
          path="/"
          element={
            <TextForm
              heading="TextUtils - Enter the text below"
              showAlert={showAlert}
            />
          }
        />
        </Routes>
      </Router>

    </>
  );
}

export default App;
