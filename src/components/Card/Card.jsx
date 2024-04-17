import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


const Card = ({ data }) => {
    const { id, estate_title, image, description, price, location } = data;
    return (
        <div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={image} alt={estate_title} className="w-full h-56 object-cover" />
                <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{estate_title}</h3>
                    <p className="text-gray-700 font-normal mb-4">{description.slice(0,100)}....</p>
                    <div className="flex items-center justify-between mb-4">
                        <p className="text-gray-600 text-sm">{location}</p>
                        <p className="font-bold text-amber-600 ">$ {price}</p>
                    </div>
                    <Link to={`/property/${id}`}>
                        <button className='btn btn-outline btn-success'>View property</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    data: PropTypes.object.isRequired,
}
export default Card;