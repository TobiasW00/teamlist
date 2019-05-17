import { adalApiFetch } from '../adalConfig';
import fetch from 'isomorphic-fetch';

class Api
{
  static getteams(callback) {
    adalApiFetch(fetch,`https://graph.microsoft.com/v1.0/me/joinedTeams`,{}).then((response) => response.json())
    .then((responseJSON) => {
         callback(responseJSON);
    });
  }

  static getchannels(teamid,callback) {
    adalApiFetch(fetch,`https://graph.microsoft.com/beta/teams/` + teamid + `/channels`,{}).then((response) => response.json())
    .then((responseJSON) => {
         callback(responseJSON);
    });
  }

}
export default Api;