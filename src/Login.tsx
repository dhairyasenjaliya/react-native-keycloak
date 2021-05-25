import React from 'react';
import {View, Text, Button} from 'react-native';
import {useKeycloak, ReactNativeKeycloakProvider} from '@react-keycloak/native';
import styles from './styles';

const Login = () => {
  const {keycloak} = useKeycloak(); //Stores data in mobile without redux
  const {tokenParsed} = keycloak;
  let firstName = tokenParsed?.given_name;
  let lastName = tokenParsed?.family_name;

  return (
    <ReactNativeKeycloakProvider
      onTokens={(data) => {
        console.log('🚀 ~ ', data);
      }}
      authClient={keycloak}>
      <View style={styles.container}>
        {keycloak?.authenticated ? (
          <View>
            <Text>{`Welcome ${firstName + ' ' + lastName}  !`}</Text>
            <Button
              onPress={() => {
                keycloak?.logout();
              }}
              title="Logout"
            />
          </View>
        ) : (
          <View style={{alignItems: 'center'}}>
            <Text style={{marginVertical: 20}}>{`Welcome !`}</Text>
            <Button
              style={{marginVertical: 30}}
              onPress={() => {
                keycloak?.login();
                // keycloak?.login({prompt: 'login'});
                //Can be pass to extra props to package this allows to login flow
                // 1. (prompt:True) When User kills the app it will store session securely and will prompt again for login without credential
                // 2. (prompt:False) When User kills the app it will not store session and need pass credential again
              }}
              title="Login"
            />
            <View style={{marginVertical: 10}} />
            <Button
              onPress={() => {
                keycloak?.register();
              }}
              title="Register"
            />
          </View>
        )}
      </View>
    </ReactNativeKeycloakProvider>
  );
};

export default Login;
