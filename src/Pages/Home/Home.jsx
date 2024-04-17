import Banner from "../../components/Banner/Banner";
import Carts from "../../components/Carts/Carts";
import Section from "../../components/Section/Section";

const Home = () => {
    return (
        <div className="flex-1 mt-3">
            <Banner/>
            <Section/>
            <Carts/>
        </div>
    );
};

export default Home;