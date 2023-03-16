import { combineReducers } from 'redux';
import { TUsersReducersAction } from '../types';

const initialState = {
  loading: false,
  moreLoading: false,
  error: null,
  moreError: null,
  data: [],
  isListEnd: false,
};

const UsersReducers = (state = initialState, action: TUsersReducersAction) => {
  switch (action.type) {
    case 'API_REQUEST':
      if (action.payload.page === 1) {
        return { ...state, loading: true };
      } else {
        return { ...state, moreLoading: true };
      }

    case 'API_SUCCESS':
      return {
        ...state,
        data: [...state.data, ...action.data],
        error: '',
        loading: false,
        moreLoading: false,
      };

    case 'API_FAILURE':
      return {
        ...state,
        error: action.error,
        loading: false,
        moreLoading: false,
      };

    case 'API_LIST_END':
      return {
        ...state,
        isListEnd: true,
        loading: false,
        moreLoading: false,
      };

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  users: UsersReducers,
});
