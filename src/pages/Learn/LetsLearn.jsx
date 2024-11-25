import { useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";

const LetsLearn = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const allVocabulary = useLoaderData();

    const lessonNumbers = [...new Set(allVocabulary.map(vocabulary => vocabulary.lesson_no))];

    return (
        <div>
            <div className="mt-8 space-y-2">
                <h1 className="text-3xl font-bold text-center">Let’s Learn Together!</h1>
                <p className="text-sm text-center">Dive into interactive lessons and comprehensive tutorials designed to enrich your
                    vocabulary and make learning enjoyable!</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                {
                    lessonNumbers.map(lesson => (
                        <Link to={`lesson/${lesson}`} key={lesson} className="group card bg-[#1e0e5c] text-neutral-content cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-110">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-white">Lesson {lesson}</h2>
                            </div>
                        </Link>
                    ))
                }
            </div>

            <div className="mt-16 space-y-2">
                <h1 className="text-3xl font-bold text-center">Tutorials</h1>
                <p className="text-sm text-center">Explore a variety of tutorials designed to expand your vocabulary and help
                    you master new words with ease!</p>

            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                <div className="flex justify-center lg::justify-center">
                    <iframe width="300" height="200" className="rounded-lg" src="https://www.youtube.com/embed/qYsHLUAlH_8?si=NURmMqTH3ZcMKhxz" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className="flex justify-center lg::justify-center">
                    <iframe width="300" height="200" className="rounded-lg" src="https://www.youtube.com/embed/a2M-AFq5lxo?si=1JkNa_hLoJyVcHIF" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
                <div className="flex justify-center lg::justify-center">
                    <iframe width="300" height="200" className="rounded-lg" src="https://www.youtube.com/embed/U_SAcVGFpag?si=mp0fM3SpSAmUsRZq" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>

            <Link to={"/tutorials"} className="flex justify-center mt-10">
                <button className="btn bg-[#1e0e5c] text-white font-bold">View More</button>
            </Link>
        </div>
    );
};

export default LetsLearn;