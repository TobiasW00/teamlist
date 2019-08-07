import React,{useReducer,useEffect} from 'react';
import teamsapi from '../api/api';

export const TeamsContext = React.createContext([]);


function reducer(state, action) {
    switch (action.type) {
      case 'SET_TEAMS':
            return action.payload;
      case 'ADD_CHANNEL':
              return state.map((team)=>
              {
               return (team.id===action.payload.id) ?  {...team,channels:action.payload.value} : team
              }            
              );
      case 'ADD_MEMBERS':
                    return state.map((team)=>
                    {
                     return (team.id===action.payload.id) ?  {...team,members:action.payload.value} : team
                    }            
                    );
        default:
        throw new Error();
    }
}




export function TeamsContextWrapper(props) 
{
    const [teams, dispatch] = useReducer(reducer,[])


function getChannelsAndMembers(teamid)
{
  teamsapi.getchannels(teamid).then((data) =>
  { 
      dispatch({type: 'ADD_CHANNEL', payload:{id:teamid,value:data.value}});
  });

  teamsapi.getmembers(teamid).then((data) =>
  { 
     dispatch({type: 'ADD_MEMBERS', payload:{id:teamid,value:data.value}});
  });
}

useEffect(() => {
    teamsapi.getteams().then((data) =>
    { 
        dispatch({type: 'SET_TEAMS',payload:data.value});
    });
},[]);


return(
<TeamsContext.Provider value={{teams,getChannelsAndMembers}}>
    {props.children}
</TeamsContext.Provider>
);
}
