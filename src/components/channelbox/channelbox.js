import React from 'react';
import styles from './channelbox.module.css';
import { pipelineTopicExpression } from '@babel/types';

function Channelbox(props) {

    if(props.channels === undefined)
    return null;

const showChannel = (webUrl) =>
{
    window.open(webUrl);
}


    let listofchannels =[];
for(let i=0; i< props.channels.length;i++)
{
    const channel = props.channels[i];
    // <img src="/pics/channel.jpg" className={styles.icon} alt={channel.displayName}/>
listofchannels.push(<div onClick={()=> showChannel(channel.webUrl)} key={channel.id}>{channel.displayName}</div>)
}


    return <div className={styles.channelboxes}>
        {listofchannels}
    </div>;
}

export default Channelbox