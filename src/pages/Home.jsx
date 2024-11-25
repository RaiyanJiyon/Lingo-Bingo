import Banner from "../components/home/Banner";
import FAQ from "../components/home/FAQ";
import SuccessSection from "../components/home/SuccessSection";

const Home = () => {
    return (
        <div>
            <div className="mt-6">
                <Banner />
            </div>
            <div>
                <SuccessSection />
            </div>
            <div>
                <FAQ />
            </div>
        </div>
    );
};

export default Home;