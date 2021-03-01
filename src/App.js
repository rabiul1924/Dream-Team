import React, { useState, useEffect,  } from 'react';
import './App.css';
import TeamMembers from './components/teamMembers/teamMembers';
import  SelectMember  from './components/teamMembers/selectMember/selectMember';



function App() {
  const [teamMembers, setteamMembers] = useState([]);
  const [selectMember, setselectmember] = useState([]);

  useEffect(()=>{
    fetch('https://api.mocki.io/v1/85934cca')
    .then(res => res.json())
    .then(data=>{
      setteamMembers(data);
     } )
    .catch(error => console.log(error))
  }, [])


  const handleAddTeamMembers = (teamMembers) => { 
   const newSelectMember = [...selectMember, teamMembers];
   setselectmember(newSelectMember);
  }

  return (
    <div className="App">
      <h1>TeamMembers loaded: {teamMembers.length}</h1>
      <h4>TeamMembers added: {selectMember.length}</h4>
      <SelectMember selectMember={selectMember}></SelectMember>
      <ul>
        {
          teamMembers.map(teamMembers => <TeamMembers teamMembers={teamMembers}  handleAddTeamMembers={handleAddTeamMembers}></TeamMembers>)
         
        }
      </ul>
   
    </div>
  );
}

export default App;
