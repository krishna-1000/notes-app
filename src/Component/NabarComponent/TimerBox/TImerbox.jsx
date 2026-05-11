import React, { useState } from 'react'
import useCountDown from '../../../hooks/useCountDown';
import { useModal } from '../../../hooks/useModal';

const TimerBox = () => {
    const { setDuration, setSoundCheckbox } = useCountDown();
    const { closeModal } = useModal();
    const [checkbox, setCheckbox] = useState(false);

    const handleOnCheck = (e) => setCheckbox(e.target.checked);

    const handleOnclick = (time) => {
        setDuration(time);
        setSoundCheckbox(checkbox);
        closeModal();
    };

    const times = [15, 30, 45, 60];

    return (
        <div className='flex flex-col w-[92vw] sm:w-[70vw] md:w-[45vw] lg:w-[35vw] max-w-md bg-white rounded-2xl text-black overflow-hidden'>

            <div className='px-5 py-4 border-b border-gray-200'>
                <p className='text-lg sm:text-xl font-semibold'>Select Writing Duration</p>
            </div>

            <div className='grid grid-cols-2 gap-3 px-5 py-5 border-b border-gray-200'>
                {times.map((time) => (
                    <button
                        key={time}
                        onClick={() => handleOnclick(time)}
                        className='bg-blue-400 hover:bg-blue-500 active:scale-95 cursor-pointer text-white text-sm sm:text-base font-medium py-2.5 rounded-3xl transition-all duration-150'
                    >
                        {time} minutes
                    </button>
                ))}
            </div>

            <div className='flex items-center justify-center gap-2 px-5 py-4'>
                <input
                    id="charm-music"
                    type='checkbox'
                    checked={checkbox}
                    onChange={handleOnCheck}
                    className='w-4 h-4 accent-blue-400 cursor-pointer'
                />
                <label htmlFor="charm-music" className='text-sm sm:text-base cursor-pointer select-none'>
                    Play charm music
                </label>
            </div>

        </div>
    );
};

export default TimerBox;