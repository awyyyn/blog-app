// import styles from './header.module.css';

/* eslint-disable-next-line */
import { useAuth0 } from '@auth0/auth0-react';
import { Button, NavbarContent } from '@nextui-org/react';

export function SignInButton() {
  const { loginWithRedirect } = useAuth0();

  const handleSignIn = () => loginWithRedirect();

  return (
    <NavbarContent as="div" justify="end">
      <Button variant="shadow" onClick={handleSignIn}>
        <p>Sign in</p>
      </Button>
    </NavbarContent>
  );
}

export default SignInButton;
