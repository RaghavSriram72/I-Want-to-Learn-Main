import {configureStore} from '@reduxjs/toolkit'
import flowChartReducer from './flowChartSlice'


export default configureStore({
    reducer: {
        flowChart: flowChartReducer,
    }
})