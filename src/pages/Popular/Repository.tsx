import { useSelector } from 'react-redux';
import Loader from '../../components/loader/Loader';
import RepositoryList from './RepositoryList';
import { FC, ReactElement } from 'react';
import { RootState } from '../../state/store';
import { TError } from '../../types/popular.types';

const Repository: FC = (): ReactElement => {
  const loading: boolean = useSelector(
    (state: RootState): boolean => state.popular.loading
  );
  const error: TError = useSelector(
    (state: RootState): TError => state.popular.error
  );

  if (error) return <p>Error: {error}</p>;

  const renderRepos = () => {
    return loading ? <Loader /> : <RepositoryList />;
  };

  return <>{renderRepos()}</>;
};

export default Repository;
