import React,{useState,useEffect,useRef} from 'react'
import {useParams,useNavigate} from 'react-router-dom'
import axios from 'axios'

function Add() {

    const navigate=useNavigate()

    const {id} = useParams();

    const [user,setUser] =useState({})

    const nameRef=useRef()
    const emailRef=useRef()


    useEffect(()=>{
        axios.get(`http://localhost:3030/users/${id}`)
        .then(res => setUser(res.data))
    },[])

    function addUser(){
        const user={
            name:nameRef.current.value,
            email:emailRef.current.value
        }
        axios.post('http://localhost:3030/users',user)
        .then(navigate('/users'))
    }

    function editUser(){

        const user={
            name:nameRef.current.value,
            email:emailRef.current.value
        }
        axios.put(`http://localhost:3030/users/${id}`,user)
        .then(navigate('/users'))

    }


    

  return (
    <div class="min-h-screen flex items-center">
    <div class="w-full">
        <h2 class="text-center text-blue-400 font-bold text-2xl uppercase mt-20 mb-10">{id ? 'Edit User' : 'Add User' }</h2>
        <div class="bg-white p-10 rounded-lg shadow-xl md:w-3/4 mx-auto lg:w-1/2">
            <form action="">
                <div class="mb-5">
                    <label for="name" class="block mb-2 font-bold text-gray-600">Name</label>
                    <input type="text" id="name" name="name" ref={nameRef} defaultValue={user.name} placeholder="Put in your name." class="border border-gray-300 shadow p-3 w-full rounded mb-" />
                </div>

                <div class="mb-5">
                    <label for="twitter" class="block mb-2 font-bold text-gray-600">Email</label>
                    <input type="text" id="twitter" name="email" ref={emailRef} defaultValue={user.email} placeholder="Put in your Email." class="border border-gray-300 shadow p-3 w-full rounded mb-" />
                    {/* <p class="text-sm text-red-400 mt-2">Email username is required</p> */}
                </div>
{id ? 
<button onClick={editUser} class="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">Edit</button>
:
<button onClick={addUser} class="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">Add</button>

}
                
            </form>
        </div>
    </div>
</div>
  )
}

export default Add

