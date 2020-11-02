import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { 
	repositoryListReducer,
	repositoryDetailsReducer } from './reducers/repositoryReducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export const reducer = combineReducers({
	repositoryList: repositoryListReducer,
	repositoryDetails: repositoryDetailsReducer
});

const initialState = {};

export const middleware = [thunk];

const store = createStore(
  reducer,
	initialState, 
	composeWithDevTools(applyMiddleware(...middleware) )
);

export default store;