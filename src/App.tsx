import * as React from 'react';
import {ReactNativeKeycloakProvider} from '@react-keycloak/native';
import Login from './Login';

// Edit Your Configuration here in Config file
import keycloak from './Config';

//For hiding warning only
console.warn = function () {};
console.disableYellowBox = true;

export default function App() {
  return (
    <ReactNativeKeycloakProvider
      authClient={keycloak}
      initOptions={{
        redirectUri: 'myapp://Homepage', //Change Your deeplink URL set as *Valid Redirect URIs from keycloak server
        inAppBrowserOptions: {
          // ephemeralWebSession: true,
          //Can be pass to extra props to package this allows to login flow
          // 1. (ephemeralWebSession:True) When User kills the app it will store session securely and will prompt again for login without credential
          // 2. (ephemeralWebSession:False) When User kills the app it will not store session and need pass credential again
        },
      }}>
      <Login />
    </ReactNativeKeycloakProvider>
  );
}
