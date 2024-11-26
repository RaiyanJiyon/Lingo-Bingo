import { Helmet } from "react-helmet";
import AboutCard from "../components/About/AboutCard";
import WebsiteCard from "../components/About/WebsiteCard";

const AboutUs = () => {
    return (
        <div>
            <Helmet>
                <title>About Us | Lingo Bingo</title>
            </Helmet>

            <div data-aos="zoom-in" className="mt-8 space-y-2">
                <h3 className="text-3xl text-center">Welcome to <span className="font-bold">Md. Raiyan-Ur-Rahman Jiyon</span>, where passion fuels innovation!</h3>
                <p className="text-sm text-center">As a budding MERN stack developer, I specialize in building responsive, dynamic, and user-centric web applications. From creating seamless e-commerce experiences to developing creative solutions tailored to modern digital needs, I am dedicated to delivering clean, efficient, and impactful code. Let&apos;s bring your ideas to life with innovation and precision!</p>
            </div>

            <div className="mt-20 space-y-10">
                <h1 data-aos="fade-right" className="text-3xl font-bold text-center">Skills</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-8">
                    <AboutCard image={"https://www.revenueriver.co/hubfs/fullstack.jpeg"} title={"Full-Stack Development"} description={"Proficient in building dynamic web applications with React, Node.js, Express, and MongoDB."} />
                    <AboutCard image={"https://www.webfx.com/wp-content/uploads/2021/10/iStock-612224522.jpg"} title={"Responsive Design"} description={"Crafting mobile-first, user-friendly interfaces using Tailwind CSS and DaisyUI."} />
                    <AboutCard image={"https://www.accuwebtech.com/images/js-expertise.png"} title={"JavaScript Expertise"} description={"Skilled in solving problems and building interactive applications with modern JavaScript techniques."} />
                    <AboutCard image={"https://img.freepik.com/free-vector/project-management-business-multitasking-concept-flat-line-art-icons_126523-2192.jpg"} title={"Project Management"} description={"Delivering structured, efficient, and well-documented solutions with clean code and meaningful commits."} />
                </div>
            </div>

            <div className="mt-20 space-y-10">
                <h1 data-aos="fade-right" className="text-3xl font-bold text-center">Projects</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-8">
                    <WebsiteCard title={"Gadget Heaven"} description={"GadgetHaven is a gadget store with a cart, wishlist, filtering, sorting, and smooth local storage-based functionality."} webLink={"https://gadget-heaven2.netlify.app/"} gitLink={"https://github.com/RaiyanJiyon/Gadget-Heaven"} />
                    <WebsiteCard title={"BPL Dream 11"} description={"BPL-DREAM 11 is a dynamic and interactive React-based web application that allows users to build their own cricket team."} webLink={"https://bpl-dream-elev.netlify.app/"} gitLink={"https://github.com/RaiyanJiyon/BPL-Dream-11"} />
                    <WebsiteCard title={"Peddy Pet Adoption"} description={"Peddy Pet Adoption is a responsive app for browsing, adopting pets, and saving favorites."} webLink={"https://peddy-pet-adoption-ecommerce.netlify.app/"} gitLink={"https://github.com/RaiyanJiyon/Peddy-API-Website"} />
                    <WebsiteCard title={"Donate Bangladesh"} description={"Donate Bangladesh is a donating platform where people donate for flood affected people in the Bangladesh."} webLink={"https://raiyanjiyon.github.io/Donate-Bangladesh-Website/"} gitLink={"https://github.com/RaiyanJiyon/Donate-Bangladesh-Website"} />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;