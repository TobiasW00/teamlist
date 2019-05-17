import {SET_TEAMS,SET_CHANNELS} from './actiontypes';
import Api from '../api/api'
export function getteams() {
  return (dispatch)=>
  {
    Api.getteams((data)=>{
      dispatch({type:SET_TEAMS, payload:data.value});         
    });     
  };
}
export function getchannels(teamid) {
  return (dispatch)=>
  {
    Api.getchannels(teamid,(data)=>{
      dispatch({type:SET_CHANNELS, payload:{value:data.value,teamid:teamid}});         
    });     
  };
}

