import Loader from "./Loader";
import RepositoryList from "./RepositoryList";

const Repository = ({ repos, loading }) => {
  const renderRepos = () => {
    return loading ? <Loader /> : <RepositoryList repos={repos} />;
  };

  return <>{renderRepos()}</>;
};

export default Repository;
