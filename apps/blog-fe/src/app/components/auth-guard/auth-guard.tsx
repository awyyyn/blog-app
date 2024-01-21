import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

export function AuthGuard() {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      localStorage.setItem('redirectTo', location.pathname);
      loginWithRedirect();
    }
  }, []);

  if (isLoading) return <h1>Loading...</h1>;

  return <Outlet />;
}

export default AuthGuard;
