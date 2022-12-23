import React, { useContext,useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { loginContext } from '../../ContextApi/loginContext';
import {FaUserCircle} from 'react-icons/fa';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Texteditor from '../../components/Texteditor/Texteditor';
import axios from 'axios';
import { userblog,blogdelete, oneblog, blogedit } from '../../routes/alltheroutes';
import Smallbox from '../../components/Blogs/Smallbox';
import Warning from '../../components/Warning/Warning';
import Footer from '../../components/Footer/Footer';



const Profile = () => {
  const[userblogcollection,setUserblogcollection] = useState([]);
  const {isLogin,setIsLogin,userDetails,setUserDetails,isLoading,setIsLoading,textCross,setTextCross,delButton,setDelButton,blog,setBlog,blogTitle,setBlogTitle,editButton,setEditButton} = useContext(loginContext);
  const navigate = useNavigate();
  const userinfo = localStorage.getItem("userId");

  const fetchblog = async(id)=>{
    const blogdata = await axios.get(userblog(id));
     setUserblogcollection([...blogdata.data]);
  }

 useEffect( ()=>{
  if(userinfo){
    console.log(userinfo)
    fetchblog(userinfo);
  }else if(!userinfo){
    navigate('/login');
  }
 },[])
 
 const inputClickHander = ()=>{
  window.scrollTo(0,0);
  setTextCross(false)
  console.log(editButton.bool);
 }

//  const heightOfpage = document.documentElement.scrollHeight;

const deletingblog = async (userinfo)=>{
  await axios.delete(blogdelete(userinfo,delButton.blogId),{withCredentials:'include'})
}

const updateButton = async (id)=>{
  console.log(`This is editbutton ${id}`);
  const blogdata = await axios.get(oneblog(id));
  const {title,body} = blogdata.data.thatblog;
  setBlogTitle(title);
  setBlog(body);
inputClickHander()
}

const updatingblog = async (id)=>{
  const updatedData = await axios.put(blogedit(id,userinfo),
  {title:blogTitle,body:blog},
  {withCredentials:'include'});
  fetchblog(userinfo);
}

const delButtonHandler = async ()=>{
  setDelButton({...delButton,bool:false,warndel:true});
  deletingblog(userinfo);
  fetchblog(userinfo);
}
  return (
    <div  className='flex flex-col'>
      <div className=' px-[6vw] '>
      <Navbar/>
      </div>
      <div>
      <div className='mt-5 flex flex-col  px-[6vw] '>
        <div className='flex space-x-8 pb-6 items-center'>
          <FaUserCircle size={150} color="gray"/>
          <div className='flex flex-col'>
          <h1 className='text-xl font-semibold text-gray-800'>{userDetails.username}</h1>
          <h1 className='font-semibold text-gray-500'>{userDetails.email}</h1>
          </div>   
        </div>
        <div className='border-t border-gray-300'>
          <div className='w-full h-[80px] py-5 flex justify-center pt-5'>
            <input onClick={inputClickHander} className=' bg-gray-100 w-[40%] rounded-full p-1 px-4 outline-none' type="text" placeholder='Write your blog here..'/>
          </div>
        </div>
        
        </div>
        <div className='mt-5 w-full grid grid-cols-4 px-[100px] '>
          {userblogcollection.length===-1?<h1 className='text-xl text-gray-400'>You don't have any blogs!</h1>:
          userblogcollection.map((eachblog,index)=>{
            return <Smallbox key={index} blog={eachblog} updatebtn={updateButton}/>
          })}
        </div>
          {!textCross?<Texteditor updatingblog = {updatingblog}/>:null}
        {delButton.bool?<Warning Delete={delButtonHandler}/>:null}
    </div>
    <div className='flex flex-col self-end'><Footer/></div>
    </div>
  )
}

export default Profile