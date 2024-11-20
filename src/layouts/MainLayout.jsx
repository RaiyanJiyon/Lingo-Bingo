import { Outlet } from "react-router-dom";
import Header from "../components/shared/Header";
import Footer from "../components/shared/Footer";

const MainLayout = () => {
    return (
        <div className='w-11/12 2xl:w-4/5 mx-auto'>
            <div className='mt-6 sticky top-0 z-10'>
                <Header />
            </div>
            <div className='min-h-[calc(100vh-505px)]'>
                <Outlet />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default MainLayout;