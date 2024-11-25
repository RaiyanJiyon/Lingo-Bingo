const FAQ = () => {
    return (
        <div>
            <div className="mt-20 space-y-2 pb-10">
                <h3 className="text-3xl text-center font-bold">Frequently Asked Questions</h3>
            </div>

            <div className="space-y-4">
                <div className="collapse collapse-plus bg-[#1e0e5c] text-white">
                    <input type="radio" name="my-accordion-3" defaultChecked />
                    <div className="collapse-title text-xl font-medium">1. How can I effectively memorize new words?</div>
                    <div className="collapse-content">
                        <p>To effectively memorize new words, start by learning in small batches, such as 5–10 words per day. Use flashcards or apps to practice active recall and make connections with the words by creating sentences or stories that include them.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-[#1e0e5c] text-white">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">2. How often should I practice vocabulary to see improvement?</div>
                    <div className="collapse-content">
                        <p>Consistency is key to improving vocabulary. Dedicate at least 15–30 minutes daily to learning and practicing new words. Additionally, review previously learned words on a weekly basis to ensure long-term retention.</p>
                    </div>
                </div>
                <div className="collapse collapse-plus bg-[#1e0e5c] text-white">
                    <input type="radio" name="my-accordion-3" />
                    <div className="collapse-title text-xl font-medium">3. What is the best way to improve pronunciation?</div>
                    <div className="collapse-content">
                        <p>Improving pronunciation starts with listening to native speakers and practicing along with them. Use online tools or language learning apps that provide audio examples of words. Break the words into syllables and practice them slowly, focusing on the correct sound.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;