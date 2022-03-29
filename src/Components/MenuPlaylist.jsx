import React from "react";
import "../Styles/menuplaylist.css";
import { FaPlus } from "react-icons/fa";
import { BsMusicNoteList, BsTrash } from "react-icons/bs";
import { PlayList } from "./PlayList";

const MenuPlaylist = () => {
  return (
    <div className="playlistContainer">
      <div className="listTop">
        <p>Playlist</p>
        <i>
          <FaPlus />
        </i>
      </div>
      <div className="playListScroll">
        {PlayList &&
          PlayList.map((list) => (
            <div className="playlist" key={list.id}>
              <i className="list">
                <BsMusicNoteList />
              </i>
              <p>{list.name}</p>
              <i className="trash">
                <BsTrash />
              </i>
            </div>
          ))}
      </div>
    </div>
  );
};

export { MenuPlaylist };
