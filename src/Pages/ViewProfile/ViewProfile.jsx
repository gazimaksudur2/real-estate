import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const ViewProfile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="w-[45%]">
            <div className="flex justify-center items-center gap-3 mb-4">
                <img className="w-8" src="https://cdn-icons-png.flaticon.com/128/12287/12287293.png" alt="logo" />
                <h2 className="font-exo font-semibold text-3xl text-[#1d2030]">Industria</h2>
            </div>
            <div className="w-full text-[#1d2030] font-ubuntu flex flex-col items-center gap-2">
                <img className="rounded-badge w-28" src={user.photoURL} alt="profile image" />
                <h2>{user.displayName}</h2>
                <h3>{user.email}</h3>
                <div className="w-full flex justify-between items-center">
                    <Link to={'/'}><button className="btn btn-primary">Go Back Home</button></Link>
                    <Link to={'/profile/update'}><button className="btn btn-secondary">Update Profile</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ViewProfile;