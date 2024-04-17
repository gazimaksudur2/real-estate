import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/estates.json')
            .then(res => res.json())
            .then(info => setData(info));
    }, [])

    // console.log(data);
    return (
        <div className="w-[90%] mx-auto">
            <div className="mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    data.slice(0,15).map((data, idx)=>(<Card key={idx} data={data}/>))
                }
            </div>
        </div>
    );
};

export default Cards;