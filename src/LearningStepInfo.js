import React, {useState, useEffect} from 'react'
import "./flowChart.css"
import {useSelector, useDispatch} from 'react-redux'
import {
    addValue, deleteValue, changeValue
} from './redux/flowChartSlice'
import {current} from "@reduxjs/toolkit";


const NoItemSelected = (props) => {
    const [currentElementValue, setCurrentElementValue] = useState("")
    const flowChartElements = useSelector(state => state.flowChart.flowChartElements)
    // console.log(flowChartElements)
    const dispatch = useDispatch()

    useEffect(() => {
        setCurrentElementValue("")
    }, [props.selectedId, flowChartElements])

    const handleChange = (event) => {
        setCurrentElementValue(event.target.value)
    }


    return (
        <div className="learningStepInfo" style={{position: 'relative', marginTop: '50px'}}>
            {props.selectedId == null ? <h1>Add a new element</h1> : <h1>Edit Element</h1>}
            <label>Value:
                <input type="text"
                       className="textInputBox"
                       value={currentElementValue}
                       onChange={handleChange}
                />
            </label>
            <input type="button" value="Submit"
                   className="submitChangesButton"
                   onClick={() => dispatch(changeValue({"index": props.selectedId, "text": currentElementValue}))}
            />
            <input type="button" value="Delete"
                   className="deleteElementButton"
                   onClick={() => dispatch(deleteValue({"index": props.selectedId}))}
            />
        </div>

    )


}

export default NoItemSelected