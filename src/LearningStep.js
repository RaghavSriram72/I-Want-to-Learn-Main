import React, {useState} from 'react'
import "./flowChart.css"


const LearningStep = (props) => {


    return (
        <div className = "learningStep flowChartItem"
             onClick={props.selectItem}
             style = {{border: props.isSelected ? "3px solid deeppink" : "1px solid deeppink"}}>
            <p>{props.text}</p>
        </div>
    )
}

export default LearningStep