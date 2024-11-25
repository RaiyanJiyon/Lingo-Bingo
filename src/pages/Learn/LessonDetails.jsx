import { useEffect } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const LessonDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const allVocabulary = useLoaderData();
    const { lessonNo } = useParams();
    const lessonId = parseInt(lessonNo);

    const lesson = allVocabulary.filter(vocabulary => vocabulary.lesson_no === lessonId);
    console.log(lesson);

    return (
        <div className="mt-8">
            <h2 className="text-3xl font-bold text-center">Lesson {lessonId} Details</h2>
            <div className="grid grid-cols-4 gap-6">
                {lesson.map(vocabulary => (
                    <div key={vocabulary.id} className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">vocabulary.word</h2>
                            <p><span className="font-bold">Meaning:</span> {vocabulary.meaning}</p>
                            <p><span className="font-bold">Pronunciation</span>: {vocabulary.pronunciation}</p>
                            <p><span className="font-bold">Part of Speech:</span> {vocabulary.part_of_speech}</p>
                            {/* <p><span className="font-bold">Difficulty:</span> {vocabulary.difficulty}</p>
                            <p><span className="font-bold">When to Say: </span>{vocabulary.when_to_say}</p> */}
                            {/* <p><span className="font-bold">Example:</span> {vocabulary.example}</p> */}
                            <div className="card-actions justify-end">
                                <button className="btn w-full mt-4 bg-[#1e0e5c] text-white font-bold">When to Say</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Link to={'/tutorials'} className="flex justify-center mt-8">
                <button className="btn bg-[#1e0e5c] text-white font-bold">View More</button>
            </Link>
        </div>
    );
};

export default LessonDetails;
