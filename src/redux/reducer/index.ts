import {combineReducers} from 'redux';
import HomeReducer from './Home-Comp.reducer';

const AppStates = {
    ["HOME_STATE"]  : HomeReducer
};
// AppStates["HOME_STATE"] = HomeReducer;

const COMBINED_REDUCERS = combineReducers(AppStates);
export type RootState = ReturnType<typeof COMBINED_REDUCERS>;
export default COMBINED_REDUCERS;
