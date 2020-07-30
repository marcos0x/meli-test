import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';
import persistCombineReducers from './persistCombineReducers';

import { reducer as dataReducer } from '../data/reducer';
import { reducer as servicesReducer } from '../services/reducer';
import * as persistActions from '../services/persist/actions';
import saga from '../services/saga';

const appReducer = persistCombineReducers('root', { services: servicesReducer, data: dataReducer });

const sagaMiddleware = createSagaMiddleware();

const store = createStore(appReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

export const persistor = persistStore(store, null, () => {
  store.dispatch(persistActions.update({ isHydrated: true }));
});

sagaMiddleware.run(saga);

export default store;
