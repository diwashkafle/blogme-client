
export const login = "http://localhost:5000/api/auth/login";
export const register = "http://localhost:5000/api/auth/register";
export const blogpost =(userid)=>`http://localhost:5000/api/blogs/post/${userid}`;
export const blogedit =(blogid,userid)=>`http://localhost:5000/api/blogs/edit/${userid}/${blogid}`;
export const blogdelete =(userid,blogid)=>`http://localhost:5000/api/blogs/${userid}/${blogid}`;
export const userblog =(userid)=>`http://localhost:5000/api/blogs/userblog/${userid}`;
export const allblogs = `http://localhost:5000/api/blogs`;
export const oneblog = (blogid)=>`http://localhost:5000/api/blogs/${blogid}`;

