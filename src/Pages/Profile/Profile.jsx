import { Outlet } from "react-router-dom";

const Profile = () => {

    return (
        <div className='h-screen flex justify-center items-center bg-gray-500 backdrop-blur-xl bg-profile bg-blend-multiply'>
            <div className='hero w-[60%] min-h-[80%] flex items-stretch'>
                <div className='w-full px-6 text-white bg-white rounded-2xl flex flex-col justify-center items-center gap-3'>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default Profile;