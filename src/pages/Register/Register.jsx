import React from 'react';
import {useContext } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import {register} from "../../routes/alltheroutes";
import { loginContext } from '../../ContextApi/loginContext';

const Register = () => {

    const navigate = useNavigate();
    
    const {userDetails, setUserDetails,isLoading,setIsLoading} = useContext(loginContext);


    const submitHandler = async (e)=>{
        e.preventDefault();
        const {username,email,password,confirmPassword} = userDetails;
        if(password===confirmPassword){
            setIsLoading(true);
       try{ 
            const result = await axios.post(register,{
                username:username,
                email:email,
                password:password,
                confirmPassword:confirmPassword
            })
            console.log(result.data);
            if(result.status===200){
                navigate("/login");
                setIsLoading(false);
            }
        }catch(err){
        }
    }
    }
  return (
    <div className='flex justify-center mt-[200px]'>
    <form onSubmit={submitHandler} method="post" className='h-[350px] w-[320px] bg-yellow-600 py-4 space-y-4 flex flex-col items-center rounded-xl'>
        <div >
            <input onChange={(e)=>{setUserDetails({...userDetails,username:e.target.value})}} className='bg-[white] rounded-full w-[280px] p-2 px-6 outline-none' required={true} type="text" placeholder='Username'/>
        </div>
        <div >
            <input onChange={(e)=>{setUserDetails({...userDetails,email:e.target.value})}}  className='bg-[white] rounded-full w-[280px] p-2 px-6 outline-none' required={true} type="email" placeholder='Email'/>
        </div><div >
            <input onChange={(e)=>{setUserDetails({...userDetails,password:e.target.value})}}  className='bg-[white] rounded-full w-[280px] p-2 px-6 outline-none' required={true} type="password" placeholder='Password'/>
        </div>
        <div>
            <input onChange={(e)=>{setUserDetails({...userDetails,confirmPassword:e.target.value})}}  className='bg-[white] rounded-full w-[280px] p-2 px-6 outline-none' required={true} type="password" placeholder='Confirm Password'/>
        </div>
        <div className='flex flex-col items-center '>
           { userDetails.password !== userDetails.confirmPassword? <h1 className='text-red-600 font-semibold text-sm'>Password doesn't match !</h1>:null}
        <button type='submit' className='mt-2 bg-white text-gray-500 hover:text-gray-600 font-semibold rounded-full p-2 w-[100px]' >Submit</button>
        </div>
        <div>
            <h1>Already have an account ? <span className='text-white'><Link to="/login">Login</Link></span></h1>
        </div>
    </form>
</div>
  )
}

export default Register