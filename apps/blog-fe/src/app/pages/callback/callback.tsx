import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function Callback() {
  const { handleRedirectCallback } = useAuth0();
  const navigate = useNavigate();
  const shouldRedirect = true;
  useEffect(() => {
    if (shouldRedirect) {
      (async () => {
        try {
          await handleRedirectCallback();
          navigate(localStorage.getItem('redirectTo') || '/');
        } catch (e) {
          console.log(e, 'error');
        }
      })();
    }
  }, [navigate]);

  return (
    <div>
      <h1>Loading...</h1>
    </div>
  );
}

export default Callback;
