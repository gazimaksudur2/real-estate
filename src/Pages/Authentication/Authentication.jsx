import { useContext } from "react"
import { Link, Outlet } from "react-router-dom"
import { AuthContext } from "../../AuthProvider/AuthProvider"
import { FaGithub, FaGoogle } from "react-icons/fa";

const Authentication = () => {
  const { googleLogin, githubLogin } = useContext(AuthContext);

  const handleGoogle = ()=>{
    googleLogin()
    .then(res=>console.log(res))
    .catch(error=>console.log(error.message))
  };
  const handleGithub = ()=>{
    githubLogin()
    .then(res=>console.log(res))
    .catch(error=>console.log(error.message))
  };
  return (
    <div className='h-screen flex justify-center items-center bg-gray-500 backdrop-blur-xl bg-bgAuth bg-cover bg-blend-multiply'>
      <div className='hero w-[60%] min-h-[80%] flex items-stretch'>
        <div className='w-[40%] px-6 text-white bg-[#1d2030] rounded-l-2xl flex flex-col justify-center items-center gap-3'>
          <div className="flex justify-center items-center gap-3 mb-24">
            <img className="w-8" src="https://cdn-icons-png.flaticon.com/128/12287/12287293.png" alt="logo" />
            <h2 className="font-exo font-semibold text-3xl">Industria</h2>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className='font-roboto text-sm font-light'>Login using social media to get quick access.</h1>
            <button onClick={handleGoogle} className='btn w-full hover:bg-orange-700 bg-orange-800 border-none text-white flex justify-center items-center gap-3'><FaGoogle size={20}/>Signin with Google</button>
            <button onClick={handleGithub} className='btn w-full hover:bg-[#4078C0] bg-[#4078C0ab] border-none text-white flex justify-center items-center gap-3'><FaGithub size={20}/>Signin with Github</button>
            <Link to={'/'}>
                <button  className='btn w-full'>Go Back Home</button>
            </Link>
          </div>
        </div>
        <div className="bg-white w-[60%] rounded-r-2xl">
            <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Authentication