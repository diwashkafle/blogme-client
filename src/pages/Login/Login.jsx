import axios from 'axios';
import {React,useContext,useEffect,useState } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import { loginContext } from '../../ContextApi/loginContext';
import {login} from "../../routes/alltheroutes";

const Login = () => {

    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const navigate = useNavigate();

    const {setIsLogin,setUserDetails,isLoading,setIsLoading} = useContext(loginContext);


 const submitHandler = async (e)=>{
    e.preventDefault();
    setIsLoading(true);
    try{
        const result = await axios.post(login,{
            email:email,
            password:password
        },{withCredentials: "include"},
        )
        
        if(result.status===200){
            setIsLoading(false);
            setIsLogin(true);
            navigate("/");
            const {_id,username,email} = result.data;
            localStorage.setItem("userId",_id);
            console.log(result.data);
            setUserDetails({
                username:username,
                email:email
            })
        }
    }catch(err){
        setIsLoading(false);
        alert(err.response.data.message);
    }
 }

  return (
    <div className='flex justify-center mt-[200px]'>
        <form onSubmit={submitHandler} className='h-[260px] w-[320px] bg-yellow-600 py-4 space-y-4 flex flex-col items-center rounded-xl'>
            <div className='flex flex-col'>
                <input onChange={(e)=>{setEmail(e.target.value)}} className='bg-[white] rounded-full w-[280px] p-2 px-6 outline-none' required={true} type="email" placeholder='Email'/>
            </div>
            <div>
                <input onChange={(e)=>{setPassword(e.target.value)}} className='bg-[white] rounded-full w-[280px] p-2 px-6 outline-none' required={true} type="password" placeholder='Password'/>
            </div>
            <div>
            <button type='submit' className='bg-white text-gray-500 hover:text-gray-600 font-semibold rounded-full p-2 w-[100px]' >Submit</button>
            </div>
            <div>
                <h1>Don't have an account ? <span className='text-white'><Link to="/register">Register</Link></span></h1>
            </div>
        </form>
    </div>
  )
}

export default Login