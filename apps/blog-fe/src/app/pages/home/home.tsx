import { useAuth0 } from '@auth0/auth0-react';
import styles from './home.module.css';
import Layout from '../../layout';

/* eslint-disable-next-line */
export interface HomeProps {}

export function Home(props: HomeProps) {
  const { loginWithRedirect } = useAuth0();

  return (
    <Layout>
      <div className={styles['container']}>
        <h1>Welcome to Home!</h1>
        <h1 onClick={() => loginWithRedirect()}>Login</h1>
      </div>
    </Layout>
  );
}

export default Home;
