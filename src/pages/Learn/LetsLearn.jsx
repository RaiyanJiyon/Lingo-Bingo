import { Link, useLoaderData } from "react-router-dom";

const LetsLearn = () => {
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
                        <Link to={`lesson/${lesson}`} key={lesson} className="card bg-[#1e0e5c] text-neutral-content cursor-pointer">
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-white">Lesson {lesson}</h2>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default LetsLearn;