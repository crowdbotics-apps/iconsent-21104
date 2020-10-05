import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn2127215Reducer from '../features/SignIn2127215/redux/reducers'
import SignIn2127201Reducer from '../features/SignIn2127201/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn2127215: SignIn2127215Reducer,
SignIn2127201: SignIn2127201Reducer,

});