import CountUp from 'react-countup';

const SuccessSection = () => {
    return (
        <div>
            <CountUp
                start={-875.039}
                end={160527.012}
                duration={2.75}
                separator=" "
                decimals={4}
                decimal=","
                // prefix="EUR "
                // suffix=" left"
                onEnd={() => console.log('Ended! 👏')}
                onStart={() => console.log('Started! 💨')}
            >
                {({ countUpRef, start }) => (
                    <div>
                        <span ref={countUpRef} />
                        <button onClick={start}>Start</button>
                    </div>
                )}
            </CountUp>


            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                <div className="flex flex-col">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": 15 }}></span>
                    </span>
                    days
                </div>
                <div className="flex flex-col">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": 10 }}></span>
                    </span>
                    hours
                </div>
                <div className="flex flex-col">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": 24 }}></span>
                    </span>
                    min
                </div>
                <div className="flex flex-col">
                    <span className="countdown font-mono text-5xl">
                        {/* <span style={{ "--value": ${counter}}}></span> */}
                </span>
                sec
            </div>
        </div>
        </div >
    );
};

export default SuccessSection;