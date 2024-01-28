import { useAuth0 } from '@auth0/auth0-react';
import { Spinner } from '@nextui-org/react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function Callback() {
  const { handleRedirectCallback } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        await handleRedirectCallback();
        navigate(localStorage.getItem('redirectTo') || '/');
      } catch (e) {
        console.log(e, 'error');
      }
    })();
  }, []);

  return (
    <div className="h-screen w-screen grid place-content-center">
      <Spinner />
    </div>
  );
}

export default Callback;
