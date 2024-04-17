import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import Review from "../../components/Review/Review";
import ReviewCards from "../../components/ReviewCards/ReviewCards";

const Home = () => {
    return (
        <div className="flex-1 mt-3">
            <Helmet>
                <title>
                    Industria | Home
                </title>
            </Helmet>
            <Banner/>
            <Review/>
            <ReviewCards/>
        </div>
    );
};

export default Home;