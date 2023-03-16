import { TUsersRequestAction } from '../types';

export const getRandomUsersRequest = (params: TUsersRequestAction) => ({
  type: 'API_REQUEST',
  payload: {
    page: params.page,
  },
});
