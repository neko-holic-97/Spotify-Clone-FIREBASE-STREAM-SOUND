import React, { useEffect, useRef, useState } from "react";
import "../Styles/musicplayer.css";
import {
  FaRegHeart,
  FaHeart,
  FaStepBackward,
  FaBackward,
  FaPause,
  FaPlay,
  FaForward,
  FaStepForward,
  FaShareAlt,
} from "react-icons/fa";
import { BsDownload } from "react-icons/bs";

const MusicPlayer = ({ song, img }) => {
  const [isLike, setLike] = useState(false);
  const [isPlaying, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioPlayer = useRef();
  const progessBar = useRef();
  const animation = useRef();

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const Time = (sec) => {
    const minutes = Math.floor(sec / 60);
    const returnMin = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(sec % 60);
    const returnSec = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${returnMin}:${returnSec}`;
  };

  const changeLike = () => {
    setLike(!isLike);
  };

  const changePlayPause = () => {
    const prevSong = isPlaying;

    if (!prevSong) {
      audioPlayer.current.play();
      animation.current = requestAnimationFrame(Playing);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animation.current);
    }

    setPlaying(!prevSong);
  };

  const Playing = () => {
    progessBar.current.value = audioPlayer.current.currentTime;
    changeCurrentTime();
    animation.current = requestAnimationFrame(Playing);
  };

  const changeProgess = () => {
    audioPlayer.current.currentTime = progessBar.current.value;
    changeCurrentTime();
  };

  const changeCurrentTime = () => {
    progessBar.current.style.setProperty(
      "--player-played",
      `${(progessBar.current.value / duration) * 100}%`
    );

    setCurrentTime(progessBar.current.value);
  };

  return (
    <div className="musicPlayer">
      <div className="songImg">
        <img src={img} alt="" />
      </div>
      <div className="songAtr">
        <audio src={song} preload="metadata" ref={audioPlayer} />

        <div className="top">
          <div className="left">
            <div className="likeSong" onClick={changeLike}>
              {isLike ? (
                <i>
                  <FaHeart />
                </i>
              ) : (
                <i>
                  <FaRegHeart />
                </i>
              )}
            </div>
            <div className="downLoad">
              <i>
                <BsDownload />
              </i>
            </div>
          </div>

          <div className="middle">
            <div className="back">
              <i>
                <FaStepBackward />
              </i>
              <i>
                <FaBackward />
              </i>
            </div>
            <div className="playPause" onClick={changePlayPause}>
              {isPlaying ? (
                <i>
                  <FaPause />
                </i>
              ) : (
                <i>
                  <FaPlay />
                </i>
              )}
            </div>
            <div className="forward">
              <i>
                <FaForward />
              </i>
              <i>
                <FaStepForward />
              </i>
            </div>
          </div>

          <div className="right">
            <i>
              <FaShareAlt />
            </i>
          </div>
        </div>

        <div className="bottom">
          <div className="currentTime">{Time(currentTime)}</div>
          <input
            type="range"
            className="progressBar"
            ref={progessBar}
            onChange={changeProgess}
          />
          <div className="duration">
            {duration && !isNaN(duration) && Time(duration)
              ? Time(duration)
              : "00:00"}
          </div>
        </div>
      </div>
    </div>
  );
};

export { MusicPlayer };
