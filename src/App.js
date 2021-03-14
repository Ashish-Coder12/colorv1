import React, { useState } from 'react'
import './App.css';
import { BsMoon } from 'react-icons/bs';
import { CgSun } from 'react-icons/cg';
import Color from './pages/Color/Color';
import {BrowserRouter as Router, Route, Switch  } from 'react-router-dom';


function App() {
  const [click ,setClick] = useState(false);
  const handleClick = () => setClick(!click)
  return (
    <Router >
      <div className={click ? 'lightMode' : 'darkMode' }>
        <nav className='navbar'>
          <h1>Color.Js</h1>
          <div className='nightMode' onClick={handleClick} >
                {click ?   <CgSun/>: <BsMoon/> }
                </div>
        </nav>
        <Switch>
          <Route parh='/' exact component={Color} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
