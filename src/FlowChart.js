import React, {useState} from 'react'
import "./flowChart.css"
import LearningStep from './LearningStep'
import Arrow from './Arrow'
import Blank from "./Blank"
import {useSelector, useDispatch} from 'react-redux'
import {
    addValue, deleteValue, changeValue
} from './redux/flowChartSlice'

function flowChartItem(row, col, text = "", type = 'BLANK', direction = null, id = 1) {
    this.row = row
    this.col = col
    this.type = type
    this.direction = direction
    this.text = text
    this.id = id
}

const keyGenerator = (row, col) => {
    const key = 'row' + row + ',' + 'col' + col
    return key
}

const FlowChart = (props) => {
    const flowChartCells = useSelector(state => state.flowChart.flowChartElements)

    let lastRow = 0
    let flowChartItems = []
    flowChartCells.forEach((element, index) => {
        // console.log("index", index)
        if (index === 0) {
            flowChartItems.push(
                <LearningStep row={0} col={0}
                              key={keyGenerator(0,0)} text={element}
                              isSelected={index === props.selectedId}
                              selectItem={() => props.selectItem(index)}
                />
            )
        } else if (index % 4 === 1) {
            flowChartItems.push(
                    <Arrow key={keyGenerator(lastRow, 1)}
                           direction="Right"
                    />
            )
            flowChartItems.push(
                <LearningStep row={lastRow} col={2}
                              key={keyGenerator(lastRow, 2)} text={element}
                              isSelected={index === props.selectedId}
                              selectItem={() => props.selectItem(index)}
                />
            )
        } else if (index % 4 === 2) {
            lastRow += 2
            flowChartItems.push(
                <Blank key={keyGenerator(lastRow - 1, 0)}/>
            )
            flowChartItems.push(
                <Blank key={keyGenerator(lastRow - 1, 1)}/>
            )
            flowChartItems.push(
                <Arrow key={keyGenerator(lastRow - 1, 2)} direction="Down"/>
            )
            flowChartItems.push(
                <Blank key={keyGenerator(lastRow, 0)}/>
            )
            flowChartItems.push(
                <Blank key={keyGenerator(lastRow, 1)}/>
            )
            flowChartItems.push(
                <LearningStep row={lastRow} col={2}
                              key={keyGenerator(lastRow, 2)} text={element}
                              isSelected={index === props.selectedId}
                              selectItem={() => props.selectItem(index)}
                />
            )
        } else if (index % 4 === 3) {
            // indexesToDelete.push(index - 1)
            flowChartItems.splice(flowChartItems.length - 3, 1,
                <LearningStep row={lastRow} col={2}
                              key={keyGenerator(lastRow, 1)} text={element}
                              isSelected={index === props.selectedId}
                              selectItem={() => props.selectItem(index)}
                />
                )
            flowChartItems.splice(flowChartItems.length - 2, 1,
                <Arrow key={keyGenerator(lastRow, 0)} direction="Left"/>
                )
        } else {
            lastRow += 2
            flowChartItems.push(<Arrow key={keyGenerator(lastRow - 1, 0)} direction="Down"/>)
            flowChartItems.push(<Blank key={keyGenerator(lastRow - 1, 1)}/>)
            flowChartItems.push(<Blank key={keyGenerator(lastRow - 1, 2)}/>)
            flowChartItems.push(<LearningStep row={lastRow} col={0}
                                              key={keyGenerator(lastRow, 0)} text={element}
                                              isSelected={index === props.selectedId}
                                              selectItem={() => props.selectItem(index)}
            />
            )
        }
    })

    console.log("items:" , flowChartItems)
    const flowChartTemplateColumns = "minmax(150px, 200px) ".repeat(3)
    const flowChartStyle =
        {
            display: "grid",
            gridTemplateColumns: flowChartTemplateColumns,
            gridAutoRows: "1fr",
        }
    return (
        <div
            style={flowChartStyle}
            className="flowChart">
            {flowChartItems}
        </div>
    )

}

export default FlowChart
