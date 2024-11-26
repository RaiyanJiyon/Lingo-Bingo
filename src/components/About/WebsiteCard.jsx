import { FaSquareGithub, FaWebflow } from "react-icons/fa6";

const WebsiteCard = ({ title, description, webLink, gitLink }) => {
    return (
        <div>
            <div className="card bg-base-100 shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-110">
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-center h-16 ">{title}</h2>
                    <p className="text-sm h-24 text-center">{description}.</p>

                    <div className="flex justify-center items-center gap-6 mt-6 w-full">
                        <a href={webLink} target="blank"><FaWebflow className="text-3xl" /></a>
                        <a href={gitLink} target="blank"><FaSquareGithub className="text-3xl" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WebsiteCard;