import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';

import { reducer, middleware } from '../src/store.js';

export const storeFactory = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)
  return createStoreWithMiddleware(reducer, initialState);
}

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name);
  expect(propError).toBeUndefined();
}