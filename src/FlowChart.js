import React from 'react'

const gridItem = (row, col, text = "", type = "BLANK", direction = null) => {
    this.row = row
    this.col = col
    this.type = type
    this.direction = direction
    this.text = text
}

const FlowChart = () => {
    const flowChartCells = [
        new gridItem(0, 0, "Sample", "Decision")
    ]
    const flowChartItems = flowChartCells.map((item, index) => {
        switch (item.type) {
            case
            case "Decision":
                return <LearningStep row = {item.row} col = {item.col}
                                 key = {item.row + "," + item.col }
                                 text = {item.text}
                />
                break;
        }
    })

}

export default FlowChart