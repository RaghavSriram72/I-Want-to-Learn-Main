import { createSlice } from '@reduxjs/toolkit'

export const flowChartSlice = createSlice({
    name: 'flowChart',
    initialState: {
        flowChartElements: []
    },
    reducers: {
        addValue: (state, action) => {
            if (action.payload.index === null) state.flowChartElements.push(action.payload.text)
            else state.flowChartElements.splice(action.payload.index, 0, action.payload.text)
        },
        deleteValue: (state, action) => {
            state.flowChartElements.splice(action.payload.index, 1)
        },
        changeValue: (state, action) => {
            if (action.payload.index === null) state.flowChartElements.push(action.payload.text)
            else state.flowChartElements.splice(action.payload.index, 1, action.payload.text)
        },

    }
})

export const { addValue, deleteValue, changeValue } = flowChartSlice.actions

export default flowChartSlice.reducer

