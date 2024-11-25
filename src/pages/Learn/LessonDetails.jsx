import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import WhenToSayModal from "../../components/learn/WhenToSayModal";

const LessonDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalData, setModalData] = useState({});

    const allVocabulary = useLoaderData();
    const { lessonNo } = useParams();
    const lessonId = parseInt(lessonNo);

    const lesson = allVocabulary.filter(vocabulary => vocabulary.lesson_no === lessonId);
    console.log(lesson);

    const handleViewMoreButton = (word, meaning, whenToSay, example) => {
        setModalData({ word, meaning, whenToSay, example });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="mt-8">
            <h2 data-aos="zoom-in" className="text-3xl font-bold text-center">Lesson {lessonId} Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
                {lesson.map(vocabulary => (
                    <div key={vocabulary.id} className="card bg-base-100 shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-110">
                        <div className="card-body">
                            <h2 className="card-title">{vocabulary.word}</h2>
                            <p><span className="font-bold">Meaning:</span> {vocabulary.meaning}</p>
                            <p><span className="font-bold">Pronunciation:</span> {vocabulary.pronunciation}</p>
                            <p><span className="font-bold">Part of Speech:</span> {vocabulary.part_of_speech}</p>
                            <div className="card-actions justify-end">
                                <button 
                                    className="btn w-full mt-4 bg-[#1e0e5c] text-white font-bold" 
                                    onClick={() => handleViewMoreButton(vocabulary.word, vocabulary.meaning, vocabulary.when_to_say, vocabulary.example)}
                                >
                                    When to Say
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <Link to={'/start-learning'} className="flex justify-center mt-10">
                <button className="btn bg-[#1e0e5c] text-white font-bold">Back To Lesson</button>
            </Link>

            {isModalOpen && (
                <WhenToSayModal 
                    isOpen={isModalOpen} 
                    closeModal={closeModal}
                    word={modalData.word}
                    meaning={modalData.meaning}
                    whenToSay={modalData.whenToSay}
                    example={modalData.example}
                />
            )}
        </div>
    );
};

export default LessonDetails;
