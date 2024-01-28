import { useAuth0 } from '@auth0/auth0-react';
import { Spinner } from '@nextui-org/react';
import { PropsWithChildren, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { userStore } from '../../store/userStore';

export function AuthGuard({ children }: PropsWithChildren) {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  const location = useLocation();
  const { user } = userStore();

  useEffect(() => {
    if (!isAuthenticated) {
      localStorage.setItem('redirectTo', location.pathname);
      loginWithRedirect();
    }
  }, [user]);

  if (isLoading)
    return (
      <div className="w-screen h-screen grid place-content-center">
        <Spinner />
      </div>
    );

  return children;
}

export default AuthGuard;
