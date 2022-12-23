import axios from 'axios';
import {useContext} from 'react';
import {RxCross2} from 'react-icons/rx';
import { loginContext } from '../../ContextApi/loginContext';
import { blogpost } from '../../routes/alltheroutes';

const Texteditor = ({updatingblog}) => {
    const{isLoading,userDetails,setIsLoading,textCross,setTextCross,blog,setBlog,blogTitle,setBlogTitle,editButton,setEditButton} = useContext(loginContext);
    const {blogid} = editButton;
    const formSubmission = async (e)=>{
        e.preventDefault();
        const userinfo = localStorage.getItem("userId");
        if(blog && blogTitle){
            setTextCross(true);
            const blogData = await axios.post(blogpost(userinfo),
                {
                    title:blogTitle,
                    body:blog,
                    authorEmail:userDetails.email

                },{withCredentials:"include"});
                if(blogData.status===200){
                    console.log(blogData);
                    alert("Your blog is posted");
                }
        }
    }

    const formUpdate =  ()=>{
        setEditButton({
            bool:false,
            blogid:blogid
        });
        updatingblog(blogid);
        setTextCross(true);
        console.log(editButton);
    }

  return (
    <div className={`flex absolute top-0 justify-center bg-[#00000081] w-[100vw] h-[100vh] z-10`}>
        <div className='bg-gray-100 h-[70vh] w-[50vw] absolute top-5 rounded-lg flex items-center flex-col'>
            <div onClick={()=>setTextCross(true)} className='flex my-2 self-end mr-4 hover:bg-gray-400 rounded-full cursor-pointer '>
                <button><RxCross2/></button>
            </div>
            {!editButton.bool?<>
            <form onSubmit={formSubmission}>
            <div className='flex flex-col items-center space-y-1' >
                <input onChange={(e)=>setBlogTitle(e.target.value)} className='w-full p-2 px-4 outline-none border border-gray-400' input="text" placeholder='Title..' required={true} />
                <textarea onChange={(e)=>setBlog(e.target.value)} className='outline-none bg-white resize-none border border-gray-400 p-4' cols='90' rows='13' placeholder='Blog...' required={true} ></textarea>
            </div>
            <div className='mt-4'>
           <button className='bg-yellow-600 text-lg font-semibold text-white p-1 px-7 rounded-lg'>Post</button>
            </div>
            </form></>:<>
            <form >
            <div className='flex flex-col items-center space-y-1' >
                <input onChange={(e)=>setBlogTitle(e.target.value)} className='w-full p-2 px-4 outline-none border border-gray-400' input="text" placeholder='Title..' required={true} value={blogTitle} />
                <textarea onChange={(e)=>setBlog(e.target.value)} className='outline-none bg-white resize-none border border-gray-400 p-4' cols='90' rows='13' placeholder='Blog...' required={true} value={blog} ></textarea>
            </div>
            <div className='mt-4'>
           <button onClick={formUpdate} className='bg-yellow-600 text-lg font-semibold text-white p-1 px-7 rounded-lg'>Update {console.log(editButton.bool)}</button>
            </div>
            </form></>}
        </div> 
    </div>
  )
}

export default Texteditor