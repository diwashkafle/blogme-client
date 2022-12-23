import { useContext } from "react"
import { loginContext } from "../../ContextApi/loginContext"

const Warning = ({Delete}) => {

    const{delButton,setDelButton} = useContext(loginContext);

    

    const value = "delete"
  return (
    <div className='flex absolute top-0 justify-center items-center bg-[#00000081] w-[100vw] h-[100vh]'>
        <div className='h-[110px] w-[250px] bg-white flex flex-col justify-center items-center space-y-5 rounded'>
            <div>
        <h1>{`Do you want to ${value}`}</h1>
            </div>
            <div className='space-x-5'>
                <button onClick={Delete} className='p-1 text-white font-semibold px-7 bg-yellow-600 rounded hover:bg-yellow-700'>Yes</button>
                <button onClick={()=>setDelButton(false)} className='p-1 px-5 text-white font-semibold bg-red-600 rounded hover:bg-red-700'> Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default Warning