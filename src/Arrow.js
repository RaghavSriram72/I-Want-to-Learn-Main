import React from 'react'
import "./flowChart.css"

const Arrow = (props) => {
    let rotation;
    switch (props.direction) {
        case "Right":
            rotation = "rotate(0deg)"
            break
        case "Down":
            rotation = "rotate(90deg)"
            break
        case "Left":
            rotation = "rotate(180deg)"
            break
        case "Up":
            rotation = "rotate(270deg)"
            break
        default:
            rotation = "rotate(0deg)"
            break
    }
    return (
        <div className="arrowContainer flowChartItem">
            <div className="arrow" style={{ transform: rotation }}>
                <div className="line"></div>
                <div className="point"></div>
            </div>
        </div>
    )
}

export default Arrow