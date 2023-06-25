import Tabs from '../../components/navigation/Tabs';
import Repository from './Repository';
import { FC, ReactElement } from 'react';

const Popular: FC = (): ReactElement => (
  <>
    <Tabs />
    <Repository />
  </>
);

export default Popular;
