import {HomeActions} from '../action.map';

interface HomeModuleIntials{
    data        : []
}

const initialState : HomeModuleIntials = {
    data    : []
};

interface actionsProps {
    type    :   string;
    data    :   [];
}

const updateHomePageData = (oldState : HomeModuleIntials, newData : []) => {
    console.log("updating redux ", newData);
    let newState = { data : [...oldState.data, ...newData]};
    return newState;
};

const HOME_REDUCER = (state = initialState, action : actionsProps) => {
    const dataToUpdate      =  action.data;
    switch(action.type){
        case HomeActions.setQuestionAnswers          :   return updateHomePageData(state, dataToUpdate);
        default : return state;
    }
}

export default HOME_REDUCER;