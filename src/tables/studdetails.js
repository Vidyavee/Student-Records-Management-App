import React from 'react'

export const Studdetails = (props) => {
  return (
    <>
    <div className='table'>
   <h2>STUDENT DETAILS</h2>
   <table>
    <thead>
        <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Total Marks</th>
        <th>Rank</th>
        <th>Change</th>
        </tr>
        </thead>
        <tbody>
            {props.user.length>0 ? (
                props.user.map((userd)=>(
                    <tr key={userd.id}>
                    <td>{userd.id}</td>
                    <td>{userd.name}</td>
                    <td>{userd.age}</td>
                    <td>{userd.marks}</td>
                    <td>{userd.rank}</td>
                    <td>
                    <button onClick={()=>props.editRow(userd)} className='editbtn'>Edit</button>
                    <button onClick={()=>props.deleteUser(userd.id)} className='delbtn'>Delete</button>
                    </td> 
                    </tr>
                ))
            ):(
                <tr>
                    <td colSpan={6}>No users</td>
                </tr>
            )}
            
        
       
    </tbody>  
   </table>
   </div>
    </>
  )
}

