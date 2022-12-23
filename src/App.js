import { useState } from 'react';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import { loginContext } from './ContextApi/loginContext';
import Loading from './pages/Loading/Loading';
import Profile from './pages/Profile/Profile';
import Blogpage from './pages/Blog/Blogpage';

function App() {

  const [blogTitle,setBlogTitle] = useState(" ");
  const [blog,setBlog] = useState(" ");
  const [textCross, setTextCross] = useState(true);
  const [isLogin,setIsLogin] = useState(false);
  const [isLoading,setIsLoading] = useState(false);
  const [userDetails,setUserDetails] = useState({
    username:"",
    email:"",
    password:"",
    confirmPassword:""
  })
  const [blogDetails,setBlogDetails] = useState({
    authorid:"",
    authorEmail:"",
    author:"",
    title:"",
    body:"",
    time:""
  })
  const [ editButton,setEditButton] = useState({
    bool:false,
    blogid:""
  });
  const [ delButton,setDelButton] = useState({
    bool:false,
    blogId:"",
    warndel:false
  });


  return (
    <loginContext.Provider value={
      {
        isLogin,setIsLogin,
        userDetails,setUserDetails,
        isLoading,setIsLoading,
        textCross,setTextCross,
        blog,setBlog,
        blogTitle,setBlogTitle,
        blogDetails,setBlogDetails,
        editButton,setEditButton,
        delButton,setDelButton,
        }
      }>
     {isLoading?<Loading />:
      <>
    <BrowserRouter>
    <Routes>
      <Route path='*' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/profile' element={<Profile/>} />
      <Route path='/blog/:id' element={<Blogpage/>} />
    </Routes>
    </BrowserRouter>
      </>}
    </loginContext.Provider>
  );
}

export default App;
