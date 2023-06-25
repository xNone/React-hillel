import { useSelector } from 'react-redux';
import { IRepos, TRepos } from '../../types/popular.types';
import { ReactElement, FC } from 'react';
import { RootState } from '../../state/store';

const RepositoryList: FC = (): ReactElement => {
  const repos: TRepos = useSelector(
    (state: RootState): TRepos => state.popular.repos
  );

  return (
    <ul className='popular-list'>
      {repos.map((repo: IRepos, index: number): ReactElement => {
        return (
          <li key={repo.id} className='popular-item'>
            <div className='popular-rank'>#{index + 1}</div>
            <ul className='space-list-items'>
              <li>
                <img
                  className='avatar'
                  src={repo.owner.avatar_url}
                  alt='Avatar'
                />
              </li>
              <li>
                <a href={repo.html_url} target='_blank'>
                  {repo.name}
                </a>
              </li>
              <li>@{repo.owner.login}</li>
              <li>{repo.stargazers_count}</li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default RepositoryList;
