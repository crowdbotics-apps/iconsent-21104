import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn2127283Reducer from '../features/SignIn2127283/redux/reducers'
import SignIn2127269Reducer from '../features/SignIn2127269/redux/reducers'
import SignIn2127255Reducer from '../features/SignIn2127255/redux/reducers'
import SignIn2127241Reducer from '../features/SignIn2127241/redux/reducers'
import SignIn2127215Reducer from '../features/SignIn2127215/redux/reducers'
import SignIn2127201Reducer from '../features/SignIn2127201/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn2127283: SignIn2127283Reducer,
SignIn2127269: SignIn2127269Reducer,
SignIn2127255: SignIn2127255Reducer,
SignIn2127241: SignIn2127241Reducer,
SignIn2127215: SignIn2127215Reducer,
SignIn2127201: SignIn2127201Reducer,

});