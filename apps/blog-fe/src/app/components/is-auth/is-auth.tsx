import styles from './is-auth.module.css';

/* eslint-disable-next-line */
export interface IsAuthProps {}

export function IsAuth(props: IsAuthProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to IsAuth!</h1>
    </div>
  );
}

export default IsAuth;
