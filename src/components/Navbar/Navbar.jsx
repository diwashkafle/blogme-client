import { useContext,useState,useEffect } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import image from '../../images/logo.png';
import {FaUserCircle} from 'react-icons/fa';
import { loginContext } from '../../ContextApi/loginContext';
import axios from "axios";


const Navbar = () => {
    const Navigate = useNavigate();

const {isLogin,setIsLogin,userDetails,setUserDetails,isLoading,setIsLoading} = useContext(loginContext);

const [state,setState] = useState(true);

const fetchlogedinUser = async (id)=>{
    if(id){
        setIsLogin(true);
  
    setIsLoading(true);
    const userData = await axios.get(`http://localhost:5000/api/user/${id}`,
    {withCredentials: "include"}
    );
    const {username,email} = await userData.data;
    if(userData){
        setIsLoading(false);
        setUserDetails({
            username:username,
            email:email
        })
    }
}else{
      Navigate('/login');
}
}

window.addEventListener("load",()=>{
    let userinfo =  localStorage.getItem("userId");
    fetchlogedinUser(userinfo);
}) 


const profileButtonClickHandler = ()=>{
    Navigate('/profile');
}
    

const logoutHandler = ()=>{
    setIsLogin(false);
localStorage.clear();
}
    
  return (
    <div className='px=[6vw]'>
        <div className='flex justify-between mt-2 h-[50px] border-b border-gray-300 pb-2 '>
            <div onClick={()=>{Navigate('/')}} className='flex items-center space-x-2 cursor-pointer'>
                <div>
                    <img className='h-[40px]' src={image} alt='main-logo'/>
                </div>
                <div className=''>
                    <h1 className='mt-1 text-lg font-bold'>BLOGMe</h1>
                </div>
            </div>
           {!isLogin? <div className='space-x-4 mt-2 flex items-center'>
                <button className='bg-yellow-600 font-semibold text-white p-1 px-5 rounded-2xl'><Link to="/login">Login</Link></button>
                <button className='bg-yellow-600 font-semibold text-white p-1 px-4 rounded-2xl'><Link to="/register">Register</Link></button>
            </div>:
            <div className='flex space-x-5 mt-2 h-[38px] items-center'>
                <div onClick={profileButtonClickHandler} className='flex space-x-1 cursor-pointer'>
                    <FaUserCircle size={25} color='gray'/>
                    <h1>{userDetails.username}</h1>
                </div>
                <button onClick={logoutHandler} className='bg-yellow-600 font-semibold text-white p-1 px-5 rounded-2xl'>Logout</button>
            </div>}
        </div>
    </div>
  )
}

export default Navbar