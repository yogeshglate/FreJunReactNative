import { rootReducer } from '../store/reducers';

export type TRootState = ReturnType<typeof rootReducer>;

export type { IIconProps } from './Icon';
export type { ILoaderProps } from './Loader';
export type { IProductCardProps, IProducts } from './ProductCard';
export type {
  ILogin,
  IName,
  IPicture,
  IRandomUsersProps,
  IUsers,
  IUsersState,
  TGetRandomUsersRequest,
  TGetRandomUsersSaga,
  TUsersReducersAction,
  TUsersRequestAction,
} from './RandomUsers';
export type { ISearchInputProps } from './SearchInput';
export type { IUserCardProps } from './UserCard';
