const AboutCard = ({ image, title, description }) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110">
                <figure className="px-10 pt-10">
                    <img
                        src={image}
                        alt={`${image} image`}
                        className="w-full h-[164px] rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-center h-16 ">{title}</h2>
                    <p className="text-sm h-24 text-center">{description}.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutCard;