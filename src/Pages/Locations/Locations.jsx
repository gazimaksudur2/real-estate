import { Helmet } from 'react-helmet-async';
import Frankfurt from './Frankfurt';
import Heading from './Heading';
import Houston from './Houston';
import Mumbai from './Mumbai';
import Seol from './Seol';
import Shenzhen from './Shenzhen';
import Tokyo from './Tokyo';
// import { TileLayer, Marker, Popup } from 'react-leaflet'

const Locations = () => {

    return (
        <>
            <Helmet>
                <title>Industria | Branches</title>
            </Helmet>
            <Heading/>
            <div className='w-[70%] mx-auto mb-10 flex flex-col justify-center items-center gap-2'>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        Frankfurt, Germany
                    </div>
                    <div className="collapse-content w-full p-3">
                        <Frankfurt/>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        Shenzhen, China
                    </div>
                    <div className="collapse-content w-full p-3">
                        <Shenzhen />
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        Tokyo, Japan
                    </div>
                    <div className="collapse-content w-full p-3">
                        <Tokyo/>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        Houston, USA
                    </div>
                    <div className="collapse-content w-full p-3">
                        <Houston/>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        Seoul, South Korea
                    </div>
                    <div className="collapse-content w-full p-3">
                        <Seol/>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-base-200">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        Mumbai, India
                    </div>
                    <div className="collapse-content w-full p-3">
                        <Mumbai/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Locations;