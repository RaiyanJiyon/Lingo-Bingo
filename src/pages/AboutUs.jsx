import AboutCard from "../components/About/AboutCard";

const AboutUs = () => {
    return (
        <div>
            <div className="mt-8 space-y-2">
                <h3 className="text-3xl text-center">Welcome to <span className="font-bold">Md. Raiyan-Ur-Rahman Jiyon</span>, where passion fuels innovation!</h3>
                <p className="text-sm text-center">As a budding MERN stack developer, I specialize in building responsive, dynamic, and user-centric web applications. From creating seamless e-commerce experiences to developing creative solutions tailored to modern digital needs, I am dedicated to delivering clean, efficient, and impactful code. Let&apos;s bring your ideas to life with innovation and precision!</p>
            </div>

            <div className="mt-20 space-y-10">
                <h1 className="text-3xl font-bold text-center">Skills</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-8">
                    <AboutCard image={"https://www.revenueriver.co/hubfs/fullstack.jpeg"} title={"Full-Stack Development"} description={"Proficient in building dynamic web applications with React, Node.js, Express, and MongoDB."} />
                    <AboutCard image={"https://www.webfx.com/wp-content/uploads/2021/10/iStock-612224522.jpg"} title={"Responsive Design"} description={"Crafting mobile-first, user-friendly interfaces using Tailwind CSS and DaisyUI."} />
                    <AboutCard image={"https://www.accuwebtech.com/images/js-expertise.png"} title={"JavaScript Expertise"} description={"Skilled in solving problems and building interactive applications with modern JavaScript techniques."} />
                    <AboutCard image={"https://img.freepik.com/free-vector/project-management-business-multitasking-concept-flat-line-art-icons_126523-2192.jpg"} title={"Project Management"} description={"Delivering structured, efficient, and well-documented solutions with clean code and meaningful commits."} />
                </div>
            </div>

            <div className="mt-20 space-y-10">
                <h1 className="text-3xl font-bold text-center">Projects</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-8">
                    <AboutCard image={""} title={"Gadget Heaven"} description={"GadgetHaven is a gadget store with a cart, wishlist, filtering, sorting, and smooth local storage-based functionality."} />
                    <AboutCard image={""} title={"Peddy Pet Adoption"} description={"Peddy Pet Adoption is a responsive app for browsing, adopting pets, and saving favorites."} />
                    <AboutCard image={""} title={"Donate Bangladesh"} description={"Donate Bangladesh is a donating platform where people donate for flood affected people in the Bangladesh."} />
                    <AboutCard image={""} title={"Rinterio Design"} description={"Rinterio Design is a constructive platform where people can hire their constructor for building their house."} />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;