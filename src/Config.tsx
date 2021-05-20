import {RNKeycloak} from '@react-keycloak/native';

const keycloak = new RNKeycloak({
  url: 'http://localhost:8080/auth/', //Change to your issuer URL
  realm: 'master', //Change to your realm name
  clientId: 'master-realm', //Change to your clientId name
});

export default keycloak;
