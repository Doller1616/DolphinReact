
import {combineReducers} from 'redux';
import DashboardReducers from '@Pages/Dashboard/Reducer'

const rootReducer  = combineReducers({
    ...DashboardReducers
});

export default rootReducer
