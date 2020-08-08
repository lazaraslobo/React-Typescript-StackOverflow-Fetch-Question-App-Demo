import {HomeActions} from '../action.map';

interface HomeModuleIntials{
    // isDataLoaded        :     boolean;
    activeTab           :     number,
    homeScrnPageData    :     {},
    activityComp      :   {
            activitiesArr   :   []   
    }
}
//Component InitialState
const initialState : HomeModuleIntials = {
    // isDataLoaded        :     false,
    activeTab           :     1,
    homeScrnPageData    :     {},
    activityComp      :   {
            activitiesArr   :   []   
    }
};

interface actionsProps {
    type    :   string;
    data    :   {};
}

/* Home Screen Data information */
const updateHomePageData = (oldState : HomeModuleIntials, newData : {}) => {
    let newState = {...oldState, homeScrnPageData : newData};
    return newState;
};

/* Home Component State */
const HOME_REDUCER = (state = initialState, action : actionsProps) => {
    const dataToUpdate      =  action.data;
    console.log("incoming action ", action);
    switch(action.type){
        case HomeActions.setQuestionAnswers          :   return updateHomePageData(state, dataToUpdate);
        default : return state;
    }
}

export default HOME_REDUCER;