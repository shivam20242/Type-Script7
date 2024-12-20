import React, { useState, useEffect } from 'react';

const Timer: React.FC = () => {
    const [seconds, setSeconds] = useState<number>(0);
    const [isActive, setIsActive] = useState<boolean>(false);

    // Start Timer
    const startTimer = () => {
        setIsActive(true);
    };

    // Stop Timer
    const stopTimer = () => {
        setIsActive(false);
    };

    // Reset Timer
    const resetTimer = () => {
        setSeconds(0);
        setIsActive(false);
    };

    useEffect(() => {
        let interval: number | undefined;
        if (isActive) {
            interval = window.setInterval(() => {
                setSeconds((prev) => prev + 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive]);

    return (
        <div className="timer">
            <h1>Timer: {seconds} seconds</h1>
            <div>
                <button onClick={startTimer}>Start</button>
                <button onClick={stopTimer}>Stop</button>
                <button onClick={resetTimer}>Reset</button>
            </div>
        </div>
    );
};

export default Timer;



