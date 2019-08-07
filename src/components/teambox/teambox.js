import React,{useContext,useEffect} from 'react';
import styles from './teambox.module.css';
import ChannelBox from '../channelbox/channelbox';
import MemberBox from '../memberbox/memberbox';
import {TeamsContext} from '../../contexts/TeamsContext';
import useHover from '../../hooks/useHover';


function Teambox({team}) {
    const {getChannelsAndMembers} = useContext(TeamsContext);
    const [hoverRef, isHovered] = useHover();

    useEffect(()=>
    {
        if(isHovered && team.channels===undefined && team.members===undefined)
        {
            getChannelsAndMembers(team.id)
        }
    },[isHovered]);
    
    const openTeam = function openteam()
    {
       const url = 'https://teams.microsoft.com/_#/teamDashboard/' +team.displayName + '/' + team.id;
       window.open(url);
    }

    return <div ref={hoverRef} onClick={openTeam} className={styles.teamboxboxdiv}>
    <div className={styles.header}><h1>{team.displayName}</h1></div>
    <div>{team.description}</div>
    <div><ChannelBox channels={team.channels} /></div>
    <div><MemberBox members={team.members} /></div>
     </div>;
}

export default Teambox