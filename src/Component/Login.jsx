import React,{useState,useContext} from 'react'
import UserContext from '../context/userContext'
const Login = () => {
    const[username,setUserName] = useState('')
    const[password,setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit =(e)=>{
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div>
        <h2>Login</h2>
        <input type='text'
        value={username}
        placeholder='Username'
        onChange={(e)=>setUserName(e.target.value)}/>
        <br></br>
        <input
        type='text'
        value={password}
        placeholder='Password'
        onChange={(e)=>setPassword(e.target.value)}/>
        <br></br>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login