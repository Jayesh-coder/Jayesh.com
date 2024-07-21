import React, { useRef, useState, useEffect } from "react";
import "./Music.css";
import sound1 from "../music/coffee-shop-acoustic.mp3";
import sound2 from "../music/Colorful-Flowers.mp3"; // Add more tracks as needed
import sound3 from "../music/Morning-Routine.mp3"; // Add more tracks as needed
import sound4 from "../music/On-My-Way.mp3"; // Add more tracks as needed

export const Music = () => {
    const audioFiles = [sound4,sound2, sound1,sound3 ]; // Array of audio files
    const audioRef = useRef(new Audio(audioFiles[0]));
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(0);
    const [volume, setVolume] = useState(1); // Volume state (1 is max, 0 is mute)

    function togglePlayPause() {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    }

    function playNextTrack() {
        let nextTrack = (currentTrack + 1) % audioFiles.length;
        setCurrentTrack(nextTrack);
        audioRef.current.src = audioFiles[nextTrack];
        audioRef.current.play();
    }

    function playPreviousTrack() {
        let prevTrack = (currentTrack - 1 + audioFiles.length) % audioFiles.length;
        setCurrentTrack(prevTrack);
        audioRef.current.src = audioFiles[prevTrack];
        audioRef.current.play();
    }

    function handleVolumeChange(event) {
        const newVolume = parseFloat(event.target.value);
        setVolume(newVolume);
        audioRef.current.volume = newVolume;
    }

    // Add event listener for when the audio ends
    useEffect(() => {
        audioRef.current.onended = playNextTrack;
    }, [currentTrack]);

    return (
        <div className="music" style={{display:"flex"}}>
            <button onClick={playPreviousTrack} className="music-button">
                ⏮️
            </button>
            <button onClick={togglePlayPause} className="music-button">
                {isPlaying ? "⏸️" : "▶️"}
            </button>
            <button onClick={playNextTrack} className="music-button">
                ⏭️
            </button>
            <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="volume-slider"
                style={{margin:"0.8rem"}}
            />
        </div>
    );
};
