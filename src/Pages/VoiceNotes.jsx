import React, { useEffect, useRef, useState } from 'react';
import { IoMicOutline, IoStopCircleOutline } from "react-icons/io5";
import localforage from "localforage";

const VoiceNotes = () => {
    const [isrecording, setIsRecording] = useState(false);
    const [duration, setDuration] = useState(0);
    const [minute, setMinute] = useState(0);
    
    const [recordings, setRecordings] = useState([]); 
    
    const mediaRecorderRef = useRef(null);
    const chunks = useRef([]);
    const timeRef = useRef(null);

    useEffect(() => {
        const loadNotes = async () => {
            try {
                const savedNotes = await localforage.getItem("voice_notes");
                if (savedNotes) {
                    const loadedNotes = savedNotes.map(note => ({
                        ...note,
                        url: URL.createObjectURL(note.blob)
                    }));
                    setRecordings(loadedNotes);
                }
            } catch (error) {
                console.error("Error loading notes", error);
            }
        };
        loadNotes();
    }, []);

    
    const saveToStorage = async (updatedRecordings) => {
        try {
            const notesToSave = updatedRecordings.map(({ id, blob, date }) => ({ id, blob, date }));
            await localforage.setItem("voice_notes", notesToSave);
        } catch (error) {
            console.error("Error saving to storage", error);
        }
    };


    const handleVoiceRecordingStart = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            setIsRecording(true);
            
            mediaRecorderRef.current = new MediaRecorder(stream);
            mediaRecorderRef.current.ondataavailable = (e) => {
                if (e.data.size > 0) chunks.current.push(e.data);
            };

            mediaRecorderRef.current.start();

            timeRef.current = setInterval(() => {
                setDuration(prev => {
                    if (prev === 59) {
                        setMinute(m => m + 1);
                        return 0;
                    }
                    return prev + 1;
                });
            }, 1000);

        } catch (err) {
            console.error("Microphone permission denied:", err);
        }
    };

    const handleVoiceRecordingStop = () => {
        mediaRecorderRef.current.onstop = async () => {
            const finalBlob = new Blob(chunks.current, { type: "audio/mp3" });
            chunks.current = []; 
            
        
            const dateObj = new Date();
            const dateStr = dateObj.toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' });

            const newRecording = {
                id: Date.now(),
                blob: finalBlob,
                url: URL.createObjectURL(finalBlob),
                date: dateStr
            };

            setRecordings(prev => {
                const updated = [...prev, newRecording];
                saveToStorage(updated);
                return updated;
            });
        };

        mediaRecorderRef.current.stop();
        mediaRecorderRef.current.stream.getTracks().forEach(track => track.stop());

        clearInterval(timeRef.current);
        setIsRecording(false);
        setDuration(0);
        setMinute(0);
    };

    const handleDelete = (idToRemove) => {
        setRecordings(prev => {
            const updated = prev.filter(item => item.id !== idToRemove);
            saveToStorage(updated); 
            return updated;
        });
    };

    const handleDownloadAudio = (blob) => {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = `voice_note_${Date.now()}.mp3`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    };

   return (
        <div className='flex justify-center h-[90vh] w-full px-4 sm:px-6'>
            <div className='overflow-auto bg-white text-black rounded-2xl flex flex-col items-center gap-3 w-full max-w-3xl mt-10 mb-6 h-auto pb-10'>
                
                <header className='text-3xl md:text-4xl font-bold mt-5 sm:mt-8 text-center'>
                    <h1>Voice Notes</h1>
                </header>
                
                <article className='flex flex-col mt-5 w-full items-center px-4'>
                    <div className='flex gap-2 w-full sm:w-auto justify-center'>
                        {isrecording ? (
                            <button onClick={handleVoiceRecordingStop} className='bg-red-500 rounded-2xl text-white p-3 px-6 flex items-center justify-center gap-2 w-full sm:w-auto transition-transform active:scale-95'>
                                <span><IoStopCircleOutline className="text-2xl md:text-3xl" /></span> 
                                <span className="text-sm md:text-base font-semibold">Stop Recording</span>
                            </button>
                        ) : (
                            <button onClick={handleVoiceRecordingStart} className='bg-blue-500 rounded-2xl text-white p-3 px-6 flex items-center justify-center gap-2 w-full sm:w-auto transition-transform active:scale-95'>
                                <span><IoMicOutline className="text-2xl md:text-3xl" /></span> 
                                <span className="text-sm md:text-base font-semibold">Start Recording</span>
                            </button>
                        )}
                    </div>
                    <div className='self-center mt-4 text-4xl md:text-5xl font-bold tracking-widest text-gray-800'>
                        <p>
                            {minute < 10 ? "0" + minute : minute}:
                            {duration < 10 ? "0" + duration : duration}
                        </p>
                    </div>
                </article>

                {recordings.length > 0 ? (
                    <div className="w-full flex flex-col items-center gap-6 mt-6 px-2 sm:px-0">
                        {recordings.map((item) => (
                            <div key={item.id} className="w-full sm:w-11/12 md:w-4/5 max-w-2xl px-2">
                                <section className='w-full h-auto flex flex-col gap-4 p-4 md:p-6 shadow-xl hover:shadow-2xl transition-shadow rounded-2xl border border-gray-100'>
                                    <header className='flex justify-between w-full px-1'>
                                        <p className='text-xs md:text-sm font-medium text-gray-500'>{item.date}</p>
                                    </header>
                                    <main className='flex flex-col gap-3 w-full'>
                                        <audio src={item.url} className='w-full outline-none' controls></audio>
                                    </main>
                                    <footer className='flex justify-between sm:justify-around gap-3 mt-2'>
                                        <button onClick={() => handleDownloadAudio(item.blob)} className='bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg p-2 px-4 md:px-8 text-sm md:text-base flex-1 sm:flex-none transition-colors'>
                                            Download
                                        </button>
                                        <button onClick={() => handleDelete(item.id)} className='bg-red-500 hover:bg-red-600 text-white font-medium rounded-lg p-2 px-4 md:px-8 text-sm md:text-base flex-1 sm:flex-none transition-colors'>
                                            Delete
                                        </button>
                                    </footer>
                                </section>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className='border-2 mt-10 border-dashed border-gray-300 bg-gray-50 w-11/12 md:w-4/5 max-w-lg h-auto flex flex-col items-center justify-center p-8 md:p-12 rounded-2xl text-center'>
                        <label><IoMicOutline className='text-gray-400 text-6xl md:text-7xl mb-2' /></label>
                        <p className='text-gray-500 font-medium text-sm md:text-base'>Start recording voice notes</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default VoiceNotes;