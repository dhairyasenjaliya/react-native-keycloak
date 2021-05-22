import {RNKeycloak} from '@react-keycloak/native';

const keycloak = new RNKeycloak({
  url: 'https://testidm.breazy-health.cloud/auth/', //Change to your issuer URL
  realm: 'react-test', //Change to your realm name
  clientId: 'doctor', //Change to your clientId name
}); 

export default keycloak;


// https://testidm.breazy-health.cloud/auth/admin/react-test/console