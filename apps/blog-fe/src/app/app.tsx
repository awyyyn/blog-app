// eslint-disable-next-line @typescript-eslint/no-unused-vars

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import Home from './pages/home/home';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '../../utils/graphql';
import { NextUIProvider } from '@nextui-org/react';
import { Auth0Provider } from '@auth0/auth0-react';
import Callback from './pages/callback/callback';
import Post from './pages/post/post';
import Layout from './layout';

export function App() {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN ?? '';
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID ?? '';

  const router = createBrowserRouter(
    createRoutesFromElements([
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />,
        <Route path="/post/:id" element={<Post />} />,
        <Route path="/callback" element={<Callback />} />,
      </Route>,
      <Route path="/*" element={<h1>404</h1>} />,
    ])
  );

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: `${window.location.origin}/callback`,
        audience: `https://${domain}/api/v2/`,
        scope: 'openid profile email username',
      }}
      cacheLocation="localstorage"
    >
      <ApolloProvider client={apolloClient}>
        <NextUIProvider>
          <RouterProvider router={router} />
        </NextUIProvider>
      </ApolloProvider>
    </Auth0Provider>
  );
}

export default App;
