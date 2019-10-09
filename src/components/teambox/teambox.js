import React,{useContext,useEffect} from 'react';
import styles from './teambox.module.css';
import ChannelBox from '../channelbox/channelbox';
import MemberBox from '../memberbox/memberbox';
import {TeamsContext} from '../../contexts/TeamsContext';
import useHover from '../../hooks/useHover';


function Teambox({team}) {
    const {getChannelsAndMembers,getTeamUrl} = useContext(TeamsContext);
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
        getTeamUrl(team.id).then(url =>
            {
               window.open(url);
            });
    }

    return <div ref={hoverRef} onClick={openTeam} className={styles.teamboxboxdiv}>
    <div className={styles.header}><h2>{team.displayName}</h2></div>
    <div className={styles.description}>{team.description}</div>
    <div className={styles.bottomboxescontainer}>
    <ChannelBox channels={team.channels} />
    <MemberBox members={team.members} />
    </div>
     </div>;
}

export default Teambox