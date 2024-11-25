import CountUp from "react-countup";

const SuccessSection = ({ start = 0 }) => {
    return (
        <div>
            {/* Header Section */}
            <div className=" space-y-2">
                <h3 className="text-3xl text-center font-bold">Our Success</h3>
                <p className="text-[#09080F99] text-sm text-center">
                    Our success story is so incredible. You can be a part of our success.
                </p>
            </div>

            {/* Stats Section */}
            <div className="flex flex-col lg:flex-row justify-evenly gap-5 text-center auto-cols-max mt-10 px-4 py-14 bg-[#1e0e5c] text-white rounded-xl">
                {/* Users Count */}
                <div className="flex flex-col items-center space-y-2 md:space-y-4">
                    <span className="text-xl">Users</span>
                    <span className="font-mono text-5xl">
                        <CountUp
                            // start={start}
                            end={24600}
                            duration={2.75}
                            separator=","
                            // suffix=" Users"
                            delay={0}
                        >
                            {({ countUpRef }) => <span ref={countUpRef} />}
                        </CountUp>
                    </span>
                    <span className="text-xl">From January 2022 to February 2024</span>
                </div>

                {/* Lesson Count */}
                <div className="flex flex-col items-center space-y-2 md:space-y-4">
                    <span className="text-xl">Lesson Count</span>
                    <span className="font-mono text-5xl">
                        <CountUp
                            start={start}
                            end={810}
                            duration={2.75}
                            separator=","
                            delay={0}
                        >
                            {({ countUpRef }) => <span ref={countUpRef} />}
                        </CountUp>
                    </span>
                    <span className="text-xl">↗︎ 40 (6%)</span>
                </div>

                {/* Vocabulary Count */}
                <div className="flex flex-col items-center space-y-2 md:space-y-4">
                    <span className="text-xl">Vocabulary Count</span>
                    <span className="font-mono text-5xl">
                        <CountUp
                            start={start}
                            end={33600}
                            duration={2.75}
                            separator=","
                            delay={0}
                        >
                            {({ countUpRef }) => <span ref={countUpRef} />}
                        </CountUp>
                    </span>
                    <span className="text-xl">↘︎ 90 (14%)</span>
                </div>

                {/* Tutorials Count */}
                <div className="flex flex-col items-center space-y-2 md:space-y-4">
                    <span className="text-xl">Tutorial</span>
                    <span className="font-mono text-5xl">
                        <CountUp
                            start={start}
                            end={1600}
                            duration={2.75}
                            separator=","
                            delay={0}
                        >
                            {({ countUpRef }) => <span ref={countUpRef} />}
                        </CountUp>
                    </span>
                    <span className="text-xl">↘︎ 70 (19%)</span>
                </div>
            </div>
        </div>
    );
};

export default SuccessSection;
