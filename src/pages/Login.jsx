import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
    const navigate = useNavigate()
  const [eusername, setEusername] = useState('');
  const [epassword, setEpassword] = useState('');
  const [ruser,setRuser] = useState (true)
  const user=props.user


  function handleUInput(evt) {
    setEusername(evt.target.value);
  }

  function handlePInput(evt) {
    setEpassword(evt.target.value);
  }

  function checkUser() {
    var userfound=false

    user.forEach(function(item) {
      if (item.username === eusername && item.password === epassword) {
         
        
        console.log("login successfully");
        userfound=true
        navigate("/Landing",{state:{user:eusername}})
      } 
    });
    if(userfound===false)
    {
        console.log("login failed");
        setRuser(false)
        
    }
  }

  return (
    <div className="bg-black p-10">
      <div className="bg-[#EFEFEF] p-10 border rounded-md">
        <h1 className="text-2xl font-medium">Hey Hi</h1>
       {ruser? <p>I help you manage your activities after you login :)</p> : <p className="text-red-500">please signup before you login</p>}
        <div className="flex flex-col gap-2 my-2">
          <input
            type="text"
            className="w-52 border border-black p-1 bg-transparent rounded-md"
            placeholder='User Name'
            onChange={handleUInput}
          />
          <input
            type="text"
            className="w-52 border border-black p-1 bg-transparent rounded-md"
            placeholder='Password'
            onChange={handlePInput}
          />
          <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={checkUser}>
            Login
          </button>
          <p>Don't have an account? <Link to={"/Signup"}>Signup</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
