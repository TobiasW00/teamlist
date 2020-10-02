import { AuthenticationContext, adalFetch, withAdalLogin } from 'react-adal';

export const adalConfig = {
  tenant: '26dfeab2-7b86-4967-b7fe-656976fa09de',
  clientId: '46b15590-7490-4e63-8583-4c8c87329244',
  endpoints: {
    api: 'https://graph.microsoft.com' ,
  },
  cacheLocation: 'localStorage',
  postLogoutRedirectUri: window.location.origin,
  redirectUri: 'http://localhost:3000'
};

export const authContext = new AuthenticationContext(adalConfig);

export const adalApiFetch = (fetch, url, options) =>
  adalFetch(authContext, adalConfig.endpoints.api, fetch, url, options);

export const withAdalLoginApi = withAdalLogin(authContext, adalConfig.endpoints.api);