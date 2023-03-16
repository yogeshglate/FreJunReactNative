import axios from 'axios';
import Config from 'react-native-config';
import { TGetRandomUsersRequest } from '../types';

export const getRandomUsersRequest = async ({
  page,
  results = 10,
}: TGetRandomUsersRequest) => {
  return await axios.get(Config.API_ENDPOINT ?? '', {
    params: {
      page,
      results,
      inc: 'name,picture,login',
    },
  });
};
