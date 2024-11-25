import CountUp from "react-countup";

const SuccessSection = ({ start = 0 }) => {
    return (
        <div>
            {/* Header Section */}
            <div className="mt-8 space-y-2">
                <h3 className="text-3xl text-center font-bold">Our Success</h3>
                <p className="text-[#09080F99] text-sm text-center">
                    Our success story is so incredible. You can be a part of our success.
                </p>
            </div>

            {/* Stats Section */}
            <div className="flex justify-evenly gap-5 text-center auto-cols-max mt-10 px-4 py-14 bg-[#1e0e5c] text-white rounded-xl">
                {/* Users Count */}
                <div className="flex flex-col items-center">
                    <span>Users</span>
                    <span className="countdown font-mono text-5xl">
                        <CountUp
                            start={start}
                            end={24600}
                            duration={2.75}
                            separator=","
                            suffix=" Users"
                            onEnd={() => console.log("Users count ended! 👏")}
                            onStart={() => console.log("Users count started! 💨")}
                            delay={0} 
                        >
                            {({ countUpRef }) => <span ref={countUpRef} />}
                        </CountUp>
                    </span>
                    From January 2022 to February 2024
                </div>

                {/* Lesson Count */}
                <div className="flex flex-col items-center">
                    <span>Lesson Count</span>
                    <span className="countdown font-mono text-5xl">
                        <CountUp
                            start={start}
                            end={810}
                            duration={2.75}
                            separator=","
                            suffix=" Lessons"
                            onEnd={() => console.log("Lesson count ended! 👏")}
                            onStart={() => console.log("Lesson count started! 💨")}
                            delay={0}
                        >
                            {({ countUpRef }) => <span ref={countUpRef} />}
                        </CountUp>
                    </span>
                    ↗︎ 40 (6%)
                </div>

                {/* Vocabulary Count */}
                <div className="flex flex-col items-center">
                    <span>Vocabulary Count</span>
                    <span className="countdown font-mono text-5xl">
                        <CountUp
                            start={start}
                            end={33600}
                            duration={2.75}
                            separator=","
                            suffix=" Words"
                            onEnd={() => console.log("Vocabulary count ended! 👏")}
                            onStart={() => console.log("Vocabulary count started! 💨")}
                            delay={0}
                        >
                            {({ countUpRef }) => <span ref={countUpRef} />}
                        </CountUp>
                    </span>
                    ↘︎ 90 (14%)
                </div>

                {/* Tutorials Count */}
                <div className="flex flex-col items-center">
                    <span>Tutorial</span>
                    <span className="countdown font-mono text-5xl">
                        <CountUp
                            start={start}
                            end={1600}
                            duration={2.75}
                            separator=","
                            suffix=" Tutorials"
                            onEnd={() => console.log("Tutorial count ended! 👏")}
                            onStart={() => console.log("Tutorial count started! 💨")}
                            delay={0}
                        >
                            {({ countUpRef }) => <span ref={countUpRef} />}
                        </CountUp>
                    </span>
                    ↘︎ 70 (19%)
                </div>
            </div>
        </div>
    );
};

export default SuccessSection;
