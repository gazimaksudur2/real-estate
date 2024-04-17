import { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';

const ReviewCards = () => {
    const [data, setData] = useState();

    useEffect(()=>{
        fetch('reviews.json')
        .then(res=>res.json())
        .then(datas=>setData(datas));
    },[])

    // console.log(data);
    return (
        <div className='w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10'>
            {
                data && data.map((dat,idx)=>(<ReviewCard key={idx} data={dat}/>))
            }
        </div>
    );
};

export default ReviewCards;