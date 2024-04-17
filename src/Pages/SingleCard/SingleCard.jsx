import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaEye, FaStar } from "react-icons/fa";
import { IoStarOutline } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";

const SingleCard = () => {
    const { id } = useParams();
    const [wished, setWished] = useState(false);
    const [card, setCard] = useState(null);

    useEffect(()=>{
        fetch('/estates.json')
        .then(res => res.json())
        .then(info => {
            const data = info.find((card) => (card.id == id));
            setCard(data);
        });
       
    },[id])
    // console.log(card);

    const handleWished = () => {
        setWished(!wished);
    }
    const { estate_title, image, description, price, status, area, location, facilities, views } = card || {};
    return (
        <div className="w-[90%] mx-auto my-10">
            <Helmet>
                <title>{`Industria | ${estate_title}`}</title>
            </Helmet>
            <div className="w-full flex justify-between items-center mb-4">
                <div className="flex flex-col space-y-2">
                    <h1 className="font-exo font-bold text-4xl">{estate_title}</h1>
                    <div className="flex justify-center items-center gap-2">
                        <h3>For: {status}</h3>
                        <h3 className="border-x-2 px-2 font-normal border-gray-400">Property ID: {id}</h3>
                        <div className="flex justify-center items-center gap-2 ml-3">
                            <FaEye size={20}/>
                            {views}
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <h2 className="font-exo font-semibold text-2xl">Price: {price}$</h2>
                    <div className="flex justify-start items-center gap-2">
                        <div onClick={handleWished}>
                            {wished?<FaStar onClick={handleWished} className="text-amber-500" size={20}/>:<IoStarOutline onClick={handleWished} className="text-amber-500" size={20}/>}
                        </div>
                        <h4>Add to wishlist</h4>
                    </div>
                </div>
            </div>
            <div>
                <img className="w-full rounded-3xl h-[70vh] object-cover" src={image} alt="" />
            </div>
            <div className="flex flex-col justify-center">
                <div className="my-5 space-y-3">
                    <h2 className="font-ubuntu font-medium text-2xl">Description</h2>
                    <p className="">{description}</p>

                </div>
                <div className="flex w-full my-10 px-[5%] justify-between items-center">
                    <div className="border-2 p-4 rounded-2xl border-orange-500 shadow-xl">
                        <h2 className="font-ubuntu mb-2 border-b-4 pb-2">Property Features : </h2>
                        <ul className="list-disc px-3 text-sm space-y-1 flex flex-col">
                            {
                                facilities?.map((facility, idx) => <li key={idx}>{facility}</li>)
                            }
                        </ul>
                    </div>
                    <div className="border-2 p-4 rounded-2xl border-orange-500 shadow-xl">
                        <h2 className="mb-2 font-ubuntu border-b-4 pb-2">Property Details : </h2>
                        <ul className="list-disc px-3 text-sm flex flex-col space-y-1">
                            <li>
                                <div>
                                    <p>Area : {area}</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <p>Location : {location}</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <div className="flex justify-center">
                    <Link to={'/property'}><button className="btn btn-outline btn-secondary mt-10">Go Back Properties</button></Link>
                </div> */}
            </div>
        </div>
    );
};

export default SingleCard;