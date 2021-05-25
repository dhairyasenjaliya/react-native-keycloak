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
      onEvent={(event) => {
        console.log('Event: ', event);
      }}
      onTokens={(token) => {
        console.log('Token: ', token);
      }}
      initOptions={{
        redirectUri: 'myapp://Homepage', //Change Your deeplink URL set as *Valid Redirect URIs from keycloak server
        inAppBrowserOptions: {},
      }}>
      <Login />
    </ReactNativeKeycloakProvider>
  );
}
