import React from 'react';
import styles from './memberbox.module.css';
import { pipelineTopicExpression } from '@babel/types';

function Memberbox(props) {

    if(props.members === undefined)
    return null;

    let listofmembers =[];
    for(let i=0; i< props.members.length;i++)
    {
        const member = props.members[i];
        // <img src="/pics/user.png" className={styles.icon} alt={member.displayName}/>
        listofmembers.push(<div key={member.id}>{member.displayName}</div>)
    }

    return <div className={styles.memberboxes}>
        {listofmembers}
    </div>;
}

export default Memberbox