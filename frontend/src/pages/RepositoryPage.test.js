import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, storeFactory, checkProps } from '../../tests/testUtils';
import RepositoryPage from './RepositoryPage';
import { repositoryDetailsAction } from '../actions/repositoryActions';

const setup = (initialState={}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(
    <RepositoryPage 
      store={store} 
      match={{params: {id: 1}, isExact: true, path: "", url: ""}}
    />);

  return wrapper;
}

describe('RepositoryPage', () => {
  let wrapper;
  let store;
 
  beforeEach(() => {
    store = storeFactory();
    wrapper = setup();
  });

  test('renders RepositoryPage component Page without crashing', () => {
    const wrapper = shallow(<RepositoryPage store={store} />);
    expect(wrapper.length).toBe(1);
  });

  test('does not throw warning with expected props', () => {
    const newState = store.getState();
    const match={params: {id: 1}, isExact: true, path: "", url: ""}

    const expectedProps = { match, repositoryDetailsAction, newState };
    checkProps(RepositoryPage, expectedProps);
  });
})