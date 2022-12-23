import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Horizontalblogbox from '../../components/Blogs/Horizontalblogbox';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import { loginContext } from '../../ContextApi/loginContext';
import { allblogs } from '../../routes/alltheroutes';

const Home = () => {
  
  const[blogcollection,setBlogcollection] = useState([]);
  const {isLogin,setIsLogin,userDetails,setUserDetails,isLoading,setIsLoading,textCross,setTextCross} = useContext(loginContext);
  const navigate = useNavigate();

  const fetchblog = async()=>{
    const blogdata = await axios.get(allblogs);
     setBlogcollection([...blogdata.data]);
  }

 useEffect( ()=>{
  const userinfo = localStorage.getItem("userId");
    fetchblog();
 },[])

 const blogboxclickHandler = (e)=>{
  navigate(`/blog/${e}`);
 }
  return (
   <div className='flex flex-col'>
    <div className='px-[6vw]'>
        <Navbar />
        <div>
          {blogcollection!==undefined || blogcollection[0]?
          blogcollection.map((eachblog,index)=>{
            return <>{eachblog!==undefined?<Horizontalblogbox key={index+1} blog={eachblog} clickFuncion={blogboxclickHandler} />:null}</>
          }):null}
        </div>
    </div>
    <div className='flex flex-col self-end'><Footer/></div>
</div>
  )
}

export default Home