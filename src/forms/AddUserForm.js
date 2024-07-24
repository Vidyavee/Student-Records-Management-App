import React, { useState } from 'react'
import '../tables/student.css'; 

const AddUserForm = (props) => {
    const initialFormState = {id:null, name:'', age:'', marks: '', rank:''}
    const[user,setUser]= useState(initialFormState);

    const handleInputChange =(event)=>{
       const {name, value} = event.target

       setUser({...user, [name]:value})
    };

    const handleSubmit=(event) =>{
        event.preventDefault();
        if(!user.name || !user.rank || !user.age || !user.marks) return;
        props.addUser(user);
        setUser(initialFormState);
    };

  return (
    <div className='container'> 
    <h3>Add New Student</h3><br />
    <div className='formcontainer'>
    <form onSubmit={handleSubmit}>
        <div className='row'>
        <label className='studname'>Name : 
        <input type='text' placeholder='Enter Name' onChange={handleInputChange} name='name' value={user.name}/>
        </label>
        </div>
        <div className='row'>
        <label className='studage'>Age :
        <input type='number' placeholder='Enter Age' name='age' 
        onChange={handleInputChange}  value={user.age}/>
        </label>
        <label className='studmarks'>Total Marks : 
        <input type='number' placeholder='Enter Total marks' name='marks' 
         onChange={handleInputChange}
         value={user.marks}/>
        </label>
        </div>
        <div className='row'>
        <label className='rank'>Rank :
        <input type='number' placeholder='Enter Rank' name='rank' 
        onChange={handleInputChange}
        value={user.rank} />
        </label>
        <br />
        </div>
        <button type='submit'>Add Student</button>
        <label className='search'>Search Student :
        <input type='text' placeholder='Enter Student Name' /></label>
   </form></div>
   </div>
   );
}
export default AddUserForm;


    