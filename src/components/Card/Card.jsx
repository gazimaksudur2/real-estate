import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


const Card = ({ data }) => {
    const { id, estate_title, image, description, price, status, area, location, facilities } = data;
    return (
        <div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={image} alt={estate_title} className="w-full h-56 object-cover" />
                <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{estate_title}</h3>
                    <p className="text-gray-700 mb-4">{description}</p>
                    <div className="flex items-center justify-between">
                        <p className="text-gray-600">{location}</p>
                        <p className="text-blue-500 font-semibold">${price}</p>
                    </div>
                </div>
                <Link to={`/property/${id}`}>
                    <button className='btn btn-outline btn-success'>View property</button>
                </Link>
            </div>
        </div>
    );
};

Card.propTypes = {
    data: PropTypes.object.isRequired,
}
export default Card;