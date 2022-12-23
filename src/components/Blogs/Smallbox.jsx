import { useNavigate } from 'react-router-dom';
import {BsThreeDotsVertical} from 'react-icons/bs';
import { useState,useContext } from 'react';
import { loginContext } from '../../ContextApi/loginContext';

const Smallbox = ({blog,updatebtn}) => {
  const title =  blog.title;
  const mainbody = blog.body;
  const id = blog._id;
  const navigate = useNavigate();
  const [ isdotClick,setIsdotClicked] = useState(false);
  const {editButton,setEditButton,delButton,setDelButton} = useContext(loginContext)

 const onsmallBoxclickHandler = ()=>{
  navigate(`/blog/${id}`)
 }

 const threedotclickHandler = ()=>{
  setIsdotClicked(!isdotClick);

 }

 const EditbuttonHandler = ()=>{
  setEditButton({
    bool:true,
    blogid:id
  })
  console.log(editButton.blogid);
  threedotclickHandler()
  updatebtn(id);
 }

 const delbuttonHandler = ()=>{
  setDelButton({...delButton,blogId:id,bool:true})
  threedotclickHandler()
 }


  return (
    <div  className='h-[220px] w-[320px] rounded-2xl bg-[#f9f9f9] py-5 px-3 m-3 cursor-pointer hover:bg-[#e1e10038]'>
        <div className='flex justify-between  border-b border-gray-300 py-1 '>
          <div>
          <h1 className='text-xl text-gray-700 font-bold'>{title.length>25?title.slice(0,25)+"...":title}</h1>
          </div>
          <div className='flex flex-col'>            
            <BsThreeDotsVertical  onClick={threedotclickHandler} size={15}color="black"/>
            {isdotClick?<div className='flex flex-col absolute h-[75px] w-[70px] border border-gray-300 bg-white mt-5 z-10'>
              <button onClick={EditbuttonHandler} className='hover:bg-gray-100  border-b border-gray-400 w-full h-full'>Edit</button>
              <button onClick={delbuttonHandler} className=' hover:bg-gray-100  w-full h-full'>Delete</button>
            </div>:null}
          </div>
        </div>
        <div onClick={onsmallBoxclickHandler} className='mt-2w-[321px] h-[180px] py-1'>
            <p className='px-3'>{mainbody.length>220?mainbody.slice(0,220)+"...":mainbody}</p>
        </div>
    </div>
  )
}

export default Smallbox;