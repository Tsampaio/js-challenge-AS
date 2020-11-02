import { repositoryListReducer, repositoryDetailsReducer } from './repositoryReducers';

test('returns default initial state of repositoryListReducer when no action is passed', () => {
  const newState = repositoryListReducer(undefined, {});
  expect(newState).toStrictEqual({ repositories: []});
});

test('returns default initial state of repositoryDetailsReducer when no action is passed', () => {
  const newState = repositoryDetailsReducer(undefined, {});
  expect(newState).toStrictEqual({ repository: {}});
});