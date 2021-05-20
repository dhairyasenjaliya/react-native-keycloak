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
