import { 
	REPOSITORY_LIST_REQUEST,
  REPOSITORY_LIST_SUCCESS,
	REPOSITORY_LIST_FAIL,
	REPOSITORY_DETAILS_REQUEST,
  REPOSITORY_DETAILS_SUCCESS,
	REPOSITORY_DETAILS_FAIL
} from '../constants/repositoryConstants';


export const repositoryListReducer = (state = { repositories: [] }, action) => {
	switch (action.type) {
		case REPOSITORY_LIST_REQUEST:
			return { loading: true, repositories: [] }
		case REPOSITORY_LIST_SUCCESS:
			return { loading: false, repositories: action.payload }
		case REPOSITORY_LIST_FAIL:
			return { loading: false, error: action.payload }
		default: 
			return state
	}
}

export const repositoryDetailsReducer = (state = { repository: { } }, action) => {
	switch (action.type) {
		case REPOSITORY_DETAILS_REQUEST:
			return { loading: true, ...state }
		case REPOSITORY_DETAILS_SUCCESS:
			return { loading: false, repository: action.payload }
		case REPOSITORY_DETAILS_FAIL:
			return { loading: false, error: action.payload }
		default: 
			return state
	}
}