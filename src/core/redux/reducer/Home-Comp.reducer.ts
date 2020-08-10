import {HomeActions} from '../action.map';
import {CardDataInterface, CardDataInitial} from "../../../components/data.comp.interfaces";

interface HomeModuleIntials{
    data        : [CardDataInterface]
}

const initialState : HomeModuleIntials = {
    data    : [CardDataInitial]
};

interface actionsProps {
    type    :   string;
    data    :   [CardDataInterface];
}

const updateHomePageData = (oldState : HomeModuleIntials, newData : [CardDataInterface]) => {
    let newState = { data : [...oldState.data, ...newData]};
    return newState;
};

const HOME_REDUCER = (state = initialState, action : actionsProps) => {
    const dataToUpdate : [CardDataInterface]     =  action.data;
    switch(action.type){
        case HomeActions.setQuestionAnswers          :   return updateHomePageData(state, dataToUpdate);
        default : return state;
    }
}

export default HOME_REDUCER;