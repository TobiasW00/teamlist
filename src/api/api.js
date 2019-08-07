import { adalApiFetch } from '../adalConfig';
import fetch from 'isomorphic-fetch';


class TeamsApi {	   

 static getteams(){
 return  adalApiFetch(fetch,`https://graph.microsoft.com/v1.0/me/joinedTeams`,{}).then(response => response.json());
}

static getchannels(teamid)
{
  return  adalApiFetch(fetch,`https://graph.microsoft.com/beta/teams/` + teamid + `/channels`,{}).then(response => response.json());
}

static getmembers(teamid)
{
  return  adalApiFetch(fetch,`https://graph.microsoft.com/v1.0/groups/` + teamid + `/members`,{}).then(response => response.json());
}
// https://teams.microsoft.com/_#/teamDashboard/REFRA-Net/19:b81c2dfffc894053bfa17acdf8dcee67@thread.skype/td.members

//GET https://{instance}/fabrikam/_apis/projects/eb6e4656-77fc-42a1-9181-4c6d8e9da5d1/teams/564e8204-a90b-4432-883b-d4363c6125ca/members?api-version=5.0


}
export default TeamsApi;		