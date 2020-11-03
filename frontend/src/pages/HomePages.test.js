
import React from 'react';
import { shallow} from "enzyme";
import { findByTestAttr, storeFactory, checkProps } from '../../tests/testUtils';
import HomePage from './HomePage';
import { repositoryListAction, searchRepositoryAction } from '../actions/repositoryActions';

const setup = (initialState={}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<HomePage store={store} />).dive().dive();

  return wrapper;
}

describe('HomePage', () => {
  let wrapper;
  let store;
 
  beforeEach(() => {
    store = storeFactory();
    wrapper = setup();
  });

  test('renders input for searching repositories without errors', () => {
    const inputBox = findByTestAttr(wrapper, 'input-search-repositories');
    expect(inputBox.length).toBe(1)
  });
 
  test('runs action repositoryListAction without errors', () => {
    store.dispatch(repositoryListAction());
    const newState = store.getState();
    const expectedState = {
      repositoryDetails: {
        repository: {},
      },
      repositoryList: {
        loading: true, repositories: []
      }
      
    };
    expect(newState).toEqual(expectedState);
  });

  test('does not throw warning with expected props', () => {
    const newState = store.getState();

    const expectedProps = { newState, repositoryListAction, searchRepositoryAction };
    checkProps(HomePage, expectedProps);
  });

})