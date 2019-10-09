import React,{useReducer,useEffect,useState} from 'react';
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
    const [isLoading,setIsLoading] = useState(true);

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

function getTeamUrl(id)
{
  return  teamsapi.getTeamUrl(id);
}

useEffect(() => {
    setIsLoading(true);
    teamsapi.getteams().then((data) =>
    { 
        dispatch({type: 'SET_TEAMS',payload:data.value});
        setIsLoading(false);
    });
},[]);


return(
<TeamsContext.Provider value={{teams,getChannelsAndMembers,isLoading,getTeamUrl}}>
    {props.children}
</TeamsContext.Provider>
);
}
