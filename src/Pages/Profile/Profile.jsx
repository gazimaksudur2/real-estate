import { Outlet } from "react-router-dom";

const Profile = () => {

    return (
        <div className='h-screen flex justify-center items-center bg-gray-500 backdrop-blur-xl bg-profile bg-blend-multiply'>
            <div className='hero w-[80%] lg:w-[60%] min-h-[80%] flex items-stretch'>
                <div className='w-full lg:py-2 lg:px-6 text-white bg-white rounded-2xl flex flex-col justify-center items-center gap-3'>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default Profile;