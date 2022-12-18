import './App.css';
import React from 'react';
import { ReactSession } from 'react-client-session';
import MainComponent from './Components/MainComponent'

const App = () => {
  ReactSession.setStoreType("localStorage");
    return (
        <div className="App">
        <MainComponent />
        </div>
    );
}
export default App;