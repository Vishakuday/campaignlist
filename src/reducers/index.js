import { combineReducers } from 'redux';

import campaignInfo from './campaignInfo';

const rootReducer = combineReducers({
  campaignInfo: campaignInfo
});

export default rootReducer;

