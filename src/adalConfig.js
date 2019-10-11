import { AuthenticationContext, adalFetch, withAdalLogin } from 'react-adal';

export const adalConfig = {
  tenant: '1d94911e-1c15-4a5f-9ee9-a512d9921444',
  clientId: '46b15590-7490-4e63-8583-4c8c87329244',
  endpoints: {
    api: 'https://graph.microsoft.com' ,
  },
  cacheLocation: 'localStorage',
  postLogoutRedirectUri: window.location.origin,
  redirectUri: 'https://teamlist.azurewebsites.net'
};

export const authContext = new AuthenticationContext(adalConfig);

export const adalApiFetch = (fetch, url, options) =>
  adalFetch(authContext, adalConfig.endpoints.api, fetch, url, options);

export const withAdalLoginApi = withAdalLogin(authContext, adalConfig.endpoints.api);