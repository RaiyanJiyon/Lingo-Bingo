import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Tutorials = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <Helmet>
                <title>Tutorials | Lingo Bingo</title>
            </Helmet>
            
            <div data-aos="zoom-in" className="mt-8 space-y-2">
                <h1 className="text-3xl font-bold text-center">Master the Language: Comprehensive Tutorials</h1>
                <p className="text-sm text-center">Dive into curated video lessons to boost your skills and understanding. Start your vocabulary journey today!</p>
            </div>

            <div data-aos="fade-right" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                <div className="flex justify-center lg::justify-center">
                    <iframe width="300" height="200" className="rounded-lg" src="https://www.youtube.com/embed/qYsHLUAlH_8?si=NURmMqTH3ZcMKhxz" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className="flex justify-center lg::justify-center">
                    <iframe width="300" height="200" className="rounded-lg" src="https://www.youtube.com/embed/a2M-AFq5lxo?si=1JkNa_hLoJyVcHIF" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className="flex justify-center lg::justify-center">
                    <iframe width="300" height="200" className="rounded-lg" src="https://www.youtube.com/embed/U_SAcVGFpag?si=mp0fM3SpSAmUsRZq" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className="flex justify-center lg::justify-start">
                    <iframe width="300" height="200" className="rounded-lg" src="https://www.youtube.com/embed/5LnhMTCVbdo?si=W5sxUnKp7zPGxjyf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className="flex justify-center lg::justify-center">
                    <iframe width="300" height="200" className="rounded-lg" src="https://www.youtube.com/embed/XeLpZMuCdpU?si=nbrwgqN_DuTfP1RQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className="flex justify-center lg::justify-center">
                    <iframe width="300" height="200" className="rounded-lg" src="https://www.youtube.com/embed/MMmOLN5zBLY?si=FxOfHFMO4yPvAwDd" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className="flex justify-center lg::justify-center">
                    <iframe width="300" height="200" className="rounded-lg" src="https://www.youtube.com/embed/o_XVt5rdpFY?si=iJ8t2oG2WIVGXV0f" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>

            <Link to={"/start-learning"} className="flex justify-center mt-10">
                <button className="btn bg-[#1e0e5c] text-white font-bold">Learn Vocabularies</button>
            </Link>
        </div>
    );
};

export default Tutorials;
