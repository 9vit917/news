import { applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';

import rootReduсers from './reducers';

const store = createStore(rootReduсers, applyMiddleware(logger));

export default store;