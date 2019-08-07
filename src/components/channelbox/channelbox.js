import React from 'react';
import styles from './channelbox.module.css';
import { pipelineTopicExpression } from '@babel/types';

function Channelbox(props) {

    if(props.channels === undefined)
    return null;

    let listofchannels =[];
for(let i=0; i< props.channels.length;i++)
{
    const channel = props.channels[i];
listofchannels.push(<div key={channel.id}><img src="/pics/channel.jpg" className={styles.icon} alt={channel.displayName}/>{channel.displayName}</div>)
}


    return <div className={styles.channelboxes}>
        {listofchannels}
    </div>;
}

export default Channelbox