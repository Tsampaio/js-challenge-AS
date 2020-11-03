import moxios from 'moxios';

import { storeFactory } from '../../tests/testUtils.js';
import { repositoryListAction } from './repositoryActions';

describe('repositoryActions', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test("repositoryActions should be defined", () => {
    expect(repositoryListAction).toBeDefined();
  });
  test('axios response', () => {
    const repositories = { loading: false, repositories: undefined}
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: repositories
      });
    });

    return store.dispatch(repositoryListAction())
      .then(() => {
        const newState = store.getState();
        expect(newState.repositoryList).toStrictEqual(repositories);
      })
  });
});