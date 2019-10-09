import React,{useContext,useState} from 'react';
import Teambox from '../components/teambox/teambox'
import Preloader from '../components/preloader/preloader';
import {TeamsContext} from '../contexts/TeamsContext';
import Searchbar from '../components/searchbar/searchbar';
import styles from './Home.module.css';
import useDebounce from '../hooks/useDebounce';


function Home(props) {
const {teams,isLoading} = useContext(TeamsContext);
const [searchterm,setSearchTerm] = useState("");
const debounceSearchTerm = useDebounce(searchterm.toLocaleLowerCase(), 300);

function teamboxes()
{
  let teamboxen = [];
  for(let i=0;i < teams.length;i++)
  {
    if(JSON.stringify(teams[i]).toLocaleLowerCase().indexOf(debounceSearchTerm) > -1)
    {
    teamboxen.push(<Teambox key={teams[i].id} team={teams[i]}/>)
    }
  }
  return teamboxen;
}

return (
<div>
<Searchbar setSearchTerm={setSearchTerm} />
<div className={styles.contentbox}>
{(isLoading) ? <Preloader />: teamboxes() }
</div>
</div>);
  }

export default Home;
