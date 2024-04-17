import { Helmet } from 'react-helmet-async';
import Carts from '../../components/Cards/Cards';
import Section from '../../components/Section/Section';

const Properties = () => {
    return (
        <div>
            <Helmet>
                <title>Industria | Properties</title>
            </Helmet>
            <Section/>
            <Carts/>
        </div>
    );
};

export default Properties;