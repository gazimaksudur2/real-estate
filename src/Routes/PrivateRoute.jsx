import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types'

const PrivateRoute = ({children}) => {
    const { user } = useContext(AuthContext);

    if(user){
        return children;
    }
    return (<Navigate to={'/authenticate/'}/>);
};

PrivateRoute.propTypes = {
    children: PropTypes.element,
}

export default PrivateRoute;

// react leaflet is not working perfectly