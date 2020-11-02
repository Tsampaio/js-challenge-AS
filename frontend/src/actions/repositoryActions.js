import axios from 'axios';
import {
  REPOSITORY_LIST_REQUEST,
	REPOSITORY_LIST_SUCCESS,
	REPOSITORY_LIST_FAIL,
	REPOSITORY_DETAILS_REQUEST,
	REPOSITORY_DETAILS_SUCCESS,
	REPOSITORY_DETAILS_FAIL
} from '../constants/repositoryConstants';

export const repositoryListAction = () => async (dispatch) => {
  try {
    dispatch({
			type: REPOSITORY_LIST_REQUEST
		});

		const { data } = await axios.get("/api/repositories");

		dispatch({
			type: REPOSITORY_LIST_SUCCESS,
			payload: data.repositoryList
		});
  } catch (error) {
		dispatch({
			type: REPOSITORY_LIST_FAIL,
			payload: error.response.data.message
		});
  }
}

export const repositoryDetailsAction = (id) => async (dispatch) => {
	try {
    dispatch({
			type: REPOSITORY_DETAILS_REQUEST
		});

		const { data } = await axios.get(`/api/repository/${id}`);

		dispatch({
			type: REPOSITORY_DETAILS_SUCCESS,
			payload: data.repository
		});
  } catch (error) {
		dispatch({
			type: REPOSITORY_DETAILS_FAIL,
			payload: error.response.data.message
		});
  }
}

export const searchRepositoryAction = (repositoryName) => async (dispatch) => {
	try {
    dispatch({
			type: REPOSITORY_LIST_REQUEST
		});

		const config = {
      headers: {
        'Content-Type': 'application/json'
      }
		}

		const body = JSON.stringify({ repositoryName });

		const { data } = await axios.post("/api/search/repositories", body, config);

		dispatch({
			type: REPOSITORY_LIST_SUCCESS,
			payload: data.repositoryList
		});
  } catch (error) {
		dispatch({
			type: REPOSITORY_LIST_FAIL,
			payload: error.response.data.message
		});
  }
}