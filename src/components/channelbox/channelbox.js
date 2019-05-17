import React from 'react';
import styles from './channelbox.module.css';
import { pipelineTopicExpression } from '@babel/types';
function Channelbox(props) {

    let listofchannels =[];
for(let i=0; i< props.channels.length;i++)
{
    let channel = props.channels[i];
listofchannels.push(<div>{channel.displayName}</div>)
}


    return <div>
        {listofchannels}
    </div>;
}

export default Channelbox