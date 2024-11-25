import { useEffect } from "react";

const WhenToSayModal = ({ isOpen, closeModal, word, meaning, whenToSay, example }) => {
    useEffect(() => {
        const dialog = document.getElementById('my_modal_5');
        if (isOpen) {
            dialog.showModal();
        } else {
            dialog.close();
        }
    }, [isOpen]);

    return (
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle w-11/12 mx-auto">
            <div className="modal-box">
                <p><span className="font-bold">Word:</span> {word}</p>
                <p><span className="font-bold">Meaning:</span> {meaning}</p>
                <p><span className="font-bold">When to Say:</span> {whenToSay}</p>
                <p><span className="font-bold">Example:</span> {example}</p>
                <div className="modal-action">
                    {/* Close button */}
                    <button className="btn w-full bg-[#1e0e5c] text-white font-bold" onClick={closeModal}>
                        Close
                    </button>
                </div>
            </div>
        </dialog>
    );
};

export default WhenToSayModal;
