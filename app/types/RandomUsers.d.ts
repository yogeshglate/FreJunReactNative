import { TUsersModel } from '../store/reducers';

export interface IRandomUsersProps {
  usersModel: TUsersModel;
  dispatch: any;
}

export interface IUsers {
  name: IName;
  login: ILogin;
  picture: IPicture;
}

export interface ILogin {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

export interface IName {
  title: string;
  first: string;
  last: string;
}

export interface IPicture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface IUsersState {
  loading: boolean;
  moreLoading: boolean;
  error: any;
  moreError: any;
  data: IUsers;
  isListEnd: boolean;
}

export type TUsersRequestAction = {
  page: number;
  pageSize?: number;
};

export type TUsersReducersAction = {
  type: string;
  payload: { page: number };
  data: IUsers[];
  error: any;
};

export type TGetRandomUsersSaga = {
  type: string;
  payload: { page: number; results: number };
};

export type TGetRandomUsersRequest = {
  page: number;
  results: number;
};
