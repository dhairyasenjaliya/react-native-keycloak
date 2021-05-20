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
        // you can change logic here after login
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
                keycloak?.login().then((data) => {
                  console.log('🚀 ~loginnnn ~ ', data);
                });
              }}
              title="Login"
            />
            <Button
              onPress={() => {
                keycloak?.register().then((data) => {
                  console.log('hey', data);
                });
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
