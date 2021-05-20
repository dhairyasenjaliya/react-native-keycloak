import * as React from 'react';

import {RNKeycloak, ReactNativeKeycloakProvider} from '@react-keycloak/native';
import Login from './Login';

const keycloak = new RNKeycloak({
  url: 'http://localhost:8080/auth/',
  realm: 'master',
  clientId: 'master-realm',
});

export default function App() {
  return (
    <ReactNativeKeycloakProvider
      authClient={keycloak}
      initOptions={{
        redirectUri: 'myapp://Homepage', //Change Your deeplink URL
        inAppBrowserOptions: {
          //Can be pass to extra props to package
          // ephemeralWebSession: true,
        },
      }}>
      <Login />
    </ReactNativeKeycloakProvider>
  );
}
