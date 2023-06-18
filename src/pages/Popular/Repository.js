import { useSelector } from 'react-redux';
import Loader from '../../components/loader/Loader';
import RepositoryList from './RepositoryList';

const Repository = () => {
  const loading = useSelector((state) => state.popularReducer.loading);
  const error = useSelector((state) => state.popularReducer.error);

  if (error) return <p>Error: {error}</p>;

  const renderRepos = () => {
    return loading ? <Loader /> : <RepositoryList/>;
  };

  return <>{renderRepos()}</>;
};

export default Repository;
