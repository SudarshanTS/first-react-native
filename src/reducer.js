import { combineReducers } from 'redux';
import { loginReducer } from "./modules/Login/container/actions";
const rootReducer = combineReducers({
	loginReducer
});

export default rootReducer;