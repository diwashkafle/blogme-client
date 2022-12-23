import React from 'react'

const Horizontalblogbox = ({blog,clickFuncion}) => {
    const title =  blog.title;
  const mainbody = blog.body;
  const time = blog.createdAt;
  return (
    <div className='mt-10' onClick={()=>clickFuncion(blog._id)}>
        <div className='w-[100%] bg-[#f9f9f9] h-[150px] rounded-xl shadow-xl  p-1 px-2 cursor-pointer hover:bg-[#e1e10038] space-y-1'>
            <div className='flex w-full justify-between text-gray-700 '>
                <h1 className='text-2xl font-semibold'>{title.length>50?title.slice(0,50)+"...":title}</h1>
                <p className=''>{time.slice(0,10)}</p>
            </div>
            <div>
            <p>{mainbody.length>250?mainbody.slice(0,250)+"...":mainbody}</p>
            </div>
        </div>
    </div>
  )
}

export default Horizontalblogbox