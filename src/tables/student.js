import React, { useState } from 'react'
import { Studdetails } from './studdetails';
import  AddUserForm  from '../forms/AddUserForm';
import EditUserForm from '../forms/EditUserForm';


function Student(){
    const userdata =[
        {id: 1, name: 'logesh', age: 15, marks : 98, rank : 1 },
        {id: 2, name: 'Vidya', age: 15, marks : 95, rank : 2},
        {id: 3, name: 'Yogesh', age: 15, marks : 90, rank : 3 },
    ];

const [users, setUsers] = useState (userdata);
const [editing, setEditing]=useState(false)

const addUser =(user)=>{
  user.id = users.length + 1;
  setUsers([...users, user]);
};

const deleteUser = (id)=>{
  setUsers(users.filter((user)=>user.id!==id))
}
const initialFormState = {id:null, name:'', age:'', marks: '', rank:''}
const [currentUser, setCurrentUser]= useState(initialFormState);

const editRow =(user)=>{
  setEditing(true);
  setCurrentUser({id:user.id, name: user.name, age: user.age, marks: user.marks, rank: user.rank });
}

const updateUser =(id, updatedUser)=>{
  setEditing(false)
  setUsers(users.map((user)=>(user.id===id ? updatedUser : user)))
}
return (
    <>
    {editing?(<div>
        <EditUserForm 
        setEditing={setEditing}
        currentUser ={currentUser}
        updateUser ={updateUser}
        />
    </div>): (<div>
        <AddUserForm addUser={addUser}/>
    </div>)}
   
    <Studdetails editRow={editRow} deleteUser={deleteUser} user={users}/>
    </>
  );
}

export default Student;

