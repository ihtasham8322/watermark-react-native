import { combineReducers } from 'redux';

import authReducer from './auth';
import userReducer from './user';
import postReducer from './posts';

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    post: postReducer,
});

export default rootReducer;