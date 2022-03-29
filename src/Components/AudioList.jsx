import React, { useState, useEffect } from "react";
import "../Styles/audiolist.css";
import { FaHeadphones, FaRegClock, FaHeart, FaRegHeart } from "react-icons/fa";
import { Songs } from "../Components/Songs";
import { MusicPlayer } from "./MusicPlayer";

const AudioList = () => {
  const [songs, setSongs] = useState(Songs);
  const [song, setSong] = useState(Songs[0].song);
  const [img, setImg] = useState(Songs[0].img);

  useEffect(() => {
    const songs = document.querySelectorAll(".songs");

    function changeMenuActive() {
      songs.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    songs.forEach((n) => n.addEventListener("click", changeMenuActive));
  }, []);

  const changeFavorite = (id) => {
    Songs.forEach((song) => {
      if (song.id === id) {
        song.favorite = !song.favorite;
      }
    });

    setSongs([...Songs]);
  };

  const setMainSong = (songSrc, imgSrc) => {
    setSong(songSrc);
    setImg(imgSrc);
  };

  return (
    <div className="audioList">
      <h2 className="title">
        The list <span>{`${Songs.length}songs`}</span>
      </h2>

      <div className="songsContainer">
        {songs &&
          songs.map((song, index) => (
            <div
              className="songs"
              key={song?.id}
              onClick={() => setMainSong(song?.song, song?.img)}
            >
              <div className="count">{`#${index + 1}`}</div>
              <div className="song">
                <div className="imgBox">
                  <img src={song?.img} alt="" />
                </div>
                <div className="section">
                  <p className="songName">
                    {song?.songName}
                    <span className="artistName__span"> {song?.artist}</span>
                  </p>
                  <div className="hits">
                    <p className="hit">
                      <i>
                        <FaHeadphones />
                      </i>
                      {song?.view}
                    </p>
                    <p className="duration">
                      <i>
                        <FaRegClock />
                      </i>
                      {song?.duration}
                    </p>
                    <div
                      className="favorite"
                      onClick={() => changeFavorite(song?.id)}
                    >
                      {song?.favorite ? (
                        <i>
                          <FaHeart />
                        </i>
                      ) : (
                        <i>
                          <FaRegHeart />
                        </i>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      <MusicPlayer song={song} img={img} />
    </div>
  );
};

export { AudioList };
