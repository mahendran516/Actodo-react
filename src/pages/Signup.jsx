import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Signup = (props) => {
  const navigate=useNavigate()
  const user=props.user
  const setUser=props.setUser

  const [eusername, setEusername] = useState('');
  const [epassword, setEpassword] = useState('');
  function handleUInput(evt) {
    setEusername(evt.target.value);
  }

  function handlePInput(evt) {
    setEpassword(evt.target.value);
  }
  function addUser()
  {
    setUser([...user,{username:eusername,password:epassword}])
    navigate("/")
  }
  return (
    <div className="bg-black p-10">
       <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className="text-2xl font-medium">Hey Hi</h1>
        <p> Sign Up here :)</p>
        <div className="flex flex-col gap-2 my-2">
            <input type="text" 
            className="w-52 border border-black p-1 bg-transparent rounded-md"
            placeholder='User Name'  onChange={handleUInput}/>

<input type="text" 
            className="w-52 border border-black p-1 bg-transparent rounded-md"
            placeholder='Password' onChange={handlePInput}/>

<input type="text" 
            className="w-52 border border-black p-1 bg-transparent rounded-md"
            placeholder='Confirm Password' />

            <button className="bg-[#FCA201] w-24 p-1 rounded-md"onClick={addUser}>Signup</button>
            <p>Already have an account? <Link to={"/"}>Login</Link></p>
        </div>
       </div>
    </div>
  )
}

export default Signup