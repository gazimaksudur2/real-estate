import Banner from "../../components/Banner/Banner";
import Review from "../../components/Review/Review";
import ReviewCards from "../../components/ReviewCards/ReviewCards";

const Home = () => {
    return (
        <div className="flex-1 mt-3">
            <Banner/>
            <Review/>
            <ReviewCards/>
        </div>
    );
};

export default Home;