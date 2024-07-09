import {combineReducers} from 'redux';

import base from './baseReducer';
import user from './userReducer';
import sport from './sportReducer';

const rootReducer = combineReducers({
  base,
  user,
  sport,
});

export default rootReducer;
