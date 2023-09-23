import React,{useState,useEffect} from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import axios from 'axios'


function Users() {

    const navigate=useNavigate()

    const [users,setUsers] =useState([])

useEffect(()=>{
    fetchUsers()
},[])

function fetchUsers(){
    axios.get('http://localhost:3030/users')
    .then(res => setUsers(res.data.reverse()))
}

function deleteUser(id){
    axios.delete(`http://localhost:3030/users/${id}`)
    .then(fetchUsers())

}

function editUser(id){
 navigate(`/add/${id}`)
}
 

  return (
    <div className="max-w-xl mx-auto mt-40">

{users.map(user =>{

    return(
      <div key={user.id} className="p-3 flex items-center justify-between border-t cursor-pointer hover:bg-gray-200">
 <div className="flex items-center">
     <img className="rounded-full h-10 w-10" src="https://loremflickr.com/g/600/600/girl" />
     <div className="ml-2 flex flex-col">
         <div className="leading-snug text-sm text-gray-900 font-bold">{user.name}</div>
         <div className="leading-snug text-xs text-gray-600">{user.email}</div>
     </div>
 </div>
 <div>
 <button  onClick={()=>editUser(user.id)} className="h-8 px-3 text-md font-bold text-blue-400 border border-blue-400 rounded-full hover:bg-blue-100 mx-2">Edit</button>
 <button onClick={()=>deleteUser(user.id)} className="h-8 px-3 text-md font-bold text-red-600 border border-red-700 rounded-full hover:bg-red-100 mx-2">Delete</button>  
 </div>
</div>   
    )


}
)}

    </div>
  )
}

export default Users
 

 