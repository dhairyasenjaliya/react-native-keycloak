import React from 'react';
import {View, Text, Button} from 'react-native';
import {useKeycloak, ReactNativeKeycloakProvider} from '@react-keycloak/native';
import styles from './styles';

const Login = () => {
  const {keycloak} = useKeycloak();
  console.log('🚀 ~ hyyyyk', keycloak);

  return (
    <ReactNativeKeycloakProvider
      onTokens={(data) => {
        console.log('🚀 ~ file: Login.tsx ~ line 14 ~ Login ~ data', data);
      }}
      authClient={keycloak}>
      <View style={styles.container}>
        <Text>{`Welcome ${keycloak?.authenticated} - ${keycloak?.token}!`}</Text>
        <Button onPress={() => keycloak?.login()} title="Login" />
        <Button onPress={() => keycloak?.logout()} title="Logout" />
        <Button onPress={() => keycloak?.register()} title="Register" />
      </View>
    </ReactNativeKeycloakProvider>
  );
};

export default Login;
