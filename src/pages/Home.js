import React,{useContext} from 'react';
import Teambox from '../components/teambox/teambox'
import Preloader from '../components/preloader/preloader';
import {TeamsContext} from '../contexts/TeamsContext';
import Searchbar from '../components/searchbar/searchbar';
import styles from './Home.module.css';
function Home(props) {
const {teams} = useContext(TeamsContext);


if(teams.length ===0)
  return <Preloader />;

  let teamboxen = [];
  for(let i=0;i < teams.length;i++)
  {
    teamboxen.push(<Teambox key={teams[i].id} team={teams[i]}/>)
  }

return (
<div>
<Searchbar />
<div className={styles.contentbox}>
 {teamboxen}
</div>
</div>
    );
  }

export default Home;
