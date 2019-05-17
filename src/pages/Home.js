import React, { Component } from 'react';
import {getteams,getchannels} from '../actions/teams';
import {connect} from 'react-redux';
import Teambox from '../components/teambox/teambox'
import Preloader from '../components/preloader/preloader';
class Home extends Component {
  constructor(props) {
    super(props);
    this.props.getteams();
}

  render()
   {
     var self = this;
     console.log(this.props.teams);
if(this.props.teams.length ===0)
return <Preloader />;

  let teamboxen = []
  for(let i=0;i < this.props.teams.length;i++)
  {
    let channels = this.props.channels[this.props.teams[i].id];
    if(channels===undefined){channels=[]};
    teamboxen.push(<div key={i} onClick={()=>this.props.getchannels(this.props.teams[i].id)}><Teambox channels={channels}  team={this.props.teams[i]}/></div>)
  }

    return (
<div>
{teamboxen}
</div>
    );
  }
}


function mapStateToProps(state) {
  return { teams: state.teams,channels:state.channels};
}
export default connect(mapStateToProps,{getteams,getchannels})(Home);
