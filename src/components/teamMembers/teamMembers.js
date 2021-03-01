import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const teamMembers = (props) => {
 const{image, name, salary} = props.teamMembers;
 const teamMembersStyle = {border: '1px solid red', margin:'10px', padding:'10px', backgroundColor:'gray'}
 const handleAddTeamMembers = props.handleAddTeamMembers;
    return (
        <div style={teamMembersStyle}>
            <img style={{height:'100px'}} src={image} alt=""/>
           <h4> {name}</h4>
           <p>salary: {salary}</p>
           <button  onClick={() => handleAddTeamMembers(props.teamMembers)}><FontAwesomeIcon icon={faUserPlus} />Add TeamMembers  </button>
        </div>
    );
};

export default teamMembers;