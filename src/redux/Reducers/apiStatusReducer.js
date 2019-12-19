import { BEGIN_API_CALLS} from "../actions/ActionTypes";
import initialState from "./initialState";

const actionTypeEndsInSuccess = (actionType) => {
    return actionType.substring(actionType.length - 8) === "_SUCCESS";
};

const apiCallsStatusReducer = (state = initialState.apiCallsInProgress, action) => {
    if (action.type === BEGIN_API_CALLS) {
        return state + 1;
    } else if(actionTypeEndsInSuccess(action.type)) {
        return state - 1;
    }
    return state;
};

export default apiCallsStatusReducer;


