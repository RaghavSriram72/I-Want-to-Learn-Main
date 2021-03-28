import React, {useState, useEffect} from 'react';
import FlowChart from './FlowChart'
// import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import LearningStepInfo from './LearningStepInfo'

function App() {
    const [selectedId, setSelectedId] = useState(null)
    const selectItem = (id) => {
        if (selectedId === id) {
            setSelectedId(null)
        } else {
            setSelectedId(id)
        }
    }

    return (
        <div className="App">
            <div className="split left">
                <div className="centered">
                    <FlowChart selectedId={selectedId}
                               setSelectedId={setSelectedId}
                               selectItem={selectItem}
                    />
                </div>
            </div>
            <div className="split right">
                <div className="centered">
                    <LearningStepInfo selectedId={selectedId}/>
                </div>
            </div>
        </div>

    )
}

export default App;
