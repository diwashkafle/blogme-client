import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import { FaUserCircle } from "react-icons/fa";
import { useEffect,useContext } from "react";
import { loginContext } from "../../ContextApi/loginContext";
import axios from "axios";
import { oneblog } from "../../routes/alltheroutes";

const Blogpage = () => {
  const {id} = useParams();
  const {blogDetails,setBlogDetails} = useContext(loginContext);
  const{authorid,authorEmail,author,title,body,time} = blogDetails
  const fetchingBlog = async()=>{
    const result = await axios.get(oneblog(id))
    const {_id,email,username,thatblog} = result.data;
    setBlogDetails({
      authorid:_id,
      authorEmail:email,
      author:username,
      title:thatblog.title,
      body:thatblog.body,
      time:thatblog.createdAt
    })
  }

  useEffect(()=>{
          fetchingBlog();
  },[])
  return (
    <div>
      <div className="px-[6vw]">
        <Navbar />
      </div>
      <div className="px-[6vw] mt-5">
        <div id="this is top-part for blog spot" className="flex items-center flex-col w-full space-y-10">
            <div className="w-full flex justify-between text-sm  text-gray-600">
              <div>
                <div>
                  <h1 className="font-semibold">{`-${author}`}</h1>
                  <h1>{authorEmail}</h1>
                </div>
              </div>
              <div>
                <h1 className="">{time.slice(0,10)}</h1>
              </div>
            </div>
          <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
        </div>
        <div id="this is main body of blog" className="mt-16">
            <p className="text-justify text-base text-gray-800 ">
            {body}
            </p>
        </div>
      </div>
    </div>
  );
};

export default Blogpage;
