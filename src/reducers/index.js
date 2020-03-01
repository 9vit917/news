import { combineReducers } from 'redux';

import posts from './posts';
import region from './region';

const rootReduсers = combineReducers({
    posts,
    region
});

export default rootReduсers;