import React from 'react';
import styles from './teambox.module.css';
import ChannelBox from '../channelbox/channelbox';
function Teambox(props) {
    return <div className={styles.teamboxboxdiv}>
    <div><h1>{props.team.displayName}</h1></div>
    <div>{props.team.description}</div>
    <div><ChannelBox channels={props.channels} /></div>
    </div>;
}

export default Teambox