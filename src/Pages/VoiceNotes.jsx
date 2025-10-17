import React, { useEffect, useRef, useState } from 'react'
import { IoMicOutline } from "react-icons/io5";
import { CiPause1, CiStop1 } from "react-icons/ci";
import { CiPlay1 } from "react-icons/ci";
import { IoStopCircleOutline } from "react-icons/io5";
import { CgPlayStopR } from 'react-icons/cg';
import { TimerContext } from '../contextApi/TimerContextApi';




const VoiceNotes = () => {
    const [voice, setVoice] = useState(true);
    const [isrecording, setIsRecording] = useState(false);
    const [pause, setIsPause] = useState(false);
    const [duration, setDuration] = useState(0);
    const [minute, setMinute] = useState(0);
    const [date, setDate] = useState("");
    const [createdAt, setCreatedAt] = useState(0);
    ////
    const mediaRecorderRef = useRef(null);
    const [audioURL, setAudioURL] = useState([]);
    const chunks = useRef([]);
    const timeRef = useRef(null);
    const blob = useRef(null);

    const handleDownloadAudio = () => {

        const filename = "recoded_from_webapp";
        const url = URL.createObjectURL(blob.current);
        const a = document.createElement("a");
        a.style.display = "none"
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    }


    const handleVoiceRecordingStart = async () => {
        try {
            setIsRecording(true);
            // setIsRecording(!isrecording)
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            console.log("stream", stream);
            mediaRecorderRef.current = new MediaRecorder(stream);
            mediaRecorderRef.current.ondataavailable = (e) => {
                if (e.data.size > 0) {
                    chunks.current.push(e.data);
                }
            };


            mediaRecorderRef.current.start();

            timeRef.current = setInterval(() => {

                setDuration(prev => {
                    if (prev == 60) {
                        setDuration(0);
                        const tempMinute = prev / 60;
                        console.log(tempMinute);
                        console.log("minute her ", minute)
                        setMinute(minute + tempMinute)

                        return
                    }
                    return prev + 1;
                })
            }, 1000)

        } catch (err) {
            console.error("Microphone permission denied:", err);
        }

    }
    const handleVoiceRecordingStop = () => {

        mediaRecorderRef.current.onstop = () => {

            blob.current = new Blob(chunks.current, { type: "audio/mp3" });
            chunks.current = [];
            const url = URL.createObjectURL(blob.current);
            setAudioURL(prev => [...prev, url]);

        };
        mediaRecorderRef.current.stop();
        // Stop all tracks of the mic stream
        mediaRecorderRef.current.stream.getTracks().forEach(track => {
            track.stop();  // this actually releases the mic
        });
        console.log(mediaRecorderRef.current.state);

        clearInterval(timeRef.current)
        timeRef.current = null;
        setIsRecording(false);
        setVoice(true);
        setDuration(0)

        setMinute(0)

        const date = new Date().getDate();
        const month = new Date().getMonth();
        const year = new Date().getFullYear();
        let monthInEnglish = "";

        switch (month) {
            case 1:
                monthInEnglish = "jan"
                break;
            case 2:
                monthInEnglish = "Feb"
                break;
            case 3:
                monthInEnglish = "March"
                break;
            case 4:
                monthInEnglish = "April"
                break;
            case 5:
                monthInEnglish = "May"
                break;
            case 6:
                monthInEnglish = "June"
                break;
            case 7:
                monthInEnglish = "July"
                break;
            case 8:
                monthInEnglish = "Aug"
                break;
            case 9:
                monthInEnglish = "Sept"
                break;
            case 10:
                monthInEnglish = "Oct"
                break;
            case 11:
                monthInEnglish = "Nov"
                break;
            case 12:
                monthInEnglish = "Dec"
                break;
            default:
                monthInEnglish = ""
                break

        }
        setDate(date + " " + monthInEnglish + " " + year)
    }

    const handleDelete = (index) => {
        const deleteItem = index;
        const newArray = audioURL.filter((_, ind) => {
            return deleteItem != ind;
        })
        setAudioURL(newArray);
    }

    return (
        <div className='  flex justify-center h-[90vh] w-full '>
            <div className='overflow-auto bg-white text-black rounded-2xl flex flex-col items-center  gap-3 w-150 mt-10 mb-2 h-auto'>
                <header className=' text-4xl font-bold mt-5'>
                    <h1>Voice Notes</h1>
                </header>
                <article className='flex flex-col mt-5'>
                    <div className='flex gap-2'>
                        {
                            isrecording ? <button onClick={() => handleVoiceRecordingStop()} className='bg-red-500 rounded-2xl text-white p-3 flex items-center justify-center'>
                                <span><IoStopCircleOutline size={30} /></span>
                                Stop Recording</button>
                                :
                                <button onClick={() => handleVoiceRecordingStart()} className='bg-blue-500 rounded-2xl text-white p-3 flex items-center justify-center'>
                                    <span><IoMicOutline size={30} /></span>
                                    Start Recording</button>
                        }

                        {/* {
                            isrecording ?  <button className='bg-red-500 rounded-2xl text-white p-3'><CgPlayStopR size={30} />
                            </button> : <div></div>
                        } */}


                    </div>
                    <div className='self-center mt-4 text-3xl font-bold '>
                        <p>
                            {
                                minute < 10 ? "0" + minute : minute
                            }:
                            {
                                duration < 10 ? "0" + duration : duration
                            }
                        </p>
                    </div>
                </article>
                {audioURL.length > 0 ?
                    audioURL.map((item, index) => (
                        <div key={index}>
                            <section className='w-135 h-auto flex flex-col gap-2 p-4 mt-10 shadow-2xl rounded-2xl border-dashed'>
                                <header className='flex justify-between  w-120'>
                                    <p className='text-sm'>{date}</p>
                                    <p className='text-sm'>2 minute ago</p>
                                </header>
                                <main className='flex flex-col gap-3'>

                                    <audio src={item} className='w-full' controls></audio>
                                    <div className='w-full'>
                                        <textarea placeholder='Add notes here...' className='w-full h-20 outline-none shadow-sm shadow-gray-400 outline-1 '></textarea>
                                    </div>
                                </main>
                                <footer className='flex justify-around '>
                                    <button onClick={() => handleDownloadAudio()} className='bg-green-400 w-fit p-2 '>Download</button>
                                    <button onClick={() => handleDelete(index)} className='bg-red-400 w-fit  p-2'>Delete</button>
                                </footer>


                            </section>
                        </div>
                    ))
                    :
                    <div className='border-2 mt-10 border-dashed border-gray-500 w-135 h-auto flex flex-col items-center justify-center p-10'>
                        <label><IoMicOutline color='gray' size={50} /></label>
                        <p className='text-gray-500'>Start recording voice notes</p>
                    </div>

                }

            </div>
        </div>
    )
}

export default VoiceNotes
