
export const login = "https://blogme-api.onrender.com/api/auth/login";
export const register = "https://blogme-api.onrender.com/api/auth/register";
export const blogpost =(userid)=>`https://blogme-api.onrender.com/api/blogs/post/${userid}`;
export const blogedit =(blogid,userid)=>`https://blogme-api.onrender.com/api/blogs/edit/${userid}/:${blogid}`;
export const blogdelete =(userid,blogid)=>`https://blogme-api.onrender.com/api/blogs/${userid}/${blogid}`;
export const userblog =(userid)=>`https://blogme-api.onrender.com/api/blogs/userblog/${userid}`;
export const allblogs = `https://blogme-api.onrender.com/api/blogs`;
export const oneblog = (blogid)=>`https://blogme-api.onrender.com/${blogid}`;

