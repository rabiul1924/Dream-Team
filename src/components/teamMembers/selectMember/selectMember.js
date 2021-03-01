import React from 'react';

const selectMember = (props) => {
    const selectMember = props.selectMember;
    const totalSalary = selectMember.reduce( (salary, teamMembers) => salary + parseInt(teamMembers.salary), 0);
    // const SelectPlayer = selectMember.reduce( (name, teamMembers, ) => name + teamMembers.name, "--")
    let SelectPlayer = [" "];
    for (let i = 0; i < selectMember.length; i++) {
        const teamMembers = selectMember[i];
        SelectPlayer= SelectPlayer + teamMembers.name;
    }

    return (
        <div>
             <h2>this is selectMember {selectMember.length}</h2>
            <p>total salary: {totalSalary}</p>
            <p>Select player : {SelectPlayer}</p>
        </div>
    );
};

export default selectMember;