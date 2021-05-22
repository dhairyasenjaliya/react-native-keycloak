1. Check Issuer URL from database and add to Config.tsx as parameter 'url'

2. Check realm name and add to Config.tsx as parameter 'realm'

3. Create client (keycloak server) and take that Client Id and pass as 'clientId' in Config.tsx

4. Change *Valid Redirect URIs in Clients->Setting and pass this redirect url in App.tsx  as redirectUri  



