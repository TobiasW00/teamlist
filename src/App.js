import React from 'react';
import './App.module.css';
import { Route } from 'react-router-dom';
import Home from "./pages/Home";
import {TeamsContextWrapper} from './contexts/TeamsContext';
function App(){

    return (
      <TeamsContextWrapper>
      <div className="App">
      <Route exact path="/" component={Home} />
      </div>
    </TeamsContextWrapper>
    );
  }



export default App;